"use client";

import { motion } from "framer-motion";

export function RobotHumanHands() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 overflow-hidden">
            <svg
                width="800"
                height="400"
                viewBox="0 0 800 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full max-w-4xl"
            >
                {/* Human Hand (Black Silhouette - Left Side) */}
                <motion.g
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    {/* Palm */}
                    <path
                        d="M 150 200 Q 180 180 200 200 L 200 280 Q 190 300 170 300 Q 150 300 140 280 Z"
                        fill="#000000"
                    />
                    {/* Thumb */}
                    <path
                        d="M 150 220 Q 130 210 120 230 Q 115 245 125 255 Q 135 260 145 250 Z"
                        fill="#000000"
                    />
                    {/* Index Finger */}
                    <motion.path
                        d="M 175 200 L 180 140 Q 182 125 190 125 Q 198 125 200 140 L 195 200 Z"
                        fill="#000000"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* Middle Finger */}
                    <path
                        d="M 185 200 L 190 130 Q 192 115 200 115 Q 208 115 210 130 L 205 200 Z"
                        fill="#000000"
                    />
                    {/* Ring Finger */}
                    <path
                        d="M 195 200 L 200 140 Q 202 125 210 125 Q 218 125 220 140 L 215 200 Z"
                        fill="#000000"
                    />
                    {/* Pinky */}
                    <path
                        d="M 205 200 L 210 155 Q 212 142 218 142 Q 224 142 226 155 L 222 200 Z"
                        fill="#000000"
                    />
                    {/* Wrist */}
                    <rect x="140" y="300" width="60" height="40" rx="5" fill="#000000" />
                </motion.g>

                {/* Robot Hand (Mechanical - Right Side) */}
                <motion.g
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    {/* Palm Base */}
                    <rect x="600" y="200" width="60" height="100" rx="8" fill="none" stroke="#007AFF" strokeWidth="3" />

                    {/* Palm Circuit Lines */}
                    <line x1="610" y1="220" x2="650" y2="220" stroke="#007AFF" strokeWidth="1" opacity="0.6" />
                    <line x1="610" y1="240" x2="650" y2="240" stroke="#007AFF" strokeWidth="1" opacity="0.6" />
                    <line x1="610" y1="260" x2="650" y2="260" stroke="#007AFF" strokeWidth="1" opacity="0.6" />

                    {/* Thumb Joint */}
                    <circle cx="595" cy="230" r="6" fill="none" stroke="#007AFF" strokeWidth="2" />
                    <rect x="570" y="225" width="25" height="35" rx="4" fill="none" stroke="#007AFF" strokeWidth="2" />
                    <line x1="575" y1="235" x2="590" y2="235" stroke="#007AFF" strokeWidth="1" />

                    {/* Index Finger */}
                    <motion.g
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    >
                        <circle cx="615" cy="195" r="5" fill="none" stroke="#007AFF" strokeWidth="2" />
                        <rect x="610" y="140" width="10" height="55" rx="3" fill="none" stroke="#007AFF" strokeWidth="2" />
                        <line x1="615" y1="155" x2="615" y2="180" stroke="#007AFF" strokeWidth="1" />
                        <circle cx="615" cy="167" r="3" fill="#007AFF" />
                    </motion.g>

                    {/* Middle Finger */}
                    <circle cx="630" cy="195" r="5" fill="none" stroke="#007AFF" strokeWidth="2" />
                    <rect x="625" y="130" width="10" height="65" rx="3" fill="none" stroke="#007AFF" strokeWidth="2" />
                    <line x1="630" y1="145" x2="630" y2="180" stroke="#007AFF" strokeWidth="1" />
                    <circle cx="630" cy="160" r="3" fill="#007AFF" />

                    {/* Ring Finger */}
                    <circle cx="645" cy="195" r="5" fill="none" stroke="#007AFF" strokeWidth="2" />
                    <rect x="640" y="140" width="10" height="55" rx="3" fill="none" stroke="#007AFF" strokeWidth="2" />
                    <line x1="645" y1="155" x2="645" y2="180" stroke="#007AFF" strokeWidth="1" />
                    <circle cx="645" cy="167" r="3" fill="#007AFF" />

                    {/* Pinky */}
                    <circle cx="660" cy="195" r="5" fill="none" stroke="#007AFF" strokeWidth="2" />
                    <rect x="655" y="155" width="10" height="40" rx="3" fill="none" stroke="#007AFF" strokeWidth="2" />
                    <line x1="660" y1="165" x2="660" y2="185" stroke="#007AFF" strokeWidth="1" />

                    {/* Wrist/Arm */}
                    <rect x="600" y="300" width="60" height="40" rx="6" fill="none" stroke="#007AFF" strokeWidth="3" />
                    <line x1="610" y1="310" x2="650" y2="310" stroke="#007AFF" strokeWidth="1" opacity="0.6" />
                    <line x1="610" y1="320" x2="650" y2="320" stroke="#007AFF" strokeWidth="1" opacity="0.6" />
                    <line x1="610" y1="330" x2="650" y2="330" stroke="#007AFF" strokeWidth="1" opacity="0.6" />

                    {/* Circuit Nodes */}
                    <circle cx="610" cy="310" r="2" fill="#007AFF" />
                    <circle cx="630" cy="320" r="2" fill="#007AFF" />
                    <circle cx="650" cy="330" r="2" fill="#007AFF" />
                </motion.g>

                {/* Connection Spark/Energy */}
                <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <circle cx="400" cy="200" r="8" fill="#007AFF" opacity="0.3" />
                    <circle cx="400" cy="200" r="4" fill="#007AFF" opacity="0.6" />
                    <circle cx="400" cy="200" r="2" fill="#FFFFFF" />
                </motion.g>

                {/* Connecting Lines */}
                <motion.line
                    x1="226"
                    y1="140"
                    x2="610"
                    y2="140"
                    stroke="#007AFF"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    opacity="0.2"
                    animate={{ strokeDashoffset: [0, -10] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
            </svg>
        </div>
    );
}
