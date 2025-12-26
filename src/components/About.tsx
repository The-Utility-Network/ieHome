export default function About() {
    return (
        <section id="about" className="relative py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                    {/* Left Content */}
                    <div>
                        <span className="section-heading">OUR MISSION</span>
                        <h2 className="section-title mt-4 mb-6">The Unseen Battle</h2>

                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <p>
                                <span className="text-[#A855F7] font-semibold">Invisible Enemies</span> represents
                                more than just a digital collection; it is a movement dedicated to shedding light on the
                                struggles faced by our military veterans. Specifically, we advocate for those affected by
                                exposure to toxic radiation and materials during their service—an enemy they can&apos;t see,
                                but one that fights them every day.
                            </p>
                            <p>
                                Through awareness, community building, and direct support, we aim to ensure these brave
                                individuals receive the recognition, healthcare, and compensation they deserve. We
                                challenge government accountability and provide a platform for stories that need to be heard.
                            </p>
                            <p className="font-semibold text-white">
                                We are the voice for the voiceless.
                            </p>
                        </div>

                        {/* Mission Statement Card */}
                        <div className="mt-8 p-6 glass-panel rounded-2xl border-l-4 border-[#A855F7]">
                            <p className="text-sm text-gray-400 italic">
                                &ldquo;It is time to step up and fight. These Invisible Enemies are getting out of hand and are wreaking havoc on humanity. The Zeta Reticulans are here to help us defeat them... Are you ready?&rdquo;
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Values */}
                    <div className="space-y-6">
                        {/* Core Values */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                {
                                    title: 'AWARENESS',
                                    desc: 'Shining light on toxic exposure issues',
                                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                },
                                {
                                    title: 'ADVOCACY',
                                    desc: 'Fighting for legislative change & benefits',
                                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6 3 3 0 000 6v6a1 1 0 001 1h1a1 1 0 001-1v-6a1 1 0 001-1h1a1 1 0 001-1v-2a1 1 0 00-1-1h-1a1 1 0 00-1 1v2z" /></svg>
                                },
                                {
                                    title: 'COMMUNITY',
                                    desc: 'A decentralized force for good',
                                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                },
                                {
                                    title: 'SUPPORT',
                                    desc: 'Aid for affected veterans & families',
                                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                },
                            ].map((value) => (
                                <div key={value.title} className="card group hover:border-[#A855F7]/50">
                                    <div className="text-[#A855F7] mb-2 group-hover:scale-110 transition-transform">
                                        {value.icon}
                                    </div>
                                    <h4 className="text-xs font-mono tracking-wider text-[#A855F7] mb-2">
                                        {value.title}
                                    </h4>
                                    <p className="text-sm text-gray-400">{value.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Initiative Impact */}
                        <div className="glass-panel rounded-2xl p-6 border border-white/5">
                            <h4 className="text-xs font-mono tracking-wider text-gray-500 mb-4">
                                INITIATIVE IMPACT
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-300">Legislative Action</span>
                                    <div className="h-1.5 w-32 bg-gray-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#A855F7] w-[75%] rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-300">Community Growth</span>
                                    <div className="h-1.5 w-32 bg-gray-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#A855F7] w-[90%] rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-300">Veteran Assistance</span>
                                    <div className="h-1.5 w-32 bg-gray-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#A855F7] w-[85%] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
