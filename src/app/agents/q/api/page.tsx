import Nav from '@/components/Nav'
import QNav from '@/components/QNav'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export default function ApiPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <QNav />

      {/* Hero */}
      <section className="bg-brand-black text-white py-12 px-10 max-md:px-6 max-md:py-8">
        <div className="max-w-content mx-auto">
          <span className="block font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 mb-4">
            FOR DEVELOPERS &amp; AGENTS
          </span>
          <h1 className="font-headline text-[36px] max-md:text-[28px] text-white tracking-[-0.02em] leading-[1.15] mb-3">
            Geopolitical signal. Built for agents.
          </h1>
          <p className="text-[15px] leading-relaxed text-gray-400 max-w-[560px] mb-8">
            A verified signal layer for autonomous pipelines. Structured output. Sourced evidence. Machine-readable by default.
          </p>
          <div className="flex gap-3 mb-10">
            <Link
              href="#"
              className="bg-brand-red-orange text-white px-5 py-2.5 text-sm font-medium hover:opacity-90"
            >
              Start building &rarr;
            </Link>
            <Link
              href="https://docs.quotient.social"
              target="_blank"
              className="border border-gray-600 text-gray-300 px-5 py-2.5 text-sm font-medium hover:text-white hover:border-gray-400 transition-colors"
            >
              Read the docs &uarr;
            </Link>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-sm p-6 overflow-x-auto">
            <span className="block font-mono text-[10px] uppercase tracking-eyebrow text-gray-600 mb-3">
              EXAMPLE REQUEST
            </span>
            <pre className="font-mono text-[13px] leading-relaxed text-gray-300 whitespace-pre">{`curl -H "Authorization: Bearer $API_KEY" \\
  https://api.quotient.social/v1/signals/russia-ukraine-ceasefire

{
  "market": "Will Russia-Ukraine ceasefire happen by July 2026?",
  "q_forecast": 0.48,
  "market_odds": 0.32,
  "spread": 0.16,
  "direction": "YES",
  "confidence": "high",
  "top_factors": [
    "Multiple diplomatic back-channels active",
    "Zelensky signals conditional negotiation",
    "Energy infrastructure pressure mounting"
  ],
  "sources": 14,
  "updated_at": "2026-03-15T08:00:00Z"
}`}</pre>
          </div>
        </div>
      </section>

      {/* Core Endpoints */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <span className="block font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 mb-4">
            CORE ENDPOINTS
          </span>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-px bg-border-thin border border-border-thin rounded-sm overflow-hidden">
            <div className="bg-white p-6">
              <div className="font-mono text-[14px] text-brand-black mb-2">/v1/markets</div>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                List all covered markets with current odds, Q&apos;s forecast, and spread. Filter by category, platform, or volume threshold.
              </p>
            </div>
            <div className="bg-white p-6">
              <div className="font-mono text-[14px] text-brand-black mb-2">/v1/signals/:id</div>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Full signal package for a specific market. Includes forecast, confidence, key factors, sourced evidence, and track record.
              </p>
            </div>
            <div className="bg-white p-6">
              <div className="font-mono text-[14px] text-brand-black mb-2">/v1/intelligence</div>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Aggregated intelligence feed. All active signals sorted by spread magnitude. Ideal for scanning opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Contrast */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <span className="block font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 mb-4">
            WHY QUOTIENT
          </span>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
            <div className="border border-border-thin rounded-sm p-6">
              <span className="block font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 mb-3">
                WITHOUT QUOTIENT
              </span>
              <div className="text-[15px] font-semibold text-gray-400 mb-2">Raw headlines</div>
              <p className="text-[13px] text-gray-400">
                Unstructured news. No probability. No track record. No way to assess signal quality.
              </p>
            </div>
            <div className="border border-border-thin rounded-sm p-6">
              <span className="block font-mono text-[10px] uppercase tracking-eyebrow text-gray-400 mb-3">
                WITHOUT QUOTIENT
              </span>
              <div className="text-[15px] font-semibold text-gray-400 mb-2">Raw market odds</div>
              <p className="text-[13px] text-gray-400">
                Thinly traded prices. No analytical context. Easily moved by single large positions.
              </p>
            </div>
            <div className="border border-brand-blue rounded-sm p-6">
              <span className="block font-mono text-[10px] uppercase tracking-eyebrow text-brand-blue mb-3">
                WITH QUOTIENT
              </span>
              <div className="text-[15px] font-semibold text-brand-black mb-2">Verified signal</div>
              <p className="text-[13px] text-gray-600">
                Calibrated probability. Sourced evidence. Public track record. Structured JSON. Machine-readable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery & Payment */}
      <section className="py-12 px-10 max-md:px-6 max-md:py-8 border-b border-border-thin">
        <div className="max-w-content mx-auto">
          <span className="block font-mono text-[11px] uppercase tracking-eyebrow text-gray-500 mb-4">
            INTEGRATION
          </span>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
            <div className="border border-border-thin rounded-sm p-6">
              <div className="text-[15px] font-semibold text-brand-black mb-2">Auto-discoverable</div>
              <p className="text-[13px] text-gray-500">
                llms.txt for LLM agents. skill.md for agent frameworks. MCP server for tool-use pipelines. Your agent finds us automatically.
              </p>
            </div>
            <div className="border border-border-thin rounded-sm p-6">
              <div className="text-[15px] font-semibold text-brand-black mb-2">Flexible payment</div>
              <p className="text-[13px] text-gray-500">
                x402 for per-request micropayments. Stripe for monthly subscriptions. Volume tiers for high-throughput agents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="Developer FAQ"
        items={[
          { q: "What authentication is required?", a: "API key via Bearer token. Keys are available immediately upon registration. No approval process." },
          { q: "What formats are supported?", a: "JSON by default. All responses include structured fields for forecast, confidence, factors, sources, and metadata." },
          { q: "Is there rate limiting?", a: "Free tier: 100 requests/day. Paid tiers scale to 100k+ requests/day. Contact us for enterprise volume." },
          { q: "Can I use this in a trading bot?", a: "Yes. The API is designed for programmatic access. Many users integrate Q's signal into automated trading pipelines." },
          { q: "How do I get started?", a: "Sign up at docs.quotient.social, get an API key, and make your first request. Full documentation and sample code available." },
        ]}
      />

      <Footer />
    </div>
  )
}
