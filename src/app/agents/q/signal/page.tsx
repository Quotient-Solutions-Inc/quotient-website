import Nav from '@/components/Nav'
import QNav from '@/components/QNav'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

const signals = [
  {
    question: 'Will Russia capture Kostyantynivka by June 30?',
    marketOdds: '72% YES',
    qSays: 'NO · 15%',
    spreadPts: 56,
    spreadLevel: 'hi' as const,
    topSignal: 'Frontline Situation as of March 4, 2026',
  },
  {
    question: 'US x Cuba military clash in 2026?',
    marketOdds: '46% YES',
    qSays: 'NO · 4%',
    spreadPts: 50,
    spreadLevel: 'hi' as const,
    topSignal: 'The Coming Showdown Over Cuba · Foreign Affairs',
  },
  {
    question: 'US x Iran ceasefire by April 30?',
    marketOdds: '41% YES',
    qSays: 'NO · 20%',
    spreadPts: 38,
    spreadLevel: 'med' as const,
    topSignal: 'Trump demands immediate pardon for Netanyahu',
  },
  {
    question: 'Will US or Israel strike Iran by December 31, 2026?',
    marketOdds: '75% YES',
    qSays: 'YES · 91%',
    spreadPts: 16,
    spreadLevel: 'med' as const,
    topSignal: 'IRGC naval activity in Strait of Hormuz · Reuters',
  },
  {
    question: 'US strikes Iran by December 31, 2026?',
    marketOdds: '74% YES',
    qSays: 'YES · 88%',
    spreadPts: 14,
    spreadLevel: 'lo' as const,
    topSignal: 'Pentagon briefing on CENTCOM posture · DoD',
    blurred: true,
  },
]

function spreadColor(level: 'hi' | 'med' | 'lo') {
  if (level === 'hi') return 'bg-orange-100 text-brand-red-orange'
  if (level === 'med') return 'bg-blue-50 text-brand-blue'
  return 'bg-gray-100 text-gray-500'
}

export default function SignalPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <QNav />

      {/* Hero */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <span className="block font-mono text-[11px] uppercase tracking-eyebrow text-gray-400 mb-4">
            FOR INDIVIDUAL TRADERS &amp; ANALYSTS
          </span>
          <h1 className="font-headline text-[36px] max-md:text-[28px] font-normal leading-[1.15] tracking-[-0.02em] text-brand-black mb-4">
            The full picture on every market.
          </h1>
          <p className="text-[15px] leading-relaxed text-gray-500 max-w-[560px]">
            Q&apos;s forecast, the spread against market odds, the key factors driving the call, and the sourced evidence behind it.
          </p>
        </div>
      </section>

      {/* Signal Preview */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <span className="block font-mono text-[11px] uppercase tracking-eyebrow text-gray-400 mb-6">
            SIGNAL PREVIEW
          </span>

          {/* Desktop table */}
          <div className="hidden md:block border border-border-thin rounded-sm overflow-hidden">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-border-heavy bg-surface-off">
                  <th className="text-left font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-2.5">Market</th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-2.5 w-[100px]">Market odds</th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-2.5 w-[100px]">Q says</th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-2.5 w-[90px]">Spread</th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-2.5">Top signal</th>
                </tr>
              </thead>
              <tbody>
                {signals.map((s, i) => (
                  <tr key={i} className={`border-b border-border-thin ${s.blurred ? 'relative' : 'hover:bg-surface-off transition-colors'}`}>
                    <td className="px-5 py-4 text-[13px] font-medium text-brand-black leading-snug">{s.question}</td>
                    <td className="px-5 py-4 font-mono text-[13px] text-gray-500">{s.marketOdds}</td>
                    <td className="px-5 py-4 font-mono text-[13px] text-gray-600 font-semibold">{s.qSays}</td>
                    <td className="px-5 py-4">
                      <span className={`font-mono text-[11px] font-semibold px-2 py-0.5 rounded-sm ${spreadColor(s.spreadLevel)}`}>
                        {s.spreadPts} pts
                      </span>
                    </td>
                    <td className="px-5 py-4 text-[13px] text-gray-500 leading-snug">{s.topSignal}</td>
                    {s.blurred && <td className="absolute inset-0 z-10 backdrop-blur-sm bg-white/60" />}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden flex flex-col gap-3">
            {signals.map((s, i) => (
              <div key={i} className={`border border-border-thin rounded-sm p-4 ${s.blurred ? 'relative' : ''}`}>
                <div className={`text-[13px] font-medium mb-2 ${s.blurred ? 'text-gray-400' : 'text-brand-black'}`}>{s.question}</div>
                <div className="flex gap-4 mb-2">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-gray-400 block">Market odds</span>
                    <span className={`font-mono text-[13px] ${s.blurred ? 'text-gray-400' : 'text-gray-500'}`}>{s.marketOdds}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-gray-400 block">Q says</span>
                    <span className={`font-mono text-[13px] ${s.blurred ? 'text-gray-400' : 'text-gray-600 font-semibold'}`}>{s.qSays}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-gray-400 block">Spread</span>
                    <span className={`font-mono text-[11px] font-semibold px-2 py-0.5 rounded-sm ${s.blurred ? 'bg-gray-100 text-gray-400' : spreadColor(s.spreadLevel)}`}>
                      {s.spreadPts} pts
                    </span>
                  </div>
                </div>
                <div className={`text-[13px] leading-snug ${s.blurred ? 'text-gray-400' : 'text-gray-500'}`}>{s.topSignal}</div>
                {s.blurred && <div className="absolute inset-0 z-10 backdrop-blur-sm bg-white/60 rounded-sm" />}
              </div>
            ))}
          </div>

          {/* Below table */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-[13px] text-gray-400">597 more markets available</span>
            <Link href="#" className="text-sm text-brand-blue hover:underline">
              Subscribe to unlock &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* What Signal Includes */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <span className="block font-mono text-[11px] uppercase tracking-eyebrow text-gray-400 mb-6">
            WHAT&apos;S INCLUDED
          </span>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-px bg-border-thin border border-border-thin rounded-sm overflow-hidden">
            <div className="bg-white p-6">
              <div className="text-[15px] font-semibold text-brand-black mb-2">Q&apos;s forecast</div>
              <div className="text-[13px] leading-relaxed text-gray-500">
                A calibrated probability on every market, updated daily. Built from structured decomposition and 1,600+ ranked sources.
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[15px] font-semibold text-brand-black mb-2">Spread vs. market</div>
              <div className="text-[13px] leading-relaxed text-gray-500">
                The gap between Q&apos;s call and current market odds. This is where the actionable intelligence lives.
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[15px] font-semibold text-brand-black mb-2">Key factors + sourced signals</div>
              <div className="text-[13px] leading-relaxed text-gray-500">
                The evidence chain behind every forecast. Named sources, weighted factors, and auditable reasoning.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="Frequently asked questions"
        items={[
          { q: 'What markets does Q cover?', a: 'Q covers 600+ geopolitical prediction markets across platforms including Polymarket, Kalshi, and Metaculus. Coverage includes armed conflicts, trade policy, elections, diplomatic agreements, and sanctions.' },
          { q: "How does Q's forecast differ from market odds?", a: "Market odds reflect trading activity, which can be thin, manipulated, or driven by sentiment. Q's forecast is built from structured decomposition, calibrated probabilities, and 1,600+ ranked sources — producing an independent analytical signal." },
          { q: 'How often is the signal updated?', a: "Q updates its forecasts daily. Major geopolitical events may trigger intra-day updates." },
          { q: 'Is there a free tier?', a: "The signal preview shows a sample of Q's output. Full access to all 600+ markets, historical track records, and sourced reasoning requires a subscription." },
          { q: 'Is this financial advice?', a: 'No. Quotient provides analytical signal for informational purposes. It is not financial advice, and should not be treated as such. Always do your own research before making trading decisions.' },
        ]}
      />

      <Footer />
    </div>
  )
}
