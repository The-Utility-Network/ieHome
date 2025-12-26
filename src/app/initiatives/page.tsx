import Link from 'next/link';
import { Metadata } from 'next';
import { INITIATIVES } from '@/data/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Initiatives | Invisible Enemies',
    description: 'Our advocacy programs and initiatives supporting veterans affected by toxic exposure.',
};

export default function InitiativesPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar themeColor="#A855F7" />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-xs font-mono tracking-widest text-[#A855F7]">OUR PROGRAMS</span>
                    <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">Initiatives</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Targeted advocacy programs fighting for veterans affected by nuclear testing, burn pits, water contamination, and other toxic exposures.
                    </p>
                </div>
            </section>

            {/* Initiatives Grid */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {INITIATIVES.map((initiative) => (
                            <Link
                                key={initiative.slug}
                                href={`/initiatives/${initiative.slug}`}
                                className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
                            >
                                <h2 className="text-2xl font-bold text-white group-hover:text-[#A855F7] transition-colors mb-4">
                                    {initiative.title}
                                </h2>
                                <p className="text-gray-400 mb-6">
                                    {initiative.description}
                                </p>
                                {initiative.stages && (
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        {initiative.stages.map((stage, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                                <span>{stage.icon}</span>
                                                <span>{stage.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className="text-xs font-mono text-[#A855F7] group-hover:tracking-wide transition-all">
                                    LEARN MORE →
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
