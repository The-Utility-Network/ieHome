import Link from 'next/link';
import { Metadata } from 'next';
import { LOCATIONS } from '@/data/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WorldMap from '@/components/WorldMap';

export const metadata: Metadata = {
    title: 'Locations | Invisible Enemies',
    description: 'Military bases and sites of toxic exposure affecting veterans across the United States.',
};

export default function LocationsPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar themeColor="#A855F7" />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-xs font-mono tracking-widest text-[#A855F7]">ACROSS AMERICA</span>
                    <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">Locations</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Military bases and sites where veterans were exposed to toxic hazards. Each location represents thousands of lives affected by invisible enemies.
                    </p>
                </div>
            </section>

            {/* Map */}
            <section className="pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <WorldMap />
                </div>
            </section>

            {/* Locations Grid */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {LOCATIONS.map((location) => (
                            <Link
                                key={location.slug}
                                href={`/locations/${location.slug}`}
                                className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <span className="text-xs font-mono text-[#A855F7]">{location.code}</span>
                                        <h2 className="text-xl font-bold text-white group-hover:text-[#A855F7] transition-colors">
                                            {location.city}
                                        </h2>
                                        <p className="text-sm text-gray-500">{location.state}</p>
                                    </div>
                                    <span className="px-2 py-1 rounded-full bg-[#A855F7]/10 text-[#A855F7] text-xs">
                                        {location.keyFocus}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm line-clamp-3">
                                    {location.description}
                                </p>
                                <div className="mt-4 text-xs font-mono text-[#A855F7] group-hover:tracking-wide transition-all">
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
