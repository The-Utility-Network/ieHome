import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { INITIATIVES } from '@/data/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return INITIATIVES.map((init) => ({ slug: init.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const initiative = INITIATIVES.find((i) => i.slug === slug);
    if (!initiative) return { title: 'Initiative Not Found' };
    return {
        title: `${initiative.title} | Invisible Enemies`,
        description: initiative.description,
    };
}

export default async function InitiativePage({ params }: Props) {
    const { slug } = await params;
    const initiative = INITIATIVES.find((i) => i.slug === slug);
    if (!initiative) notFound();

    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar themeColor="#A855F7" />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href="/initiatives" className="text-sm text-[#A855F7] hover:underline mb-4 inline-block">
                        ← Back to Initiatives
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-black mb-4">{initiative.title}</h1>
                    <p className="text-xl text-gray-400">{initiative.description}</p>
                </div>
            </section>

            {/* Content */}
            <section className="pb-24 px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="glass-panel p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-[#A855F7] mb-4">The Mission</h2>
                        <p className="text-gray-300 leading-relaxed">{initiative.missionNarrative}</p>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-[#A855F7] mb-4">Our Impact</h2>
                        <p className="text-gray-300 leading-relaxed">{initiative.impactNarrative}</p>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-[#A855F7] mb-4">Community Role</h2>
                        <p className="text-gray-300 leading-relaxed">{initiative.communityNarrative}</p>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-[#A855F7] mb-4">Take Action</h2>
                        <p className="text-gray-300 leading-relaxed">{initiative.actionNarrative}</p>
                    </div>

                    {/* Stages */}
                    {initiative.stages && (
                        <div className="glass-panel p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold text-[#A855F7] mb-6">The Process</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {initiative.stages.map((stage, i) => (
                                    <div key={i} className="text-center p-4 rounded-xl bg-white/5">
                                        <div className="text-3xl mb-2">{stage.icon}</div>
                                        <div className="text-white font-bold text-sm">{stage.title}</div>
                                        <div className="text-gray-500 text-xs">{stage.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA */}
                    <div className="text-center pt-8">
                        <a
                            href="https://portal.ie.theutilityfoundation.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 rounded-full bg-[#A855F7] text-black font-bold hover:bg-[#7E22CE] transition-colors"
                        >
                            Join This Initiative
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
