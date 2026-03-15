'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { label: 'Overview', href: '/agents/q' },
  { label: 'For Traders', href: '/agents/q/signal' },
  { label: 'For Platforms', href: '/agents/q/platforms' },
  { label: 'For Developers', href: '/agents/q/api' },
]

export default function QNav() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-12 z-40 bg-white border-b border-border-thin">
      <div className="max-w-content mx-auto px-10 max-md:px-6">
        <div className="flex gap-6 overflow-x-auto whitespace-nowrap">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`font-mono text-[11px] uppercase tracking-eyebrow py-3 transition-colors ${
                  isActive
                    ? 'border-b-2 border-brand-black text-brand-black'
                    : 'text-gray-400 hover:text-brand-black'
                }`}
              >
                {tab.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
