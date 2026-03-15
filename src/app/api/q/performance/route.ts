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
// WITH p, entryPrice, d48, resolutionPnl,
//   CASE
//     WHEN d48 IS NOT NULL AND (d48 / entryPrice) <= -0.20 THEN -0.20 * entryPrice
//     WHEN resolutionPnl IS NOT NULL THEN resolutionPnl
//     WHEN d48 IS NOT NULL THEN d48
//     ELSE NULL
//   END AS stratPnl
// WHERE stratPnl IS NOT NULL
// RETURN
//   count(*) AS trades,
//   round(avg((stratPnl / entryPrice) * 100), 1) AS avgRoi

// Per-trade query — 5 most recent where 48h ROI is available:
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
//   CASE WHEN p.direction > 0 THEN p.delta48h ELSE -p.delta48h END AS d48
// WITH m, p, entryPrice, d48,
//   CASE WHEN d48 IS NOT NULL THEN round((d48 / entryPrice) * 100, 1) ELSE null END AS roi
// WHERE roi IS NOT NULL
// RETURN
//   m.question AS question,
//   CASE WHEN p.direction > 0 THEN 'YES' ELSE 'NO' END AS direction,
//   round(entryPrice, 2) AS entryPrice,
//   roi,
//   p.createdAt AS calledAt
// ORDER BY p.createdAt DESC
// LIMIT 5

import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    summary: {
      trades: 12,
      avgRoi: 6.1,
    },
    trades: [
      {
        question: 'U.S. strike on Somalia by March 21?',
        direction: 'YES',
        entryPrice: 0.62,
        roi: 18.5,
        calledAt: '2026-03-10T08:00:00Z',
      },
      {
        question: 'Will US or Israel strike Iran by December 31, 2026?',
        direction: 'YES',
        entryPrice: 0.75,
        roi: 6.7,
        calledAt: '2026-03-09T14:00:00Z',
      },
      {
        question: 'US strikes Iran by December 31, 2026?',
        direction: 'YES',
        entryPrice: 0.74,
        roi: 8.1,
        calledAt: '2026-03-09T14:00:00Z',
      },
      {
        question: 'US x Iran ceasefire by April 30?',
        direction: 'NO',
        entryPrice: 0.59,
        roi: 4.1,
        calledAt: '2026-03-08T10:00:00Z',
      },
      {
        question: 'US x Cuba military clash in 2026?',
        direction: 'NO',
        entryPrice: 0.54,
        roi: 14.8,
        calledAt: '2026-03-06T12:00:00Z',
      },
    ],
  }

  return NextResponse.json(data)
}
