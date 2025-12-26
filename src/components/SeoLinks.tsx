'use client';

import Link from 'next/link';
import { LOCATIONS, INITIATIVES, COMPARISONS } from '@/data/seo';

export default function SeoLinks() {
    return (
        <section className="relative py-24 px-6 border-t border-white/10 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-xs font-mono tracking-widest text-[#A855F7]">EXPLORE THE MISSION</span>
                    <h2 className="text-4xl font-bold mt-4 text-white">Discover Our Impact</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Learn how Invisible Enemies fights for veterans through advocacy, awareness, and blockchain-powered community action across the nation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {/* Locations Column */}
                    <div className="glass-panel p-8 rounded-2xl flex flex-col h-full group hover:bg-white/5 transition-colors duration-500">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-[#A855F7]">Locations</span>
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </h3>
                        <div className="flex-grow space-y-4 mb-8">
                            <p className="text-gray-400 text-sm">Military bases and sites of toxic exposure.</p>
                            <div className="flex flex-wrap gap-2">
                                {LOCATIONS.slice(0, 6).map((loc) => (
                                    <Link
                                        key={loc.slug}
                                        href={`/locations/${loc.slug}`}
                                        className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#A855F7]/20 hover:text-[#A855F7] text-xs transition-colors border border-white/5 hover:border-[#A855F7]/30"
                                    >
                                        {loc.city}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <Link
                            href="/locations"
                            className="inline-flex items-center text-sm font-mono text-[#A855F7] hover:tracking-wide transition-all"
                        >
                            VIEW ALL LOCATIONS <span className="ml-2">→</span>
                        </Link>
                    </div>

                    {/* Initiatives Column */}
                    <div className="glass-panel p-8 rounded-2xl flex flex-col h-full group hover:bg-white/5 transition-colors duration-500">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-[#A855F7]">Initiatives</span>
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </h3>
                        <div className="flex-grow space-y-4 mb-8">
                            <p className="text-gray-400 text-sm">Our advocacy and support programs.</p>
                            <div className="flex flex-wrap gap-2">
                                {INITIATIVES.slice(0, 6).map((init) => (
                                    <Link
                                        key={init.slug}
                                        href={`/initiatives/${init.slug}`}
                                        className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#A855F7]/20 hover:text-[#A855F7] text-xs transition-colors border border-white/5 hover:border-[#A855F7]/30"
                                    >
                                        {init.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <Link
                            href="/initiatives"
                            className="inline-flex items-center text-sm font-mono text-[#A855F7] hover:tracking-wide transition-all"
                        >
                            EXPLORE INITIATIVES <span className="ml-2">→</span>
                        </Link>
                    </div>

                    {/* Comparisons Column */}
                    <div className="glass-panel p-8 rounded-2xl flex flex-col h-full group hover:bg-white/5 transition-colors duration-500">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-[#A855F7]">Resources</span>
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                        </h3>
                        <div className="flex-grow space-y-4 mb-8">
                            <p className="text-gray-400 text-sm">How we compare to other veteran resources.</p>
                            <div className="flex flex-wrap gap-2">
                                {COMPARISONS.slice(0, 6).map((comp) => (
                                    <Link
                                        key={comp.slug}
                                        href={`/comparisons/${comp.slug}`}
                                        className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#A855F7]/20 hover:text-[#A855F7] text-xs transition-colors border border-white/5 hover:border-[#A855F7]/30"
                                    >
                                        {comp.resource}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <Link
                            href="/comparisons"
                            className="inline-flex items-center text-sm font-mono text-[#A855F7] hover:tracking-wide transition-all"
                        >
                            COMPARE RESOURCES <span className="ml-2">→</span>
                        </Link>
                    </div>

                    {/* Documentation Column */}
                    <div className="glass-panel p-8 rounded-2xl flex flex-col h-full group hover:bg-white/5 transition-colors duration-500">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-[#A855F7]">Documentation</span>
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </h3>
                        <div className="flex-grow space-y-4 mb-8">
                            <p className="text-gray-400 text-sm">Our whitepaper, roadmap, and lore.</p>
                            <div className="flex flex-wrap gap-2">
                                <Link
                                    href="/docs"
                                    className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#A855F7]/20 hover:text-[#A855F7] text-xs transition-colors border border-white/5 hover:border-[#A855F7]/30"
                                >
                                    Whitepaper
                                </Link>
                                <Link
                                    href="/docs#501c3"
                                    className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#A855F7]/20 hover:text-[#A855F7] text-xs transition-colors border border-white/5 hover:border-[#A855F7]/30"
                                >
                                    501(c)(3) Path
                                </Link>
                                <Link
                                    href="/storyline"
                                    className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#A855F7]/20 hover:text-[#A855F7] text-xs transition-colors border border-white/5 hover:border-[#A855F7]/30"
                                >
                                    Storyline
                                </Link>
                                <Link
                                    href="/docs#dao"
                                    className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#A855F7]/20 hover:text-[#A855F7] text-xs transition-colors border border-white/5 hover:border-[#A855F7]/30"
                                >
                                    DAO Governance
                                </Link>
                                <Link
                                    href="/docs#tokenomics"
                                    className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#A855F7]/20 hover:text-[#A855F7] text-xs transition-colors border border-white/5 hover:border-[#A855F7]/30"
                                >
                                    Tokenomics
                                </Link>
                            </div>
                        </div>
                        <Link
                            href="/docs"
                            className="inline-flex items-center text-sm font-mono text-[#A855F7] hover:tracking-wide transition-all"
                        >
                            READ WHITEPAPER <span className="ml-2">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
