'use client';

import Image from 'next/image';

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Hero Image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-image.png"
                    alt="Alien Landscape"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                />
            </div>

            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_60%,rgba(0,0,0,0.7)_100%)]" />
        </div>
    );
}
