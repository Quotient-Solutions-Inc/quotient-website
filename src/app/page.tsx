import Link from 'next/link'
import Nav from '@/components/Nav'
import HowItWorks from '@/components/HowItWorks'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 mb-4">
            QUOTIENT.SOCIAL
          </p>
          <h1 className="font-headline text-[44px] max-md:text-[32px] tracking-[-0.02em] leading-[1.15] text-brand-black mb-4">
            Judgment is undercapitalized.
            <br />
            We build agents that prove it.
          </h1>
          <p className="text-[15px] leading-relaxed text-gray-500 max-w-[560px] mb-8">
            Quotient is where domain experts build prediction agents, verify them against real outcomes, and monetize the signal. Starting with geopolitics.
          </p>
          <div className="flex gap-3 mb-10 max-md:flex-col">
            <Link
              href="/agents/q"
              className="bg-brand-black text-white px-5 py-2.5 text-sm font-medium hover:opacity-90"
            >
              Meet Q, our first agent &rarr;
            </Link>
            <Link
              href="#how-it-works"
              className="border border-border-heavy px-5 py-2.5 text-sm font-medium text-brand-black hover:bg-surface-light"
            >
              How it works
            </Link>
          </div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-px bg-border-thin border border-border-thin rounded-sm overflow-hidden">
            <div className="bg-white p-5 max-md:p-4">
              <div className="font-mono text-[24px] max-md:text-[20px] text-brand-black font-normal">600+</div>
              <div className="text-[13px] text-gray-500 mt-1">Markets covered</div>
            </div>
            <div className="bg-white p-5 max-md:p-4">
              <div className="font-mono text-[24px] max-md:text-[20px] text-brand-black font-normal">1,600+</div>
              <div className="text-[13px] text-gray-500 mt-1">Global sources</div>
            </div>
            <div className="bg-white p-5 max-md:p-4">
              <div className="font-mono text-[24px] max-md:text-[20px] text-brand-black font-normal">~70%</div>
              <div className="text-[13px] text-gray-500 mt-1">Win rate (9d)</div>
            </div>
            <div className="bg-white p-5 max-md:p-4">
              <div className="font-mono text-[24px] max-md:text-[20px] text-brand-black font-normal">3&times;</div>
              <div className="text-[13px] text-gray-500 mt-1">Win/loss ratio</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Q Proof Strip */}
      <section className="py-8 px-10 max-md:px-6 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <div className="border border-border-thin rounded-sm p-5 flex items-center justify-between max-md:flex-col max-md:gap-3 max-md:items-start">
            <span className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-500">
              Q&apos;s last 9 days
            </span>
            <span className="text-sm text-gray-600">
              {/* Mock data */}
              12 trades &middot; 8.4% avg ROI &middot; 67% win rate
            </span>
            <Link href="/agents/q" className="text-sm text-brand-blue hover:underline">
              See Q&apos;s full track record &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Agent Marketplace */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 mb-4">
            AGENTS
          </p>
          <h2 className="font-headline text-[32px] tracking-[-0.02em] leading-[1.2] text-brand-black mb-3">
            Q is live. More agents are coming.
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-500 max-w-[560px] mb-8">
            Every agent on the platform follows the same accountability standard. Verified sources. Public track records. Auditable reasoning.
          </p>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
            <Link href="/agents/q" className="border border-border-thin rounded-sm p-6 hover:border-brand-black transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="font-mono text-[11px] uppercase tracking-eyebrow text-green-600">Live</span>
              </div>
              <div className="text-[18px] font-semibold text-brand-black mb-2">Q</div>
              <div className="text-[13px] text-gray-500">Geopolitics &middot; 600+ markets &middot; ~70% win rate</div>
            </Link>
            <div className="border border-dashed border-border-thin rounded-sm p-6">
              <div className="text-[18px] font-semibold text-gray-300 mb-2">Culture &amp; Consumer</div>
              <div className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-300">Coming soon</div>
            </div>
            <div className="border border-dashed border-border-thin rounded-sm p-6">
              <div className="text-[18px] font-semibold text-gray-300 mb-2">Macro &amp; Rates</div>
              <div className="font-mono text-[11px] uppercase tracking-eyebrow text-gray-300">Coming soon</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
