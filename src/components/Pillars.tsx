'use client';

const pillars = [
    {
        title: 'AWARENESS & EDUCATION',
        description: 'Educating the public and lawmakers about the realities of toxic exposure at NTTR.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
    },
    {
        title: 'JUST COMPENSATION',
        description: 'Advocating for legislation that guarantees free medical treatment and financial support.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
        ),
    },
    {
        title: 'HONORING THE FALLEN',
        description: 'Remembering those who lost their lives to invisible enemies and supporting their families.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
    },
    {
        title: 'SUICIDE PREVENTION & SUPPORT',
        description: 'Providing crisis intervention and peer support to combat the veteran suicide epidemic. 22 veterans die by suicide every day—we fight to end this crisis.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
];

export default function Pillars() {
    return (
        <section id="pillars" className="relative py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="section-heading">OUR FIGHT</span>
                    <h2 className="section-title mt-4">Core Principles</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        We are dedicated to fighting for the rights and recognition of our veterans through these key pillars of action.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar, index) => (
                        <div
                            key={pillar.title}
                            className="group glass-panel p-8 rounded-2xl hover:border-[#A855F7]/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="text-[#A855F7] mb-6 group-hover:scale-110 transition-transform duration-300">
                                {pillar.icon}
                            </div>

                            <h3 className="text-sm font-bold text-white mb-3 tracking-wide group-hover:text-[#A855F7] transition-colors">
                                {pillar.title}
                            </h3>

                            <p className="text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
