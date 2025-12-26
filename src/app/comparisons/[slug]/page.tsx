import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { COMPARISONS } from '@/data/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Props {
    params: Promise<{ slug: string }>;
}

const categoryColors: Record<string, string> = {
    Government: '#3B82F6',
    Nonprofit: '#10B981',
    Advocacy: '#F59E0B',
    Healthcare: '#EF4444',
};

export async function generateStaticParams() {
    return COMPARISONS.map((comp) => ({ slug: comp.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const comparison = COMPARISONS.find((c) => c.slug === slug);
    if (!comparison) return { title: 'Comparison Not Found' };
    return {
        title: `IE vs ${comparison.resource} | Invisible Enemies`,
        description: comparison.description,
    };
}

export default async function ComparisonPage({ params }: Props) {
    const { slug } = await params;
    const comparison = COMPARISONS.find((c) => c.slug === slug);
    if (!comparison) notFound();

    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar themeColor="#A855F7" />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href="/comparisons" className="text-sm text-[#A855F7] hover:underline mb-4 inline-block">
                        ← Back to Comparisons
                    </Link>
                    <div className="flex items-center gap-4 mb-4">
                        <span
                            className="px-3 py-1 rounded-full text-sm"
                            style={{
                                backgroundColor: `${categoryColors[comparison.category]}20`,
                                color: categoryColors[comparison.category],
                            }}
                        >
                            {comparison.category}
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black mb-4">
                        {comparison.resource}
                    </h1>
                    <p className="text-lg text-gray-400">How Invisible Enemies complements this resource</p>
                </div>
            </section>

            {/* Content */}
            <section className="pb-24 px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="glass-panel p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-gray-400 mb-4">About {comparison.resource}</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">{comparison.description}</p>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl border-2 border-[#A855F7]/30">
                        <h2 className="text-2xl font-bold text-[#A855F7] mb-4">The Invisible Enemies Advantage</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">{comparison.ieAdvantage}</p>
                    </div>

                    {/* Side by Side */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-white/5">
                            <h3 className="text-lg font-bold text-gray-400 mb-3">{comparison.resource}</h3>
                            <ul className="space-y-2 text-gray-500 text-sm">
                                <li>• Traditional organizational structure</li>
                                <li>• Donation-based funding</li>
                                <li>• Annual reporting</li>
                                <li>• Centralized decision making</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl bg-[#A855F7]/10 border border-[#A855F7]/30">
                            <h3 className="text-lg font-bold text-[#A855F7] mb-3">Invisible Enemies</h3>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>• Decentralized DAO governance</li>
                                <li>• NFT-powered funding model</li>
                                <li>• Real-time on-chain transparency</li>
                                <li>• Community-driven priorities</li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center pt-8">
                        <p className="text-gray-400 mb-6">
                            Both resources serve veterans. Together, we're stronger.
                        </p>
                        <a
                            href="https://portal.ie.theutilityfoundation.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 rounded-full bg-[#A855F7] text-black font-bold hover:bg-[#7E22CE] transition-colors"
                        >
                            Join Invisible Enemies
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
