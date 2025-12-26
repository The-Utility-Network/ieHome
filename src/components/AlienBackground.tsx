'use client';

import { useEffect, useRef } from 'react';

interface AlienBackgroundProps {
    className?: string;
}

export default function AlienBackground({ className = '' }: AlienBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        let time = 0;

        // Set canvas size
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Alien geometric patterns
        interface Hexagon {
            x: number;
            y: number;
            size: number;
            rotation: number;
            rotationSpeed: number;
            opacity: number;
            pulseOffset: number;
        }

        interface FloatingOrb {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;
        }

        interface SacredLine {
            x1: number;
            y1: number;
            x2: number;
            y2: number;
            opacity: number;
            phase: number;
        }

        // Generate hexagons
        const hexagons: Hexagon[] = [];
        for (let i = 0; i < 20; i++) {
            hexagons.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: 40 + Math.random() * 100,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.008,
                opacity: 0.05 + Math.random() * 0.15,
                pulseOffset: Math.random() * Math.PI * 2,
            });
        }

        // Generate floating orbs
        const orbs: FloatingOrb[] = [];
        for (let i = 0; i < 50; i++) {
            orbs.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: 2 + Math.random() * 5,
                opacity: 0.4 + Math.random() * 0.6,
            });
        }

        // Generate sacred geometry lines
        const lines: SacredLine[] = [];
        for (let i = 0; i < 30; i++) {
            lines.push({
                x1: Math.random() * window.innerWidth,
                y1: Math.random() * window.innerHeight,
                x2: Math.random() * window.innerWidth,
                y2: Math.random() * window.innerHeight,
                opacity: 0.03 + Math.random() * 0.08,
                phase: Math.random() * Math.PI * 2,
            });
        }

        // Draw hexagon
        const drawHexagon = (x: number, y: number, size: number, rotation: number, opacity: number) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const px = Math.cos(angle) * size;
                const py = Math.sin(angle) * size;
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.restore();
        };

        // Draw concentric circles
        const drawConcentricCircles = (x: number, y: number, maxRadius: number, opacity: number) => {
            for (let r = 20; r < maxRadius; r += 20) {
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(168, 85, 247, ${opacity * (1 - r / maxRadius)})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        };

        // Animation loop
        const animate = () => {
            time += 0.016;

            // Clear canvas with transparency (no fill to allow hero image through)
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw sacred geometry lines
            lines.forEach((line) => {
                const pulse = Math.sin(time * 0.5 + line.phase) * 0.5 + 0.5;
                ctx.beginPath();
                ctx.moveTo(line.x1, line.y1);
                ctx.lineTo(line.x2, line.y2);
                ctx.strokeStyle = `rgba(168, 85, 247, ${line.opacity * pulse})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            });

            // Draw and animate hexagons
            hexagons.forEach((hex) => {
                hex.rotation += hex.rotationSpeed;
                const pulse = Math.sin(time + hex.pulseOffset) * 0.3 + 0.7;
                drawHexagon(hex.x, hex.y, hex.size * pulse, hex.rotation, hex.opacity);

                // Inner hexagon
                drawHexagon(hex.x, hex.y, hex.size * 0.5 * pulse, -hex.rotation * 0.7, hex.opacity * 0.6);
            });

            // Draw central sacred geometry
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const centralPulse = Math.sin(time * 0.3) * 0.2 + 0.8;
            drawConcentricCircles(centerX, centerY, 400 * centralPulse, 0.06);

            // Draw and animate orbs
            orbs.forEach((orb) => {
                orb.x += orb.vx;
                orb.y += orb.vy;

                // Wrap around edges
                if (orb.x < 0) orb.x = canvas.width;
                if (orb.x > canvas.width) orb.x = 0;
                if (orb.y < 0) orb.y = canvas.height;
                if (orb.y > canvas.height) orb.y = 0;

                // Draw orb with glow
                const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.size * 4);
                gradient.addColorStop(0, `rgba(168, 85, 247, ${orb.opacity})`);
                gradient.addColorStop(0.4, `rgba(168, 85, 247, ${orb.opacity * 0.4})`);
                gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');

                ctx.beginPath();
                ctx.arc(orb.x, orb.y, orb.size * 4, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Bright core
                ctx.beginPath();
                ctx.arc(orb.x, orb.y, orb.size * 0.6, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${orb.opacity * 0.8})`;
                ctx.fill();
            });

            // Draw connecting lines between nearby orbs
            orbs.forEach((orb, i) => {
                orbs.slice(i + 1).forEach((other) => {
                    const dx = other.x - orb.x;
                    const dy = other.y - orb.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 180) {
                        ctx.beginPath();
                        ctx.moveTo(orb.x, orb.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - dist / 180)})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                });
            });

            // Draw triangular sacred geometry pattern
            const triangleSize = 250 + Math.sin(time * 0.2) * 40;
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(time * 0.03);
            ctx.beginPath();
            for (let i = 0; i < 3; i++) {
                const angle = (Math.PI * 2 / 3) * i - Math.PI / 2;
                const x = Math.cos(angle) * triangleSize;
                const y = Math.sin(angle) * triangleSize;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.strokeStyle = 'rgba(168, 85, 247, 0.08)';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Inverted triangle
            ctx.rotate(Math.PI);
            ctx.beginPath();
            for (let i = 0; i < 3; i++) {
                const angle = (Math.PI * 2 / 3) * i - Math.PI / 2;
                const x = Math.cos(angle) * triangleSize * 0.6;
                const y = Math.sin(angle) * triangleSize * 0.6;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.strokeStyle = 'rgba(168, 85, 247, 0.05)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.restore();

            animationId = requestAnimationFrame(animate);
        };

        // Initial clear with transparency
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 pointer-events-none z-[5] ${className}`}
            style={{ background: 'transparent' }}
        />
    );
}
