import Nav from '@/components/Nav'
import QNav from '@/components/QNav'
import Footer from '@/components/Footer'
import Link from 'next/link'

/* Mock data — shaped by /api/q/performance queries */
const summary = { trades: 12, avgRoi: 6.1 }

const trades = [
  { question: 'U.S. strike on Somalia by March 21?', direction: 'YES' as const, entryPrice: 0.62, roi: 18.5, calledAt: 'Mar 10' },
  { question: 'Will US or Israel strike Iran by December 31, 2026?', direction: 'YES' as const, entryPrice: 0.75, roi: 6.7, calledAt: 'Mar 9' },
  { question: 'US strikes Iran by December 31, 2026?', direction: 'YES' as const, entryPrice: 0.74, roi: 8.1, calledAt: 'Mar 9' },
  { question: 'US x Iran ceasefire by April 30?', direction: 'NO' as const, entryPrice: 0.59, roi: 4.1, calledAt: 'Mar 8' },
  { question: 'US x Cuba military clash in 2026?', direction: 'NO' as const, entryPrice: 0.54, roi: 14.8, calledAt: 'Mar 6' },
]

export default function QOverviewPage() {
  return (
    <>
      <Nav />
      <QNav />

      {/* Q Header */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 block mb-4">
            PREDICTION AGENT
          </span>

          <div className="flex items-center gap-4 mb-4 max-md:flex-col max-md:items-start">
            <div className="w-12 h-12 bg-brand-black rounded-sm flex items-center justify-center">
              <span className="font-mono text-white text-xl">Q</span>
            </div>
            <div className="flex items-center gap-3 max-md:flex-col max-md:items-start max-md:gap-1">
              <span className="text-[32px] font-headline text-brand-black leading-none">Q</span>
              <span className="text-gray-300 text-[32px] font-light leading-none max-md:hidden">|</span>
              <span className="text-[18px] text-brand-blue">Geopolitical Forecasting Agent</span>
            </div>
          </div>

          <p className="text-[15px] leading-relaxed text-gray-500 max-w-[640px] mb-6">
            Agentic analysis combined with verified human judgment across 600+
            geopolitical prediction markets. Sourced evidence. Auditable reasoning.
            Updated 7&ndash;8 times a day.
          </p>

          <Link
            href="/agents/q/signal"
            className="inline-block bg-brand-red-orange text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get access &rarr;
          </Link>
        </div>
      </section>

      {/* Performance + Recent Forecasts */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <div className="flex items-baseline justify-between mb-8 max-md:flex-col max-md:gap-2">
            <div className="flex items-baseline gap-8">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[28px] leading-none text-brand-black">{summary.avgRoi}%</span>
                <span className="font-mono text-[11px] uppercase text-gray-400">avg roi</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[28px] leading-none text-brand-black">{summary.trades}</span>
                <span className="font-mono text-[11px] uppercase text-gray-400">trades</span>
              </div>
            </div>
            <span className="font-mono text-[11px] text-gray-400">
              9-day lookback · simulated · 20% stop-loss · &gt;$20k vol
            </span>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block border-t border-border-thin">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-border-thin">
                  <th className="text-left font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal py-2.5 pr-4">Market</th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal py-2.5 px-4 w-[80px]">Call</th>
                  <th className="text-right font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal py-2.5 px-4 w-[70px]">Entry</th>
                  <th className="text-right font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal py-2.5 px-4 w-[70px]">ROI</th>
                  <th className="text-right font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal py-2.5 pl-4 w-[70px]">Called</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((t, i) => (
                  <tr key={i} className="border-b border-border-thin">
                    <td className="py-3 pr-4 text-brand-black">{t.question}</td>
                    <td className="py-3 px-4 font-mono text-[12px] text-gray-500">{t.direction}</td>
                    <td className="py-3 px-4 text-right font-mono text-gray-400">{t.entryPrice.toFixed(2)}</td>
                    <td className={`py-3 px-4 text-right font-mono font-semibold ${t.roi >= 0 ? 'text-green-600' : 'text-brand-red-orange'}`}>
                      {t.roi >= 0 ? '+' : ''}{t.roi.toFixed(1)}%
                    </td>
                    <td className="py-3 pl-4 text-right font-mono text-[12px] text-gray-400">{t.calledAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="md:hidden border-t border-border-thin">
            {trades.map((t, i) => (
              <div key={i} className="py-3 border-b border-border-thin">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <span className="text-[13px] text-brand-black leading-snug">{t.question}</span>
                  <span className={`font-mono text-[13px] font-semibold flex-shrink-0 ${t.roi >= 0 ? 'text-green-600' : 'text-brand-red-orange'}`}>
                    {t.roi >= 0 ? '+' : ''}{t.roi.toFixed(1)}%
                  </span>
                </div>
                <span className="font-mono text-[11px] text-gray-400">
                  {t.direction} · {t.entryPrice.toFixed(2)} · {t.calledAt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vault (Coming Soon) */}
      <section className="py-8 px-10 max-md:px-6 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <div className="border border-border-thin rounded-sm p-7">
            <span className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 block mb-3">
              VAULT — COMING SOON
            </span>
            <p className="text-[14px] leading-[1.8] text-gray-500 max-w-[640px] mb-4">
              Invest in Q&apos;s judgment. The vault scales verified forecasting into
              a financial product. Launching Q3 2026.
            </p>
            <Link href="#" className="text-sm text-brand-blue hover:underline">
              Join the waitlist &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
