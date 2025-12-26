import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Whitepaper', href: '/docs' },
    { label: 'Storyline', href: '/storyline' },
    { label: 'Contact', href: '/contact' },
    { label: 'Portal', href: 'https://portal.ie.theutilityfoundation.org', external: true },
];

const exploreLinks = [
    { label: 'Locations', href: '/locations' },
    { label: 'Initiatives', href: '/initiatives' },
    { label: 'Resources', href: '/comparisons' },
];

const ecosystemLinks = [
    { label: 'The Utility Foundation', href: 'https://theutilityfoundation.org' },
    { label: 'The Invisible Enemy', href: 'https://theinvisibleenemy.org' },
    { label: 'Official Site', href: 'https://invisibleenemiesofficial.io' },
];

export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-white/10 bg-black">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand - Full width on mobile */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 relative flex-shrink-0">
                                <Image
                                    src="/IE.png"
                                    alt="Invisible Enemies"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <span className="text-white font-bold text-sm">Invisible Enemies</span>
                                <p className="text-xs text-gray-500">The Utility Foundation</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
                            Supporting veterans exposed to toxic hazards through blockchain-powered advocacy.
                        </p>
                        <a
                            href="https://portal.ie.theutilityfoundation.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A855F7] text-black text-xs font-bold hover:bg-[#7E22CE] transition-colors"
                        >
                            <span>Access Portal</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-mono tracking-wider text-[#A855F7] mb-4">QUICK LINKS</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    {link.external ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1"
                                        >
                                            {link.label}
                                            <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 text-sm hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="text-xs font-mono tracking-wider text-[#A855F7] mb-4">EXPLORE</h4>
                        <ul className="space-y-3">
                            {exploreLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 text-sm hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ecosystem */}
                    <div>
                        <h4 className="text-xs font-mono tracking-wider text-[#A855F7] mb-4">ECOSYSTEM</h4>
                        <ul className="space-y-3">
                            {ecosystemLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1"
                                    >
                                        {link.label}
                                        <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mt-6">
                            <a
                                href="https://twitter.com/invisibleenemi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#A855F7]/20 flex items-center justify-center transition-colors"
                            >
                                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://discord.gg/scHwVByn9m"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#A855F7]/20 flex items-center justify-center transition-colors"
                            >
                                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                            </a>
                            <a
                                href="mailto:info@invisibleenemiesofficial.io"
                                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#A855F7]/20 flex items-center justify-center transition-colors"
                            >
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                        <p className="text-gray-500 text-xs">
                            © {new Date().getFullYear()} The Utility Foundation. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="text-[#A855F7]">Advocacy.</span>
                            <span className="text-[#A855F7]">Awareness.</span>
                            <span className="text-[#A855F7]">Accountability.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
