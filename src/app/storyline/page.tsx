'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { STORY_CHAPTERS, StoryChapter } from '@/data/storyline';

// Default theme color
const DEFAULT_COLOR = '#A855F7';

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

// Table of Contents Component
function TableOfContents({
    chapters,
    activeChapter,
    onChapterClick
}: {
    chapters: StoryChapter[],
    activeChapter: string,
    onChapterClick: (id: string) => void
}) {
    return (
        <nav className="space-y-2">
            <div className="text-xs font-mono tracking-widest uppercase mb-4 text-gray-400">
                The Storyline
            </div>
            {chapters.map((chapter) => (
                <button
                    key={chapter.id}
                    onClick={() => onChapterClick(chapter.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 group ${activeChapter === chapter.id
                        ? 'bg-white/10 border-l-2 border-[#A855F7]'
                        : 'hover:bg-white/5'
                        }`}
                >
                    <div className="flex items-baseline gap-3">
                        <span
                            className={`text-xs font-mono ${activeChapter === chapter.id ? 'opacity-100 text-[#A855F7]' : 'opacity-50 text-gray-500'
                                }`}
                        >
                            {chapter.number}
                        </span>
                        <span className={`text-sm font-medium transition-colors ${activeChapter === chapter.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
                            }`}>
                            {chapter.title}
                        </span>
                    </div>
                </button>
            ))}
        </nav>
    );
}

// Content Renderer
function renderContent(text: string) {
    // Replace **bold** with styled spans
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            const inner = part.slice(2, -2);
            return <strong key={i} className="text-white font-semibold">{inner}</strong>;
        }
        // Handle italics *text*
        if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
            const inner = part.slice(1, -1);
            return <em key={i} className="text-gray-400 italic">{inner}</em>;
        }
        // Handle markdown links [text](url)
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const withLinks = part.split(linkRegex);
        if (withLinks.length > 1) {
            const elements = [];
            for (let j = 0; j < withLinks.length; j += 3) {
                elements.push(withLinks[j]);
                if (withLinks[j + 1] && withLinks[j + 2]) {
                    elements.push(
                        <a
                            key={`link-${i}-${j}`}
                            href={withLinks[j + 2]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#A855F7] hover:underline"
                        >
                            {withLinks[j + 1]}
                        </a>
                    );
                }
            }
            return <span key={i}>{elements}</span>;
        }
        return part;
    });
}

// Chapter Component
function ChapterSection({ chapter, index }: { chapter: StoryChapter, index: number }) {
    return (
        <motion.section
            id={chapter.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="scroll-mt-32 mb-24"
        >
            <motion.div variants={fadeInUp} className="mb-8">
                {/* Chapter Number */}
                <div
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#A855F7]/40 text-[#A855F7] mb-6"
                >
                    <span className="font-mono text-sm tracking-widest">CHAPTER {chapter.number}</span>
                </div>

                {/* Title */}
                <h2
                    className="text-4xl md:text-5xl font-black tracking-tight mb-4"
                    style={{
                        background: `linear-gradient(135deg, #A855F7, white)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    {chapter.title}
                </h2>
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeInUp} className="prose prose-invert prose-lg max-w-none">
                {chapter.content.map((paragraph, i) => (
                    <p
                        key={i}
                        className="text-gray-300 leading-relaxed mb-6 text-lg"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        {renderContent(paragraph)}
                    </p>
                ))}
            </motion.div>

            {/* Chapter Divider */}
            {index < STORY_CHAPTERS.length - 1 && (
                <div className="flex items-center justify-center gap-4 py-16">
                    <div className="w-24 h-px bg-[#A855F7]/30" />
                    <div className="w-3 h-3 rounded-full bg-[#A855F7]" />
                    <div className="w-24 h-px bg-[#A855F7]/30" />
                </div>
            )}
        </motion.section>
    );
}

export default function StorylinePage() {
    const [activeChapter, setActiveChapter] = useState(STORY_CHAPTERS[0]?.id || 'prologue');
    const [showToc, setShowToc] = useState(false);
    const mainRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: mainRef,
        offset: ["start start", "end end"]
    });

    const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    // Update active chapter based on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveChapter(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px' }
        );

        STORY_CHAPTERS.forEach((chapter) => {
            const element = document.getElementById(chapter.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToChapter = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setShowToc(false);
        }
    };

    return (
        <main
            ref={mainRef}
            className="bg-black text-white min-h-screen relative font-sans selection:bg-[#A855F7] selection:text-white"
        >
            <Navbar themeColor={DEFAULT_COLOR} />

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 h-1 z-50 bg-[#A855F7]"
                style={{ width: progressWidth }}
            />

            {/* Mobile TOC Toggle */}
            <button
                onClick={() => setShowToc(!showToc)}
                className="fixed bottom-8 right-8 z-40 lg:hidden w-14 h-14 rounded-full shadow-2xl flex items-center justify-center bg-[#A855F7]"
            >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Mobile TOC Drawer */}
            {showToc && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-40 lg:hidden"
                >
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowToc(false)} />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        className="absolute right-0 top-0 h-full w-80 bg-black/95 border-l border-white/10 p-6 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-lg font-bold">Chapters</h3>
                            <button onClick={() => setShowToc(false)} className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <TableOfContents
                            chapters={STORY_CHAPTERS}
                            activeChapter={activeChapter}
                            onChapterClick={scrollToChapter}
                        />
                    </motion.div>
                </motion.div>
            )}

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#A855F7]/10 via-black to-black" />
                    {/* Starfield effect */}
                    <div className="absolute inset-0 opacity-30">
                        {[...Array(50)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${2 + Math.random() * 3}s`
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div
                            className="inline-block px-6 py-3 rounded-full border border-[#A855F7] text-[#A855F7] text-sm font-mono tracking-widest uppercase mb-8"
                        >
                            The Official Narrative
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
                    >
                        THE
                        <br />
                        <span
                            style={{
                                background: `linear-gradient(135deg, #A855F7, #D8B4FE, #7E22CE)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            STORYLINE
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light italic"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        The epic tale of the Zeta Reticulans and humanity's fight against the invisible enemies
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <button
                            onClick={() => scrollToChapter(STORY_CHAPTERS[0]?.id || 'prologue')}
                            className="px-10 py-5 rounded-full font-bold text-black bg-[#A855F7] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            style={{ boxShadow: `0 0 40px rgba(168,85,247,0.4)` }}
                        >
                            BEGIN THE JOURNEY
                        </button>
                        <div className="text-sm text-gray-500 font-mono">
                            {STORY_CHAPTERS.length} Chapters
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Layout */}
            <div className="relative">
                <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                    <div className="flex gap-16 items-start">
                        {/* Sticky Sidebar - Desktop */}
                        <aside className="hidden lg:block w-80 shrink-0 sticky top-32">
                            <div className="max-h-[calc(100vh-10rem)] overflow-y-auto pr-4">
                                <TableOfContents
                                    chapters={STORY_CHAPTERS}
                                    activeChapter={activeChapter}
                                    onChapterClick={scrollToChapter}
                                />

                                {/* Current chapter indicator */}
                                <div className="mt-8 p-4 rounded-xl border border-[#A855F7]/30">
                                    <div className="text-xs font-mono text-gray-500 mb-2">NOW READING</div>
                                    <div className="font-bold text-[#A855F7]">
                                        {STORY_CHAPTERS.find(c => c.id === activeChapter)?.title || 'The Prologue'}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <article className="flex-1 max-w-3xl">
                            {/* Epigraph */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="mb-24 text-center"
                            >
                                <blockquote
                                    className="text-2xl font-light italic leading-relaxed text-gray-400 mb-6"
                                    style={{ fontFamily: 'Georgia, serif' }}
                                >
                                    "It is time to step up and fight. These Invisible Enemies are getting out of hand and are wreaking havoc on humanity."
                                </blockquote>
                                <cite className="text-sm font-mono tracking-widest text-[#A855F7]">
                                    — THE ZETA RETICULANS
                                </cite>
                            </motion.div>

                            {/* Chapters */}
                            {STORY_CHAPTERS.map((chapter, index) => (
                                <ChapterSection key={chapter.id} chapter={chapter} index={index} />
                            ))}

                            {/* Colophon */}
                            <motion.section
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="mt-32 pt-16 border-t border-white/10 text-center"
                            >
                                <div
                                    className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center bg-[#A855F7]/20"
                                >
                                    <span className="text-4xl">👾</span>
                                </div>
                                <p className="text-gray-500 text-sm font-mono mb-4">
                                    The story continues...
                                </p>
                                <h3 className="text-3xl font-bold mb-6">Join the Resistance</h3>
                                <p className="text-gray-400 max-w-lg mx-auto leading-relaxed mb-8">
                                    Every holder of an Invisible Enemies NFT becomes a part of this narrative, with the power to shape its future through the community DAO.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <a
                                        href="https://portal.ie.theutilityfoundation.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#A855F7] text-black font-bold transition-all duration-300 hover:scale-105"
                                    >
                                        <span>Mint Your Commander</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                    <a
                                        href="/"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#A855F7] text-[#A855F7] transition-all duration-300 hover:bg-white/5"
                                    >
                                        <span>Return Home</span>
                                    </a>
                                </div>
                            </motion.section>
                        </article>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
