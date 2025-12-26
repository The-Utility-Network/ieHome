import Link from 'next/link';
import { Metadata } from 'next';
import { COMPARISONS } from '@/data/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Resources | Invisible Enemies',
    description: 'See how Invisible Enemies complements other veteran resources and support organizations.',
};

const categoryColors: Record<string, string> = {
    Government: '#3B82F6',
    Nonprofit: '#10B981',
    Advocacy: '#F59E0B',
    Healthcare: '#EF4444',
};

export default function ComparisonsPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar themeColor="#A855F7" />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-xs font-mono tracking-widest text-[#A855F7]">VETERAN RESOURCES</span>
                    <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">Resources</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Understand how Invisible Enemies complements and enhances existing veteran support resources through blockchain-powered transparency.
                    </p>
                </div>
            </section>

            {/* Comparisons Grid */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6">
                        {COMPARISONS.map((comparison) => (
                            <Link
                                key={comparison.slug}
                                href={`/comparisons/${comparison.slug}`}
                                className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <h2 className="text-xl font-bold text-white group-hover:text-[#A855F7] transition-colors">
                                        {comparison.resource}
                                    </h2>
                                    <span
                                        className="px-2 py-1 rounded-full text-xs"
                                        style={{
                                            backgroundColor: `${categoryColors[comparison.category]}20`,
                                            color: categoryColors[comparison.category],
                                        }}
                                    >
                                        {comparison.category}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {comparison.description}
                                </p>
                                <p className="text-gray-300 text-sm line-clamp-2">
                                    <span className="text-[#A855F7] font-semibold">IE Advantage:</span> {comparison.ieAdvantage}
                                </p>
                                <div className="mt-4 text-xs font-mono text-[#A855F7] group-hover:tracking-wide transition-all">
                                    READ FULL COMPARISON →
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
