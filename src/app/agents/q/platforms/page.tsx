import Nav from '@/components/Nav'
import QNav from '@/components/QNav'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export default function PlatformsPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <QNav />

      {/* Hero */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <span className="block font-mono text-[11px] uppercase tracking-eyebrow text-gray-400 mb-4">
            FOR PREDICTION MARKET PLATFORMS &amp; WALLETS
          </span>
          <h1 className="font-headline text-[36px] max-md:text-[28px] font-normal leading-[1.15] tracking-[-0.02em] text-brand-black mb-4">
            More context. More trading volume.
          </h1>
          <p className="text-[15px] leading-relaxed text-gray-500 max-w-[560px] mb-6">
            Add verified analytical signal alongside your markets. Give traders the confidence to act.
          </p>
          <a
            href="mailto:partnerships@quotient.social"
            className="bg-brand-red-orange text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 inline-block"
          >
            Request pilot &rarr;
          </a>
        </div>
      </section>

      {/* How It Integrates */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <span className="block font-mono text-[11px] uppercase tracking-eyebrow text-gray-400 mb-6">
            INTEGRATION
          </span>

          {/* Three-step flow */}
          <div className="flex items-center justify-center gap-4 mb-10 max-md:flex-col">
            <span className="font-mono text-[13px] text-gray-600">Quotient API</span>
            <span className="font-mono text-[13px] text-gray-400 max-md:hidden">&rarr;</span>
            <span className="font-mono text-[13px] text-gray-600">Your platform UI</span>
            <span className="font-mono text-[13px] text-gray-400 max-md:hidden">&rarr;</span>
            <span className="font-mono text-[13px] text-gray-600">Trader sees signal</span>
          </div>

          {/* Three cards */}
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-px bg-border-thin border border-border-thin rounded-sm overflow-hidden">
            <div className="bg-white p-6">
              <div className="text-[15px] font-semibold text-brand-black mb-2">Keep your brand</div>
              <div className="text-[13px] leading-relaxed text-gray-500">
                Signal integrates into your existing UI. Your colors, your layout, your experience.
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[15px] font-semibold text-brand-black mb-2">No rebuild required</div>
              <div className="text-[13px] leading-relaxed text-gray-500">
                Drop-in JSON endpoints. Display Q&apos;s forecast, spread, and key factors alongside any market.
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[15px] font-semibold text-brand-black mb-2">Structured data</div>
              <div className="text-[13px] leading-relaxed text-gray-500">
                Every response includes the forecast, confidence intervals, sourced factors, and track record metadata.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Package */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <span className="block font-mono text-[11px] uppercase tracking-eyebrow text-gray-400 mb-6">
            INTELLIGENCE PACKAGE
          </span>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-px bg-border-thin border border-border-thin rounded-sm overflow-hidden">
            <div className="bg-white p-6">
              <div className="text-[15px] font-semibold text-brand-black mb-2">Q&apos;s directional call</div>
              <div className="text-[13px] leading-relaxed text-gray-500">
                YES/NO with calibrated probability on every covered market.
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[15px] font-semibold text-brand-black mb-2">Spread indicator</div>
              <div className="text-[13px] leading-relaxed text-gray-500">
                The gap between Q&apos;s forecast and current market odds — where the intelligence lives.
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[15px] font-semibold text-brand-black mb-2">Key factors</div>
              <div className="text-[13px] leading-relaxed text-gray-500">
                Weighted factors driving the forecast, ranked by influence.
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[15px] font-semibold text-brand-black mb-2">Commodity/equity mapping</div>
              <div className="text-[13px] leading-relaxed text-gray-500">
                Cross-asset signals when geopolitical events impact financial markets.
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[15px] font-semibold text-brand-black mb-2">Historical track record</div>
              <div className="text-[13px] leading-relaxed text-gray-500">
                Win rate, ROI, and accuracy metrics — independently verifiable.
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="text-[15px] font-semibold text-brand-black mb-2">Forecaster attribution</div>
              <div className="text-[13px] leading-relaxed text-gray-500">
                Named sources and reasoning chains. Full auditability.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Contrast */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
            {/* Why Markets Underperform */}
            <div className="border border-border-thin rounded-sm p-6">
              <div className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-400 mb-4">
                WHY MARKETS UNDERPERFORM
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[13px] text-gray-500">&mdash; Thin liquidity on long-tail geopolitical markets</div>
                <div className="text-[13px] text-gray-500">&mdash; No analytical context alongside odds</div>
                <div className="text-[13px] text-gray-500">&mdash; Traders lack conviction without sourced evidence</div>
                <div className="text-[13px] text-gray-500">&mdash; Price movements driven by sentiment, not analysis</div>
              </div>
            </div>
            {/* What Quotient Adds */}
            <div className="border border-brand-blue rounded-sm p-6">
              <div className="font-mono text-[11px] uppercase tracking-eyebrow text-brand-blue mb-4">
                WHAT QUOTIENT ADDS
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[13px] text-gray-600">+ Independent analytical signal on every market</div>
                <div className="text-[13px] text-gray-600">+ Sourced evidence and auditable reasoning</div>
                <div className="text-[13px] text-gray-600">+ Spread indicator highlights mispriced markets</div>
                <div className="text-[13px] text-gray-600">+ Verified track record builds trader confidence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto text-center">
          <h2 className="font-headline text-[28px] text-brand-black mb-4">
            Ready to add signal to your markets?
          </h2>
          <a
            href="mailto:partnerships@quotient.social"
            className="bg-brand-red-orange text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 inline-block"
          >
            Request pilot &rarr;
          </a>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="Platform FAQ"
        items={[
          { q: 'What does the integration look like?', a: "We provide structured JSON endpoints that return Q's forecast, spread, key factors, and track record for any covered market. You display it however fits your platform." },
          { q: 'How long does integration take?', a: 'Most platforms can integrate the basic signal display in under a week. We provide documentation, sample code, and direct engineering support during the pilot.' },
          { q: "What's the pricing model?", a: 'Platform pricing is based on API call volume and the number of markets covered. Contact us for pilot terms.' },
          { q: 'Do you support real-time updates?', a: 'Forecasts update daily by default. WebSocket support for real-time updates is on our roadmap.' },
        ]}
      />

      <Footer />
    </div>
  )
}
