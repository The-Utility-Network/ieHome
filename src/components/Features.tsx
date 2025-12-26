'use client';

import Image from 'next/image';

const nftImages = [
    '/nfts/alien.jpg',
    '/nfts/blueangel.jpg',
    '/nfts/sailor.jpg',
    '/nfts/war.jpg',
    '/nfts/22to0.jpg',
    '/nfts/alien2.jpg',
    '/nfts/hero.jpg',
];

export default function Features() {
    return (
        <section id="features" className="relative py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-24">

                {/* Innovative Symbiosis & Creator Economy Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Innovative Symbiosis */}
                    <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#A855F7]/10 rounded-full blur-3xl group-hover:bg-[#A855F7]/20 transition-colors" />
                        <h3 className="section-heading mb-4 text-[#A855F7]">CORE FOCUS</h3>
                        <h2 className="text-2xl font-bold text-white mb-4">Decentralized Impact</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Invisible Enemies leverages blockchain technology to create a transparent, immutable record of support for veterans. By decentralizing the initiative, we ensure that power and governance remain in the hands of the community.
                        </p>
                    </div>

                    {/* Creator Economy */}
                    <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
                        <h3 className="section-heading mb-4 text-blue-400">ECONOMIC MODEL</h3>
                        <h2 className="text-2xl font-bold text-white mb-4">Community Ownership</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Through the Zeta Reticulin collection, every holder becomes a stakeholder in the mission. Ownership grants access to the DAO, educational resources through Whiskey Alpha, and a voice in the future of the project lore.
                        </p>
                    </div>
                </div>

                {/* Collection Marquee Section */}
                <div className="glass-panel rounded-3xl border border-[#A855F7]/30 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#A855F7]/5 to-transparent pointer-events-none" />

                    <div className="p-8 md:p-12 pb-0">
                        <div className="max-w-xl mx-auto text-center mb-12">
                            <div className="inline-flex items-center gap-2 mb-4 justify-center">
                                <span className="animate-pulse w-2 h-2 bg-[#A855F7] rounded-full" />
                                <span className="text-xs font-mono text-[#A855F7] tracking-widest">LIVE MINT</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Zeta Reticulin Collection
                            </h2>
                            <p className="text-gray-400">
                                5,346 unique commanders in the fight against invisible enemies.
                            </p>
                        </div>
                    </div>

                    {/* Marquee Container */}
                    <div className="relative w-full overflow-hidden pb-12">
                        {/* Gradient Masks */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black via-black/50 to-transparent z-10" />

                        {/* Sliding Track */}
                        <div className="flex gap-6 animate-scroll w-max hover:[animation-play-state:paused]">
                            {/* Original Set */}
                            {nftImages.map((src, index) => (
                                <div key={`nft-${index}`} className="relative w-64 h-64 flex-shrink-0 rounded-xl overflow-hidden border border-white/10 group cursor-pointer hover:border-[#A855F7] transition-colors">
                                    <Image
                                        src={src}
                                        alt={`Invisible Enemy Variant ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                                        <p className="text-xs font-mono text-[#A855F7]">VARIANT 00{index + 1}</p>
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate Set for Loop */}
                            {nftImages.map((src, index) => (
                                <div key={`nft-dup-${index}`} className="relative w-64 h-64 flex-shrink-0 rounded-xl overflow-hidden border border-white/10 group cursor-pointer hover:border-[#A855F7] transition-colors">
                                    <Image
                                        src={src}
                                        alt={`Invisible Enemy Variant ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                                        <p className="text-xs font-mono text-[#A855F7]">VARIANT 00{index + 1}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center pb-12">
                        <a
                            href="https://portal.ie.theutilityfoundation.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary bg-[#A855F7] hover:bg-[#7E22CE] text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all"
                        >
                            MINT YOUR COMMANDER
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
            `}</style>
        </section >
    );
}
