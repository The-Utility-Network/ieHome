'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-32 overflow-hidden">
            {/* Hero Background Image - confined to hero section */}
            <div className="absolute inset-0 z-0 opacity-70 mix-blend-screen">
                <Image
                    src="/hero-image.png"
                    alt="Alien Landscape"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_60%,rgba(0,0,0,0.7)_100%)]" />
            </div>

            <div className="max-w-6xl mx-auto text-center z-10 flex flex-col items-center relative">
                {/* System Label */}
                <div className="inline-flex items-center gap-2 mb-8 opacity-0 animate-fadeInUp">
                    <span className="w-2 h-2 bg-[#A855F7] rounded-full animate-pulse" />
                    <span className="text-xs font-mono tracking-[0.3em] text-[#A855F7]">
                        VETERANS INITIATIVE
                    </span>
                </div>

                {/* Main Heading & Medallion */}
                <div className="relative w-full max-w-4xl mx-auto mb-12">
                    {/* Medallion Image */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 animate-float">
                        <div className="absolute inset-0 bg-[#A855F7] rounded-full blur-[80px] opacity-30 animate-pulse-glow"></div>
                        <Image
                            src="/IE.png"
                            alt="Invisible Enemies Medallion"
                            fill
                            className="object-contain drop-shadow-[0_0_50px_rgba(168,85,247,0.4)]"
                            priority
                        />
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fadeInUp stagger-1">
                        <span className="block text-white">INVISIBLE</span>
                        <span className="block bg-gradient-to-r from-[#A855F7] to-[#D8B4FE] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                            ENEMIES
                        </span>
                    </h1>
                </div>

                {/* Mission Statement */}
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed opacity-0 animate-fadeInUp stagger-2">
                    They wore the uniform, but the battle didn&apos;t end when they came home.
                    <br />
                    Fighting for recognition and support for veterans exposed to toxic hazards.
                    <br />
                    <span className="text-[#A855F7] font-bold mt-2 block">Advocacy. Awareness. Accountability.</span>
                </p>

                {/* Crisis Line Callout */}
                <div className="bg-[#A855F7]/10 border border-[#A855F7]/30 rounded-2xl p-4 max-w-2xl mx-auto mb-12 opacity-0 animate-fadeInUp stagger-2">
                    <p className="text-sm text-gray-300">
                        <span className="font-bold text-[#A855F7]">Veterans in Crisis:</span> Call 988, then press 1 • 22 veterans die by suicide every day. You are not alone.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fadeInUp stagger-3">
                    <Link href="https://invisibleenemiesofficial.io/roadmap-1" target="_blank" className="btn-primary text-sm tracking-wider">
                        VIEW ROADMAP
                    </Link>
                    <Link href="https://portal.ie.theutilityfoundation.org" target="_blank" className="btn-secondary text-sm tracking-wider">
                        JOIN THE BATTLE (MINT)
                    </Link>
                </div>

                {/* Stats Row */}
                <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fadeInUp stagger-4 w-full">
                    {[
                        { value: '5,346', label: 'NFT SUPPLY' },
                        { value: '100%', label: 'VETERAN SUPPORT' },
                        { value: 'DAO', label: 'COMMUNITY GOVERNANCE' },
                        { value: '∞', label: 'IMPACT' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center group hover:scale-105 transition-transform duration-300">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-[#A855F7] transition-colors">
                                {stat.value}
                            </div>
                            <div className="text-xs font-mono tracking-wider text-gray-500 group-hover:text-gray-300 transition-colors">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 animate-fadeInUp stagger-5 z-10">
                <Link href="#pillars" className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#A855F7] transition-colors">
                    <span className="text-xs font-mono tracking-wider">SCROLL</span>
                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
