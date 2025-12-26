'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import About from '@/components/About';
import Features from '@/components/Features';
import SeoLinks from '@/components/SeoLinks';
import Footer from '@/components/Footer';

// Dynamic import for client-only canvas component
const AlienBackground = dynamic(
  () => import('@/components/AlienBackground'),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden selection:bg-[#A855F7] selection:text-white">
      {/* Animated Geometric Overlay (fixed across entire viewport) */}
      <AlienBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Pillars />
        <About />
        <Features />
        <SeoLinks />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
