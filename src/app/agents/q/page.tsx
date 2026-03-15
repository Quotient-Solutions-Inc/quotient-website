import Nav from '@/components/Nav'
import QNav from '@/components/QNav'
import Footer from '@/components/Footer'
import Link from 'next/link'

/* Mock data — will be replaced by /api/q/performance */
const trades = [
  { market: 'Will the Russia-Ukraine war have a ceasefire agreement by July 2026?', call: 'YES' as const, entry: 0.32, current: 0.38, roi: 18.8, status: 'Open' as const },
  { market: 'Will China impose new tariffs on US goods before June 2026?', call: 'YES' as const, entry: 0.45, current: 0.51, roi: 13.3, status: 'Open' as const },
  { market: 'Will Iran and Saudi Arabia sign a bilateral trade agreement in 2026?', call: 'NO' as const, entry: 0.28, current: 0.22, roi: 21.4, status: 'Closed' as const },
  { market: 'Will the EU impose sanctions on a new country by May 2026?', call: 'YES' as const, entry: 0.55, current: 0.61, roi: 10.9, status: 'Closed' as const },
  { market: 'Will North Korea conduct a nuclear test in 2026?', call: 'NO' as const, entry: 0.35, current: 0.38, roi: -8.6, status: 'Closed' as const },
  { market: 'Will Turkey leave NATO by 2027?', call: 'NO' as const, entry: 0.12, current: 0.09, roi: 25.0, status: 'Closed' as const },
  { market: 'Will India and Pakistan engage in military conflict in 2026?', call: 'NO' as const, entry: 0.18, current: 0.15, roi: 16.7, status: 'Open' as const },
  { market: 'Will Venezuela hold free elections in 2026?', call: 'YES' as const, entry: 0.22, current: 0.19, roi: -13.6, status: 'Closed' as const },
]

export default function QOverviewPage() {
  return (
    <>
      <Nav />
      <QNav />

      {/* Section 1: Q Header */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 mb-4">
            PREDICTION AGENT
          </p>

          <div className="flex items-center gap-4 mb-4 max-md:flex-col max-md:items-start">
            <div className="w-12 h-12 bg-brand-black rounded-sm flex items-center justify-center">
              <span className="font-mono text-white text-xl">Q</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[32px] font-headline text-brand-black">Q</span>
              <span className="text-gray-300 text-[32px] font-light">|</span>
              <span className="text-[18px] text-brand-blue">Geopolitical Forecasting Agent</span>
            </div>
          </div>

          <p className="text-[15px] leading-relaxed text-gray-500 max-w-[640px] mb-6">
            Agentic analysis combined with verified human judgment across 600+ geopolitical prediction markets. Sourced evidence. Auditable reasoning. Updated daily.
          </p>

          <Link
            href="/agents/q/signal"
            className="inline-block bg-brand-red-orange text-white px-5 py-2.5 text-sm font-medium hover:opacity-90"
          >
            Get access &rarr;
          </Link>
        </div>
      </section>

      {/* Section 2: Simulated Performance */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 mb-4">
            SIMULATED PERFORMANCE
          </p>

          <h2 className="font-headline text-[28px] tracking-[-0.02em] text-brand-black mb-3">
            9-day lookback.
          </h2>

          <p className="text-[13px] text-gray-500 mb-8">
            Simulated P&L. Entry at Q&apos;s call time. 20% stop-loss. 48-hour holding period. Markets &gt;$20k volume only.
          </p>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-px bg-border-thin border border-border-thin rounded-sm overflow-hidden mb-6">
            {/* 24h Column */}
            <div className="flex flex-col gap-px bg-border-thin">
              <div className="bg-surface-off p-5">
                <span className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-500">24h horizon</span>
              </div>
              <div className="bg-white p-5">
                <p className="text-[13px] text-gray-500">Total trades</p>
                <p className="font-mono text-[18px] text-brand-black">12</p>
              </div>
              <div className="bg-white p-5">
                <p className="text-[13px] text-gray-500">Avg ROI</p>
                <p className="font-mono text-[18px] text-brand-black">8.4%</p>
              </div>
              <div className="bg-white p-5">
                <p className="text-[13px] text-gray-500">Win rate</p>
                <p className="font-mono text-[18px] text-brand-black">67%</p>
              </div>
              <div className="bg-white p-5">
                <p className="text-[13px] text-gray-500">Avg win</p>
                <p className="font-mono text-[18px] text-brand-black">+14.2%</p>
              </div>
              <div className="bg-white p-5">
                <p className="text-[13px] text-gray-500">Avg loss</p>
                <p className="font-mono text-[18px] text-brand-black">&minus;3.8%</p>
              </div>
            </div>

            {/* 48h Column */}
            <div className="flex flex-col gap-px bg-border-thin">
              <div className="bg-surface-off p-5">
                <span className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-500">48h horizon</span>
              </div>
              <div className="bg-white p-5">
                <p className="text-[13px] text-gray-500">Total trades</p>
                <p className="font-mono text-[18px] text-brand-black">12</p>
              </div>
              <div className="bg-white p-5">
                <p className="text-[13px] text-gray-500">Avg ROI</p>
                <p className="font-mono text-[18px] text-brand-black">6.1%</p>
              </div>
              <div className="bg-white p-5">
                <p className="text-[13px] text-gray-500">Win rate</p>
                <p className="font-mono text-[18px] text-brand-black">58%</p>
              </div>
              <div className="bg-white p-5">
                <p className="text-[13px] text-gray-500">Avg win</p>
                <p className="font-mono text-[18px] text-brand-black">+12.8%</p>
              </div>
              <div className="bg-white p-5">
                <p className="text-[13px] text-gray-500">Avg loss</p>
                <p className="font-mono text-[18px] text-brand-black">&minus;4.2%</p>
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

      {/* Section 3: Recent Trades */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 mb-4">
            RECENT TRADES
          </p>

          {/* Desktop Table */}
          <div className="hidden md:block border border-border-thin rounded-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-surface-off">
                <tr>
                  <th className="text-left font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 px-4 py-3 font-normal">Market</th>
                  <th className="text-left font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 px-4 py-3 font-normal">Q&apos;s Call</th>
                  <th className="text-left font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 px-4 py-3 font-normal">Entry</th>
                  <th className="text-left font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 px-4 py-3 font-normal">Current/Exit</th>
                  <th className="text-left font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 px-4 py-3 font-normal">ROI</th>
                  <th className="text-left font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 px-4 py-3 font-normal">Status</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((trade, i) => (
                  <tr key={i} className="border-t border-border-thin">
                    <td className="text-[13px] text-brand-black max-w-[280px] px-4 py-3">{trade.market}</td>
                    <td className={`font-mono text-[13px] px-4 py-3 ${trade.call === 'YES' ? 'text-green-600' : 'text-brand-red-orange'}`}>
                      {trade.call}
                    </td>
                    <td className="font-mono text-[13px] px-4 py-3">{trade.entry.toFixed(2)}</td>
                    <td className="font-mono text-[13px] px-4 py-3">{trade.current.toFixed(2)}</td>
                    <td className={`font-mono text-[13px] px-4 py-3 ${trade.roi >= 0 ? 'text-green-600' : 'text-brand-red-orange'}`}>
                      {trade.roi >= 0 ? '+' : ''}{trade.roi.toFixed(1)}%
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${trade.status === 'Open' ? 'bg-green-500' : 'bg-gray-300'}`} />
                        <span className={`font-mono text-[11px] ${trade.status === 'Open' ? 'text-green-600' : 'text-gray-400'}`}>
                          {trade.status}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden">
            {trades.map((trade, i) => (
              <div key={i} className="border border-border-thin rounded-sm p-4 mb-3">
                <p className="text-[13px] text-brand-black mb-3">{trade.market}</p>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase text-gray-400 mb-0.5">Call</p>
                    <p className={`font-mono text-[13px] ${trade.call === 'YES' ? 'text-green-600' : 'text-brand-red-orange'}`}>
                      {trade.call}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase text-gray-400 mb-0.5">Entry</p>
                    <p className="font-mono text-[13px]">{trade.entry.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase text-gray-400 mb-0.5">Current</p>
                    <p className="font-mono text-[13px]">{trade.current.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[13px] ${trade.roi >= 0 ? 'text-green-600' : 'text-brand-red-orange'}`}>
                    {trade.roi >= 0 ? '+' : ''}{trade.roi.toFixed(1)}%
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${trade.status === 'Open' ? 'bg-green-500' : 'bg-gray-300'}`} />
                    <span className={`font-mono text-[11px] ${trade.status === 'Open' ? 'text-green-600' : 'text-gray-400'}`}>
                      {trade.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Vault (Coming Soon) */}
      <section className="py-8 px-10 max-md:px-6 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <div className="border border-border-thin rounded-sm p-7">
            <p className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 mb-3">
              VAULT — COMING SOON
            </p>
            <p className="text-[14px] leading-[1.8] text-gray-500 max-w-[640px] mb-4">
              Invest in Q&apos;s judgment. The vault scales verified forecasting into a financial product. Launching Q3 2026.
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
