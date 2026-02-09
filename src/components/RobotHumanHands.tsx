"use client";

import { motion } from "framer-motion";

export function RobotHumanHands() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1400 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full opacity-40 xl:opacity-50"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id="human-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="robot-gradient" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Human Hand (Abstract Flowing Lines) - Left */}
                <motion.g
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                >
                    {/* Artistic representation of a hand reaching out */}
                    <path
                        d="M 200 800 C 250 600, 400 500, 550 450 C 600 435, 620 420, 650 420"
                        stroke="url(#human-gradient)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                    />
                    <path
                        d="M 220 800 C 270 620, 420 520, 560 480 C 610 465, 640 460, 680 440"
                        stroke="url(#human-gradient)"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        opacity="0.6"
                    />
                    <path
                        d="M 180 800 C 230 580, 380 480, 520 420 C 560 405, 580 390, 620 380"
                        stroke="url(#human-gradient)"
                        strokeWidth="1"
                        fill="none"
                        strokeLinecap="round"
                        opacity="0.4"
                    />

                    {/* Fingertip Glow */}
                    <circle cx="650" cy="420" r="4" fill="var(--foreground)" opacity="0.8" />
                </motion.g>

                {/* Robot Hand (Geometric/Circuit Lines) - Right */}
                <motion.g
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                >
                    {/* Main arm structure */}
                    <path
                        d="M 1200 800 L 1000 600 L 850 450 L 750 420"
                        stroke="url(#robot-gradient)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                    />

                    {/* Circuit details */}
                    <circle cx="1000" cy="600" r="6" fill="var(--background)" stroke="var(--accent)" strokeWidth="2" />
                    <circle cx="850" cy="450" r="4" fill="var(--background)" stroke="var(--accent)" strokeWidth="2" />

                    {/* Parallel data lines */}
                    <path
                        d="M 1220 800 L 1020 600 L 870 450 L 770 420"
                        stroke="url(#robot-gradient)"
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray="4 4"
                        opacity="0.6"
                    />
                    <path
                        d="M 1180 800 L 980 600 L 830 450 L 730 420"
                        stroke="url(#robot-gradient)"
                        strokeWidth="1"
                        fill="none"
                        opacity="0.4"
                    />

                    {/* Fingertip Node */}
                    <circle cx="750" cy="420" r="4" fill="var(--accent)" filter="url(#glow)" />
                </motion.g>

                {/* Connection Energy (The Spark) */}
                <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0.5, 1], scale: [0.5, 1.5, 1, 1.2] }}
                    transition={{ duration: 3, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
                >
                    {/* Central spark */}
                    <circle cx="700" cy="420" r="2" fill="var(--accent)" filter="url(#glow)" />

                    {/* Connecting line */}
                    <motion.line
                        x1="650" y1="420" x2="750" y2="420"
                        stroke="var(--accent)"
                        strokeWidth="1"
                        opacity="0.5"
                        strokeDasharray="2 4"
                        animate={{ strokeDashoffset: [0, -20] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                </motion.g>

                {/* Floating Particles (Data/Dust) */}
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.circle
                        key={i}
                        cx={600 + Math.random() * 200}
                        cy={350 + Math.random() * 150}
                        r={Math.random() * 2}
                        fill={i % 2 === 0 ? "var(--foreground)" : "var(--accent)"}
                        opacity={Math.random() * 0.5}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

