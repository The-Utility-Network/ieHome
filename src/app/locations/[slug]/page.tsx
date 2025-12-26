import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { LOCATIONS, SEOLocation } from '@/data/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return LOCATIONS.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const location = LOCATIONS.find((l) => l.slug === slug);
    if (!location) return { title: 'Location Not Found' };
    return {
        title: `${location.city} | Invisible Enemies`,
        description: location.description,
    };
}

export default async function LocationPage({ params }: Props) {
    const { slug } = await params;
    const location = LOCATIONS.find((l) => l.slug === slug);
    if (!location) notFound();

    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar themeColor="#A855F7" />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href="/locations" className="text-sm text-[#A855F7] hover:underline mb-4 inline-block">
                        ← Back to Locations
                    </Link>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl font-mono text-[#A855F7]">{location.code}</span>
                        <span className="px-3 py-1 rounded-full bg-[#A855F7]/10 text-[#A855F7] text-sm">
                            {location.keyFocus}
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black mb-2">{location.city}</h1>
                    <p className="text-xl text-gray-400">{location.state} • {location.region}</p>
                </div>
            </section>

            {/* Content */}
            <section className="pb-24 px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="glass-panel p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-[#A855F7] mb-4">Overview</h2>
                        <p className="text-gray-300 leading-relaxed">{location.description}</p>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-[#A855F7] mb-4">Base Information</h2>
                        <p className="text-gray-300 leading-relaxed">{location.baseInfo}</p>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-[#A855F7] mb-4">Veteran Population</h2>
                        <p className="text-gray-300 leading-relaxed">{location.veteranPopulation}</p>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-red-400 mb-4">Toxic Exposure History</h2>
                        <p className="text-gray-300 leading-relaxed">{location.toxicExposureHistory}</p>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-[#A855F7] mb-4">Local Resources</h2>
                        <ul className="space-y-2">
                            {location.localResources.map((resource, i) => (
                                <li key={i} className="text-gray-300 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                                    {resource}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="text-center pt-8">
                        <a
                            href="https://portal.ie.theutilityfoundation.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 rounded-full bg-[#A855F7] text-black font-bold hover:bg-[#7E22CE] transition-colors"
                        >
                            Join the Fight
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
