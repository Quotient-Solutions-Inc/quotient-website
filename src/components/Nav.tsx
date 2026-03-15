import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-brand-black text-white h-12">
      <div className="flex items-center justify-between px-10 max-md:px-6 h-full">
        {/* Left: Wordmark */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-2 h-2 bg-brand-red-orange rounded-sm block" />
            <span className="font-wordmark text-sm">Quotient</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-wide">
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
              How It Works
            </a>
            <Link href="/agents/q" className="text-gray-400 hover:text-white transition-colors">
              Q
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <a
              href="https://docs.quotient.social"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              API Docs ↗
            </a>
          </div>
        </div>

        {/* Right: Meet Q button */}
        <Link
          href="/agents/q"
          className="bg-brand-red-orange text-white text-xs font-mono uppercase tracking-wide px-4 py-2 hover:opacity-90 transition-opacity"
        >
          Meet Q
        </Link>
      </div>
    </nav>
  )
}
