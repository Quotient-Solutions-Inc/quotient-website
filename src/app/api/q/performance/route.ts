// Production query (Neo4j Cypher) — will replace mock data:
//
// UNWIND [9, 14, 28] AS windowDays
// CALL {
//   WITH windowDays
//   MATCH (p:Prediction:Forecast)-[:ON_MARKET]->(m:Market)
//   WHERE p.oddsBackfillAt IS NOT NULL
//     AND p.probability IS NOT NULL
//     AND p.yesOddsAtCreation > 0.1
//     AND p.yesOddsAtCreation < 0.9
//     AND abs(p.probability - p.yesOddsAtCreation) >= 0.1
//     AND m.volume24hr > 20000
//     AND p.createdAt > datetime() - duration({days: windowDays})
//   WITH windowDays, m, p ORDER BY p.createdAt ASC
//   WITH windowDays, m, collect(p)[0] AS p
//   WITH windowDays, p,
//     CASE WHEN p.direction > 0
//       THEN p.yesOddsAtCreation
//       ELSE 1 - p.yesOddsAtCreation
//     END AS entryPrice,
//     CASE WHEN p.direction > 0 THEN p.delta24h ELSE -p.delta24h END AS d24,
//     CASE WHEN p.direction > 0 THEN p.delta48h ELSE -p.delta48h END AS d48,
//     CASE WHEN p.resolution IS NOT NULL
//       THEN CASE
//         WHEN p.direction > 0 AND p.resolution = 'yes' THEN (1 - p.yesOddsAtCreation)
//         WHEN p.direction > 0 AND p.resolution = 'no' THEN -p.yesOddsAtCreation
//         WHEN p.direction < 0 AND p.resolution = 'no' THEN p.yesOddsAtCreation
//         WHEN p.direction < 0 AND p.resolution = 'yes' THEN -(1 - p.yesOddsAtCreation)
//         ELSE 0
//       END
//       ELSE NULL
//     END AS resolutionPnl
//   WITH windowDays, p, entryPrice, d24, d48, resolutionPnl,
//     CASE
//       WHEN d24 IS NOT NULL AND (d24 / entryPrice) <= -0.20 THEN -0.20 * entryPrice
//       WHEN resolutionPnl IS NOT NULL THEN resolutionPnl
//       WHEN d24 IS NOT NULL THEN d24
//       ELSE NULL
//     END AS stratPnl24,
//     CASE
//       WHEN d48 IS NOT NULL AND (d48 / entryPrice) <= -0.20 THEN -0.20 * entryPrice
//       WHEN resolutionPnl IS NOT NULL THEN resolutionPnl
//       WHEN d48 IS NOT NULL THEN d48
//       ELSE NULL
//     END AS stratPnl48
//   WHERE stratPnl24 IS NOT NULL OR stratPnl48 IS NOT NULL
//   RETURN
//     windowDays AS wd,
//     sum(CASE WHEN stratPnl24 IS NOT NULL THEN 1 ELSE 0 END) AS total24,
//     round(avg(CASE WHEN stratPnl24 IS NOT NULL THEN (stratPnl24 / entryPrice) * 100 END), 2) AS avgRoi24,
//     round(toFloat(sum(CASE WHEN stratPnl24 > 0 THEN 1 ELSE 0 END)) /
//       nullIf(sum(CASE WHEN stratPnl24 IS NOT NULL THEN 1 ELSE 0 END), 0), 3) AS winRate24,
//     round(avg(CASE WHEN stratPnl24 > 0 THEN (stratPnl24 / entryPrice) * 100 END), 2) AS avgWin24,
//     round(avg(CASE WHEN stratPnl24 <= 0 THEN (stratPnl24 / entryPrice) * 100 END), 2) AS avgLoss24,
//     sum(CASE WHEN stratPnl48 IS NOT NULL THEN 1 ELSE 0 END) AS total48,
//     round(avg(CASE WHEN stratPnl48 IS NOT NULL THEN (stratPnl48 / entryPrice) * 100 END), 2) AS avgRoi48,
//     round(toFloat(sum(CASE WHEN stratPnl48 > 0 THEN 1 ELSE 0 END)) /
//       nullIf(sum(CASE WHEN stratPnl48 IS NOT NULL THEN 1 ELSE 0 END), 0), 3) AS winRate48,
//     round(avg(CASE WHEN stratPnl48 > 0 THEN (stratPnl48 / entryPrice) * 100 END), 2) AS avgWin48,
//     round(avg(CASE WHEN stratPnl48 <= 0 THEN (stratPnl48 / entryPrice) * 100 END), 2) AS avgLoss48
// }
// RETURN
//   wd + 'd' AS vintage,
//   total24, avgRoi24, winRate24, avgWin24, avgLoss24,
//   total48, avgRoi48, winRate48, avgWin48, avgLoss48
// ORDER BY wd

import { NextResponse } from 'next/server'

export async function GET() {
  // Mock data — will be replaced by Neo4j query in production
  const data = {
    windows: [
      {
        vintage: '9d',
        total24: 12, avgRoi24: 8.4, winRate24: 0.667, avgWin24: 14.2, avgLoss24: -3.8,
        total48: 12, avgRoi48: 6.1, winRate48: 0.583, avgWin48: 12.8, avgLoss48: -4.2,
      },
      {
        vintage: '14d',
        total24: 19, avgRoi24: 7.1, winRate24: 0.632, avgWin24: 13.5, avgLoss24: -4.1,
        total48: 19, avgRoi48: 5.3, winRate48: 0.579, avgWin48: 11.9, avgLoss48: -4.6,
      },
      {
        vintage: '28d',
        total24: 34, avgRoi24: 6.8, winRate24: 0.618, avgWin24: 12.9, avgLoss24: -4.5,
        total48: 34, avgRoi48: 4.9, winRate48: 0.559, avgWin48: 11.2, avgLoss48: -5.1,
      },
    ],
    trades: [
      {
        marketId: 'russia-ukraine-ceasefire',
        question: 'Will the Russia-Ukraine war have a ceasefire agreement by July 2026?',
        direction: 'YES' as const,
        entryPrice: 0.32,
        currentPrice: 0.38,
        roi: 18.8,
        status: 'open' as const,
        calledAt: '2026-03-14T10:00:00Z',
        resolvedAt: null,
      },
      {
        marketId: 'china-tariffs-us',
        question: 'Will China impose new tariffs on US goods before June 2026?',
        direction: 'YES' as const,
        entryPrice: 0.45,
        currentPrice: 0.51,
        roi: 13.3,
        status: 'open' as const,
        calledAt: '2026-03-14T14:00:00Z',
        resolvedAt: null,
      },
      {
        marketId: 'iran-saudi-trade',
        question: 'Will Iran and Saudi Arabia sign a bilateral trade agreement in 2026?',
        direction: 'NO' as const,
        entryPrice: 0.28,
        currentPrice: 0.22,
        roi: 21.4,
        status: 'closed' as const,
        calledAt: '2026-03-10T08:00:00Z',
        resolvedAt: '2026-03-12T08:00:00Z',
      },
      {
        marketId: 'eu-sanctions-new',
        question: 'Will the EU impose sanctions on a new country by May 2026?',
        direction: 'YES' as const,
        entryPrice: 0.55,
        currentPrice: 0.61,
        roi: 10.9,
        status: 'closed' as const,
        calledAt: '2026-03-09T12:00:00Z',
        resolvedAt: '2026-03-11T12:00:00Z',
      },
      {
        marketId: 'nk-nuclear-test',
        question: 'Will North Korea conduct a nuclear test in 2026?',
        direction: 'NO' as const,
        entryPrice: 0.35,
        currentPrice: 0.38,
        roi: -8.6,
        status: 'closed' as const,
        calledAt: '2026-03-08T09:00:00Z',
        resolvedAt: '2026-03-10T09:00:00Z',
      },
      {
        marketId: 'turkey-nato',
        question: 'Will Turkey leave NATO by 2027?',
        direction: 'NO' as const,
        entryPrice: 0.12,
        currentPrice: 0.09,
        roi: 25.0,
        status: 'closed' as const,
        calledAt: '2026-03-07T11:00:00Z',
        resolvedAt: '2026-03-09T11:00:00Z',
      },
      {
        marketId: 'india-pakistan-conflict',
        question: 'Will India and Pakistan engage in military conflict in 2026?',
        direction: 'NO' as const,
        entryPrice: 0.18,
        currentPrice: 0.15,
        roi: 16.7,
        status: 'open' as const,
        calledAt: '2026-03-13T16:00:00Z',
        resolvedAt: null,
      },
      {
        marketId: 'venezuela-elections',
        question: 'Will Venezuela hold free elections in 2026?',
        direction: 'YES' as const,
        entryPrice: 0.22,
        currentPrice: 0.19,
        roi: -13.6,
        status: 'closed' as const,
        calledAt: '2026-03-06T10:00:00Z',
        resolvedAt: '2026-03-08T10:00:00Z',
      },
    ],
  }

  return NextResponse.json(data)
}
