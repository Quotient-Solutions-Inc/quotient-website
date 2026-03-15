import Nav from '@/components/Nav'
import QNav from '@/components/QNav'
import Footer from '@/components/Footer'
import Link from 'next/link'

/* Mock data — will be replaced by /api/q/performance */
const trades = [
  { market: 'Will US or Israel strike Iran by December 31, 2026?', call: 'YES' as const, entry: 0.75, current: 1.00, roi: 34.2, status: 'Closed' as const, calledAt: 'Feb 18' },
  { market: 'US strikes Iran by December 31, 2026?', call: 'YES' as const, entry: 0.74, current: 1.00, roi: 36.1, status: 'Closed' as const, calledAt: 'Feb 18' },
  { market: 'U.S. strike on Somalia by February 21?', call: 'YES' as const, entry: 0.74, current: 1.00, roi: 35.1, status: 'Closed' as const, calledAt: 'Feb 18' },
  { market: 'Will Russia capture Kostyantynivka by June 30?', call: 'NO' as const, entry: 0.72, current: 0.68, roi: 5.6, status: 'Open' as const, calledAt: 'Mar 4' },
  { market: 'US x Cuba military clash in 2026?', call: 'NO' as const, entry: 0.54, current: 0.48, roi: 11.1, status: 'Open' as const, calledAt: 'Mar 6' },
  { market: 'US x Iran ceasefire by April 30?', call: 'NO' as const, entry: 0.41, current: 0.38, roi: 7.3, status: 'Open' as const, calledAt: 'Mar 8' },
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

      {/* Simulated Performance */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 block mb-4">
            SIMULATED PERFORMANCE
          </span>

          <h2 className="font-headline text-[28px] tracking-[-0.02em] text-brand-black mb-3">
            9-day lookback.
          </h2>

          <p className="font-mono text-[11px] text-gray-400 mb-8">
            Simulated P&amp;L. Entry at Q&apos;s call time. 20% stop-loss. 48-hour holding period. Markets &gt;$20k volume only.
          </p>

          {/* Data cells — adapted from ref-macro-dashboard.html .data-table-container pattern */}
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-px bg-border-thin border border-border-thin rounded-sm overflow-hidden">
            {/* 24h column */}
            <div className="flex flex-col gap-px bg-border-thin">
              <div className="bg-surface-off px-5 py-3">
                <span className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400">24h horizon</span>
              </div>
              <div className="bg-white px-5 py-4 flex flex-col justify-between min-h-[100px]">
                <span className="font-mono text-[10px] uppercase text-gray-400">Avg ROI</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-headline text-[40px] leading-none text-brand-blue">8.4%</span>
                </div>
                <span className="font-mono text-[10px] text-gray-400 border-t border-surface-light pt-2 mt-3">12 TRADES</span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-border-thin">
                <div className="bg-white px-5 py-4">
                  <span className="font-mono text-[10px] uppercase text-gray-400 block mb-1">Win rate</span>
                  <span className="font-mono text-[20px] text-brand-black">67%</span>
                </div>
                <div className="bg-white px-5 py-4">
                  <span className="font-mono text-[10px] uppercase text-gray-400 block mb-1">Avg win</span>
                  <span className="font-mono text-[20px] text-green-600">+14.2%</span>
                </div>
              </div>
              <div className="bg-white px-5 py-4">
                <span className="font-mono text-[10px] uppercase text-gray-400 block mb-1">Avg loss</span>
                <span className="font-mono text-[20px] text-brand-red-orange">&minus;3.8%</span>
              </div>
            </div>

            {/* 48h column */}
            <div className="flex flex-col gap-px bg-border-thin">
              <div className="bg-surface-off px-5 py-3">
                <span className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400">48h horizon</span>
              </div>
              <div className="bg-white px-5 py-4 flex flex-col justify-between min-h-[100px]">
                <span className="font-mono text-[10px] uppercase text-gray-400">Avg ROI</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-headline text-[40px] leading-none text-brand-blue">6.1%</span>
                </div>
                <span className="font-mono text-[10px] text-gray-400 border-t border-surface-light pt-2 mt-3">12 TRADES</span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-border-thin">
                <div className="bg-white px-5 py-4">
                  <span className="font-mono text-[10px] uppercase text-gray-400 block mb-1">Win rate</span>
                  <span className="font-mono text-[20px] text-brand-black">58%</span>
                </div>
                <div className="bg-white px-5 py-4">
                  <span className="font-mono text-[10px] uppercase text-gray-400 block mb-1">Avg win</span>
                  <span className="font-mono text-[20px] text-green-600">+12.8%</span>
                </div>
              </div>
              <div className="bg-white px-5 py-4">
                <span className="font-mono text-[10px] uppercase text-gray-400 block mb-1">Avg loss</span>
                <span className="font-mono text-[20px] text-brand-red-orange">&minus;4.2%</span>
              </div>
            </div>
          </div>

          {/* TODO: Wire up window toggle when API is ready */}
          <div className="flex gap-2 mt-4">
            <span className="font-mono text-[11px] px-3 py-1 bg-brand-black text-white rounded-sm">9d</span>
            <span className="font-mono text-[11px] px-3 py-1 border border-border-thin text-gray-400 rounded-sm">14d</span>
            <span className="font-mono text-[11px] px-3 py-1 border border-border-thin text-gray-400 rounded-sm">28d</span>
          </div>
        </div>
      </section>

      {/* Recent Trades */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-500">
              RECENT TRADES
            </span>
            <span className="font-mono text-[10px] text-gray-400">
              ROI reflects simulated return at market odds from Q&apos;s call time.
            </span>
          </div>

          {/* Desktop table — adapted from ref-equities-table.html table pattern */}
          <div className="hidden md:block border border-border-thin rounded-sm overflow-hidden">
            <table className="w-full border-collapse font-mono text-[13px]">
              <thead>
                <tr className="bg-surface-off border-b border-border-heavy">
                  <th className="text-left text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-2.5">Market</th>
                  <th className="text-left text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-2.5 w-[80px]">Q&apos;s call</th>
                  <th className="text-right text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-2.5 w-[70px]">Entry</th>
                  <th className="text-right text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-2.5 w-[70px]">Current</th>
                  <th className="text-right text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-2.5 w-[80px]">ROI</th>
                  <th className="text-right text-[10px] uppercase tracking-eyebrow text-gray-400 font-normal px-5 py-2.5 w-[80px]">Status</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((trade, i) => (
                  <tr key={i} className="border-b border-border-thin hover:bg-surface-off transition-colors">
                    <td className="px-5 py-3 text-[13px] text-brand-black font-body">{trade.market}</td>
                    <td className="px-5 py-3">
                      <span className={`text-[11px] uppercase font-semibold px-2 py-0.5 border rounded-sm ${
                        trade.call === 'YES'
                          ? 'text-green-700 border-green-300 bg-green-50'
                          : 'text-brand-red-orange border-orange-200 bg-orange-50'
                      }`}>
                        {trade.call}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-right text-gray-500">{trade.entry.toFixed(2)}</td>
                    <td className="px-5 py-3 text-right text-gray-500">{trade.current.toFixed(2)}</td>
                    <td className={`px-5 py-3 text-right font-semibold ${trade.roi >= 0 ? 'text-green-600' : 'text-brand-red-orange'}`}>
                      {trade.roi >= 0 ? '+' : ''}{trade.roi.toFixed(1)}%
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className="inline-flex items-center gap-1.5">
                        <span className={`w-[6px] h-[6px] rounded-full ${trade.status === 'Open' ? 'bg-green-500' : 'bg-gray-300'}`} />
                        <span className={`text-[11px] ${trade.status === 'Open' ? 'text-green-600' : 'text-gray-400'}`}>
                          {trade.status}
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
            {trades.map((trade, i) => (
              <div key={i} className="bg-white p-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <p className="text-[13px] text-brand-black leading-snug">{trade.market}</p>
                  <span className={`flex-shrink-0 text-[11px] uppercase font-mono font-semibold px-2 py-0.5 border rounded-sm ${
                    trade.call === 'YES'
                      ? 'text-green-700 border-green-300 bg-green-50'
                      : 'text-brand-red-orange border-orange-200 bg-orange-50'
                  }`}>
                    {trade.call}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase text-gray-400 block">Entry</span>
                      <span className="font-mono text-[13px] text-gray-500">{trade.entry.toFixed(2)}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase text-gray-400 block">Current</span>
                      <span className="font-mono text-[13px] text-gray-500">{trade.current.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`font-mono text-[15px] font-semibold block ${trade.roi >= 0 ? 'text-green-600' : 'text-brand-red-orange'}`}>
                      {trade.roi >= 0 ? '+' : ''}{trade.roi.toFixed(1)}%
                    </span>
                    <span className="inline-flex items-center gap-1 mt-0.5">
                      <span className={`w-[5px] h-[5px] rounded-full ${trade.status === 'Open' ? 'bg-green-500' : 'bg-gray-300'}`} />
                      <span className={`font-mono text-[10px] ${trade.status === 'Open' ? 'text-green-600' : 'text-gray-400'}`}>
                        {trade.status}
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
