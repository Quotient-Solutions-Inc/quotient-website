import Link from 'next/link'
import Image from 'next/image'

function FooterLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] uppercase tracking-eyebrow text-gray-600 mb-1">
      {children}
    </div>
  )
}

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-[12px] text-gray-500 hover:text-white transition-colors leading-none">
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className="text-[12px] text-gray-500 hover:text-white transition-colors leading-none">
      {children}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-black pt-10 pb-6 px-10 max-md:px-6">
      <div className="max-w-content mx-auto">
        <div className="grid max-md:grid-cols-1 grid-cols-[180px_1fr] gap-10 border-b border-gray-800 pb-7 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Image src="/logo-mark.png" alt="Quotient" width={22} height={18} className="invert" />
              <span className="font-wordmark text-sm text-white">Quotient</span>
            </div>
            <div className="text-[12px] text-gray-600 leading-relaxed">Turn judgment into a product.</div>
          </div>
          <div className="flex gap-12 max-md:gap-8 flex-wrap">
            <div className="flex flex-col gap-2">
              <FooterLabel>Agents</FooterLabel>
              <FooterLink href="/agents/q">Q: Geopolitics</FooterLink>
              <div className="flex flex-col gap-2 pl-3 border-l border-gray-700">
                <FooterLink href="/agents/q/signal">For Traders</FooterLink>
                <FooterLink href="/agents/q/platforms">For Platforms</FooterLink>
                <FooterLink href="/agents/q/api">For Developers</FooterLink>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <FooterLabel>Contribute</FooterLabel>
              <FooterLink href="#">Mobile app</FooterLink>
              <FooterLink href="#">Farcaster mini app</FooterLink>
              <FooterLink href="#">World mini app</FooterLink>
            </div>
            <div className="flex flex-col gap-2">
              <FooterLabel>Developers</FooterLabel>
              <FooterLink href="https://docs.quotient.social" external>API docs ↗</FooterLink>
              <FooterLink href="#">llms.txt</FooterLink>
              <FooterLink href="#">skill.md</FooterLink>
            </div>
            <div className="flex flex-col gap-2">
              <FooterLabel>Company</FooterLabel>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="#">Substack</FooterLink>
              <FooterLink href="#">X / Twitter</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-mono text-[11px] text-gray-700">&copy; 2026 Quotient</span>
        </div>
      </div>
    </footer>
  )
}
