import Nav from '@/components/Nav'
import QNav from '@/components/QNav'
import Footer from '@/components/Footer'
import Link from 'next/link'

/* Mock data — will be replaced by /api/q/performance */
const summary = { trades: 12, avgRoi: 8.4 }

const forecasts = [
  { market: 'Will Russia capture Kostyantynivka by June 30?', direction: 'NO' as const, entry: 0.28, roi24: 5.6, calledAt: 'Mar 4', status: 'Open' as const },
  { market: 'US x Cuba military clash in 2026?', direction: 'NO' as const, entry: 0.54, roi24: 11.1, calledAt: 'Mar 6', status: 'Open' as const },
  { market: 'US x Iran ceasefire by April 30?', direction: 'NO' as const, entry: 0.59, roi24: 7.3, calledAt: 'Mar 8', status: 'Open' as const },
  { market: 'Will US or Israel strike Iran by December 31, 2026?', direction: 'YES' as const, entry: 0.75, roi24: 4.0, calledAt: 'Mar 9', status: 'Open' as const },
  { market: 'US strikes Iran by December 31, 2026?', direction: 'YES' as const, entry: 0.74, roi24: 5.4, calledAt: 'Mar 9', status: 'Open' as const },
  { market: 'U.S. strike on Somalia by March 21?', direction: 'YES' as const, entry: 0.62, roi24: 12.9, calledAt: 'Mar 10', status: 'Open' as const },
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

      {/* Performance — 9-day lookback */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 block mb-6">
            SIMULATED PERFORMANCE · 9-DAY LOOKBACK
          </span>

          <div className="flex items-baseline gap-6 mb-2">
            <div>
              <span className="font-headline text-[40px] leading-none text-brand-blue">{summary.avgRoi}%</span>
              <span className="font-mono text-[11px] uppercase text-gray-400 ml-2">avg ROI</span>
            </div>
            <div>
              <span className="font-mono text-[24px] leading-none text-brand-black">{summary.trades}</span>
              <span className="font-mono text-[11px] uppercase text-gray-400 ml-2">trades</span>
            </div>
          </div>

          <p className="font-mono text-[11px] text-gray-400">
            Simulated P&amp;L. Entry at Q&apos;s call time. 20% stop-loss. Markets &gt;$20k volume only.
          </p>
        </div>
      </section>

      {/* Recent Forecasts */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 block mb-6">
            RECENT FORECASTS
          </span>

          {/* Desktop table */}
          <div className="hidden md:block border border-border-thin rounded-sm overflow-hidden">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-surface-off border-b border-border-heavy">
                  <th className="text-left font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-2.5">Market</th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-2.5 w-[80px]">Direction</th>
                  <th className="text-right font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-2.5 w-[70px]">Entry</th>
                  <th className="text-right font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-2.5 w-[80px]">24h ROI</th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-2.5 w-[70px]">Called</th>
                  <th className="text-right font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-2.5 w-[70px]">Status</th>
                </tr>
              </thead>
              <tbody>
                {forecasts.map((f, i) => (
                  <tr key={i} className="border-b border-border-thin hover:bg-surface-off transition-colors">
                    <td className="px-5 py-3 text-[13px] text-brand-black">{f.market}</td>
                    <td className="px-5 py-3">
                      <span className={`font-mono text-[11px] uppercase font-semibold px-2 py-0.5 border rounded-sm ${
                        f.direction === 'YES'
                          ? 'text-green-700 border-green-300 bg-green-50'
                          : 'text-brand-red-orange border-orange-200 bg-orange-50'
                      }`}>
                        {f.direction}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-right font-mono text-gray-500">{f.entry.toFixed(2)}</td>
                    <td className={`px-5 py-3 text-right font-mono font-semibold ${f.roi24 >= 0 ? 'text-green-600' : 'text-brand-red-orange'}`}>
                      {f.roi24 >= 0 ? '+' : ''}{f.roi24.toFixed(1)}%
                    </td>
                    <td className="px-5 py-3 font-mono text-[12px] text-gray-400">{f.calledAt}</td>
                    <td className="px-5 py-3 text-right">
                      <span className="inline-flex items-center gap-1.5">
                        <span className={`w-[6px] h-[6px] rounded-full ${f.status === 'Open' ? 'bg-green-500' : 'bg-gray-300'}`} />
                        <span className={`font-mono text-[11px] ${f.status === 'Open' ? 'text-green-600' : 'text-gray-400'}`}>
                          {f.status}
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden flex flex-col gap-px bg-border-thin border border-border-thin rounded-sm overflow-hidden">
            {forecasts.map((f, i) => (
              <div key={i} className="bg-white p-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <p className="text-[13px] text-brand-black leading-snug">{f.market}</p>
                  <span className={`flex-shrink-0 font-mono text-[11px] uppercase font-semibold px-2 py-0.5 border rounded-sm ${
                    f.direction === 'YES'
                      ? 'text-green-700 border-green-300 bg-green-50'
                      : 'text-brand-red-orange border-orange-200 bg-orange-50'
                  }`}>
                    {f.direction}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase text-gray-400 block">Entry</span>
                      <span className="font-mono text-[13px] text-gray-500">{f.entry.toFixed(2)}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase text-gray-400 block">Called</span>
                      <span className="font-mono text-[12px] text-gray-400">{f.calledAt}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`font-mono text-[15px] font-semibold block ${f.roi24 >= 0 ? 'text-green-600' : 'text-brand-red-orange'}`}>
                      {f.roi24 >= 0 ? '+' : ''}{f.roi24.toFixed(1)}%
                    </span>
                    <span className="inline-flex items-center gap-1 mt-0.5">
                      <span className={`w-[5px] h-[5px] rounded-full ${f.status === 'Open' ? 'bg-green-500' : 'bg-gray-300'}`} />
                      <span className={`font-mono text-[10px] ${f.status === 'Open' ? 'text-green-600' : 'text-gray-400'}`}>
                        {f.status}
                      </span>
                    </span>
                  </div>
                </div>
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
