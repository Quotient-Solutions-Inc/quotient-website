import Nav from '@/components/Nav'
import QNav from '@/components/QNav'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

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
                <tr className="border-b border-border-thin bg-surface-off">
                  <th className="text-left font-mono text-[10px] uppercase tracking-wide text-gray-400 px-5 py-3">Market</th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-wide text-gray-400 px-5 py-3">Market odds</th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-wide text-gray-400 px-5 py-3">Q says</th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-wide text-gray-400 px-5 py-3">Spread</th>
                  <th className="text-left font-mono text-[10px] uppercase tracking-wide text-gray-400 px-5 py-3">Top signal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-thin">
                  <td className="px-5 py-4 text-[13px] font-medium text-brand-black leading-snug">Will Russia-Ukraine ceasefire happen by July 2026?</td>
                  <td className="px-5 py-4 font-mono text-[13px] text-gray-500">32%</td>
                  <td className="px-5 py-4 font-mono text-[13px] text-gray-500">48%</td>
                  <td className="px-5 py-4 font-mono text-[13px] text-brand-blue font-semibold">+16 pts</td>
                  <td className="px-5 py-4 text-[13px] text-gray-500 leading-snug">Multiple diplomatic back-channels active per Reuters, FT sources</td>
                </tr>
                <tr className="border-b border-border-thin">
                  <td className="px-5 py-4 text-[13px] font-medium text-brand-black leading-snug">Will China impose new tariffs on US goods before June 2026?</td>
                  <td className="px-5 py-4 font-mono text-[13px] text-gray-500">45%</td>
                  <td className="px-5 py-4 font-mono text-[13px] text-gray-500">62%</td>
                  <td className="px-5 py-4 font-mono text-[13px] text-brand-blue font-semibold">+17 pts</td>
                  <td className="px-5 py-4 text-[13px] text-gray-500 leading-snug">Trade rhetoric escalating; USTR briefing signals retaliation</td>
                </tr>
                {/* Blurred row */}
                <tr className="relative">
                  <td className="px-5 py-4 text-[13px] text-gray-400">Will the ECB cut rates before September 2026?</td>
                  <td className="px-5 py-4 font-mono text-[13px] text-gray-400">58%</td>
                  <td className="px-5 py-4 font-mono text-[13px] text-gray-400">41%</td>
                  <td className="px-5 py-4 font-mono text-[13px] text-gray-400">-17 pts</td>
                  <td className="px-5 py-4 text-[13px] text-gray-400">Hawkish ECB minutes; inflation sticky above target</td>
                  <td className="absolute inset-0 z-10 backdrop-blur-sm bg-white/60" />
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden flex flex-col gap-3">
            {/* Card 1 */}
            <div className="border border-border-thin rounded-sm p-4">
              <div className="text-[13px] font-medium text-brand-black mb-2">Will Russia-Ukraine ceasefire happen by July 2026?</div>
              <div className="flex gap-4 mb-2">
                <div><span className="font-mono text-[10px] uppercase text-gray-400 block">Market odds</span><span className="font-mono text-[13px] text-gray-500">32%</span></div>
                <div><span className="font-mono text-[10px] uppercase text-gray-400 block">Q says</span><span className="font-mono text-[13px] text-gray-500">48%</span></div>
                <div><span className="font-mono text-[10px] uppercase text-gray-400 block">Spread</span><span className="font-mono text-[13px] text-brand-blue font-semibold">+16 pts</span></div>
              </div>
              <div className="text-[13px] text-gray-500 leading-snug">Multiple diplomatic back-channels active per Reuters, FT sources</div>
            </div>
            {/* Card 2 */}
            <div className="border border-border-thin rounded-sm p-4">
              <div className="text-[13px] font-medium text-brand-black mb-2">Will China impose new tariffs on US goods before June 2026?</div>
              <div className="flex gap-4 mb-2">
                <div><span className="font-mono text-[10px] uppercase text-gray-400 block">Market odds</span><span className="font-mono text-[13px] text-gray-500">45%</span></div>
                <div><span className="font-mono text-[10px] uppercase text-gray-400 block">Q says</span><span className="font-mono text-[13px] text-gray-500">62%</span></div>
                <div><span className="font-mono text-[10px] uppercase text-gray-400 block">Spread</span><span className="font-mono text-[13px] text-brand-blue font-semibold">+17 pts</span></div>
              </div>
              <div className="text-[13px] text-gray-500 leading-snug">Trade rhetoric escalating; USTR briefing signals retaliation</div>
            </div>
            {/* Card 3 - blurred */}
            <div className="border border-border-thin rounded-sm p-4 relative">
              <div className="text-[13px] font-medium text-gray-400 mb-2">Will the ECB cut rates before September 2026?</div>
              <div className="flex gap-4 mb-2">
                <div><span className="font-mono text-[10px] uppercase text-gray-400 block">Market odds</span><span className="font-mono text-[13px] text-gray-400">58%</span></div>
                <div><span className="font-mono text-[10px] uppercase text-gray-400 block">Q says</span><span className="font-mono text-[13px] text-gray-400">41%</span></div>
                <div><span className="font-mono text-[10px] uppercase text-gray-400 block">Spread</span><span className="font-mono text-[13px] text-gray-400">-17 pts</span></div>
              </div>
              <div className="text-[13px] text-gray-400">Hawkish ECB minutes; inflation sticky above target</div>
              <div className="absolute inset-0 z-10 backdrop-blur-sm bg-white/60" />
            </div>
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
