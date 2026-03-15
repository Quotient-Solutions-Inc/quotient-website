// Aggregate performance query (Neo4j Cypher) — 9-day window:
//
// MATCH (p:Prediction:Forecast)-[:ON_MARKET]->(m:Market)
// WHERE p.oddsBackfillAt IS NOT NULL
//   AND p.probability IS NOT NULL
//   AND p.yesOddsAtCreation > 0.1
//   AND p.yesOddsAtCreation < 0.9
//   AND abs(p.probability - p.yesOddsAtCreation) >= 0.1
//   AND m.volume24hr > 20000
//   AND p.createdAt > datetime() - duration({days: 9})
// WITH m, p ORDER BY p.createdAt ASC
// WITH m, collect(p)[0] AS p
// WITH p,
//   CASE WHEN p.direction > 0
//     THEN p.yesOddsAtCreation
//     ELSE 1 - p.yesOddsAtCreation
//   END AS entryPrice,
//   CASE WHEN p.direction > 0 THEN p.delta24h ELSE -p.delta24h END AS d24,
//   CASE WHEN p.direction > 0 THEN p.delta48h ELSE -p.delta48h END AS d48,
//   CASE WHEN p.resolution IS NOT NULL
//     THEN CASE
//       WHEN p.direction > 0 AND p.resolution = 'yes' THEN (1 - p.yesOddsAtCreation)
//       WHEN p.direction > 0 AND p.resolution = 'no' THEN -p.yesOddsAtCreation
//       WHEN p.direction < 0 AND p.resolution = 'no' THEN p.yesOddsAtCreation
//       WHEN p.direction < 0 AND p.resolution = 'yes' THEN -(1 - p.yesOddsAtCreation)
//       ELSE 0
//     END
//     ELSE NULL
//   END AS resolutionPnl
// WITH p, entryPrice, d24, d48, resolutionPnl,
//   CASE
//     WHEN d24 IS NOT NULL AND (d24 / entryPrice) <= -0.20 THEN -0.20 * entryPrice
//     WHEN resolutionPnl IS NOT NULL THEN resolutionPnl
//     WHEN d24 IS NOT NULL THEN d24
//     ELSE NULL
//   END AS stratPnl24,
//   CASE
//     WHEN d48 IS NOT NULL AND (d48 / entryPrice) <= -0.20 THEN -0.20 * entryPrice
//     WHEN resolutionPnl IS NOT NULL THEN resolutionPnl
//     WHEN d48 IS NOT NULL THEN d48
//     ELSE NULL
//   END AS stratPnl48
// WHERE stratPnl24 IS NOT NULL OR stratPnl48 IS NOT NULL
// RETURN
//   sum(CASE WHEN stratPnl24 IS NOT NULL THEN 1 ELSE 0 END) AS total24,
//   round(avg(CASE WHEN stratPnl24 IS NOT NULL THEN (stratPnl24 / entryPrice) * 100 END), 2) AS avgRoi24,
//   round(toFloat(sum(CASE WHEN stratPnl24 > 0 THEN 1 ELSE 0 END)) /
//     nullIf(sum(CASE WHEN stratPnl24 IS NOT NULL THEN 1 ELSE 0 END), 0), 3) AS winRate24,
//   round(avg(CASE WHEN stratPnl24 > 0 THEN (stratPnl24 / entryPrice) * 100 END), 2) AS avgWin24,
//   round(avg(CASE WHEN stratPnl24 <= 0 THEN (stratPnl24 / entryPrice) * 100 END), 2) AS avgLoss24,
//   sum(CASE WHEN stratPnl48 IS NOT NULL THEN 1 ELSE 0 END) AS total48,
//   round(avg(CASE WHEN stratPnl48 IS NOT NULL THEN (stratPnl48 / entryPrice) * 100 END), 2) AS avgRoi48,
//   round(toFloat(sum(CASE WHEN stratPnl48 > 0 THEN 1 ELSE 0 END)) /
//     nullIf(sum(CASE WHEN stratPnl48 IS NOT NULL THEN 1 ELSE 0 END), 0), 3) AS winRate48,
//   round(avg(CASE WHEN stratPnl48 > 0 THEN (stratPnl48 / entryPrice) * 100 END), 2) AS avgWin48,
//   round(avg(CASE WHEN stratPnl48 <= 0 THEN (stratPnl48 / entryPrice) * 100 END), 2) AS avgLoss48

// Per-trade query (Neo4j Cypher) — returns individual market data:
//
// MATCH (p:Prediction:Forecast)-[:ON_MARKET]->(m:Market)
// WHERE p.oddsBackfillAt IS NOT NULL
//   AND p.probability IS NOT NULL
//   AND p.yesOddsAtCreation > 0.1
//   AND p.yesOddsAtCreation < 0.9
//   AND abs(p.probability - p.yesOddsAtCreation) >= 0.1
//   AND m.volume24hr > 20000
//   AND p.createdAt > datetime() - duration({days: 9})
// WITH m, p ORDER BY p.createdAt ASC
// WITH m, collect(p)[0] AS p
// WITH m, p,
//   CASE WHEN p.direction > 0
//     THEN p.yesOddsAtCreation
//     ELSE 1 - p.yesOddsAtCreation
//   END AS entryPrice,
//   CASE WHEN p.direction > 0 THEN p.delta24h ELSE -p.delta24h END AS d24,
//   CASE WHEN p.direction > 0 THEN p.delta48h ELSE -p.delta48h END AS d48
// RETURN
//   m.question AS question,
//   CASE WHEN p.direction > 0 THEN 'YES' ELSE 'NO' END AS direction,
//   round(entryPrice, 2) AS entryPrice,
//   round(p.yesOddsAtCreation, 2) AS yesOdds,
//   round(p.probability, 2) AS qForecast,
//   round(abs(p.probability - p.yesOddsAtCreation) * 100, 0) AS spreadPts,
//   CASE WHEN d24 IS NOT NULL THEN round((d24 / entryPrice) * 100, 1) ELSE null END AS roi24,
//   CASE WHEN d48 IS NOT NULL THEN round((d48 / entryPrice) * 100, 1) ELSE null END AS roi48,
//   p.createdAt AS calledAt,
//   m.volume24hr AS volume
// ORDER BY p.createdAt DESC

import { NextResponse } from 'next/server'

export async function GET() {
  // Mock data shaped by the queries above.
  // Markets are from the wireframe reference — real Polymarket-style geopolitical questions.
  const data = {
    summary: {
      total24: 12,
      avgRoi24: 8.4,
      winRate24: 0.667,
      avgWin24: 14.2,
      avgLoss24: -3.8,
      total48: 12,
      avgRoi48: 6.1,
      winRate48: 0.583,
      avgWin48: 12.8,
      avgLoss48: -4.2,
    },
    trades: [
      {
        question: 'Will Russia capture Kostyantynivka by June 30?',
        direction: 'NO',
        yesOdds: 0.72,
        qForecast: 0.15,
        entryPrice: 0.28,
        spreadPts: 56,
        roi24: 5.6,
        roi48: 8.2,
        calledAt: '2026-03-04T08:00:00Z',
        volume: 142000,
        topSignal: 'Frontline Situation as of March 4, 2026',
      },
      {
        question: 'US x Cuba military clash in 2026?',
        direction: 'NO',
        yesOdds: 0.46,
        qForecast: 0.04,
        entryPrice: 0.54,
        spreadPts: 50,
        roi24: 11.1,
        roi48: 14.8,
        calledAt: '2026-03-06T12:00:00Z',
        volume: 88000,
        topSignal: 'The Coming Showdown Over Cuba · Foreign Affairs',
      },
      {
        question: 'US x Iran ceasefire by April 30?',
        direction: 'NO',
        yesOdds: 0.41,
        qForecast: 0.20,
        entryPrice: 0.59,
        spreadPts: 38,
        roi24: 7.3,
        roi48: 4.1,
        calledAt: '2026-03-08T10:00:00Z',
        volume: 215000,
        topSignal: 'Trump demands immediate pardon for Netanyahu',
      },
      {
        question: 'Will US or Israel strike Iran by December 31, 2026?',
        direction: 'YES',
        yesOdds: 0.75,
        qForecast: 0.91,
        entryPrice: 0.75,
        spreadPts: 16,
        roi24: 4.0,
        roi48: 6.7,
        calledAt: '2026-03-09T14:00:00Z',
        volume: 320000,
        topSignal: 'IRGC naval activity in Strait of Hormuz · Reuters',
      },
      {
        question: 'US strikes Iran by December 31, 2026?',
        direction: 'YES',
        yesOdds: 0.74,
        qForecast: 0.88,
        entryPrice: 0.74,
        spreadPts: 14,
        roi24: 5.4,
        roi48: 8.1,
        calledAt: '2026-03-09T14:00:00Z',
        volume: 285000,
        topSignal: 'Pentagon briefing on CENTCOM posture · DoD',
      },
      {
        question: 'U.S. strike on Somalia by March 21?',
        direction: 'YES',
        yesOdds: 0.62,
        qForecast: 0.85,
        entryPrice: 0.62,
        spreadPts: 23,
        roi24: 12.9,
        roi48: 18.5,
        calledAt: '2026-03-10T08:00:00Z',
        volume: 45000,
        topSignal: 'AFRICOM drone deployment confirmed · AP',
      },
    ],
  }

  return NextResponse.json(data)
}
