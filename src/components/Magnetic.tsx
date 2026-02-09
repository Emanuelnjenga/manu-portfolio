"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface MagneticProps {
    children: ReactNode;
    strength?: number; // How far the element moves (default: 30)
}

export function Magnetic({ children, strength = 30 }: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null);
    const position = { x: useMotionValue(0), y: useMotionValue(0) };

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(position.x, springConfig);
    const springY = useSpring(position.y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();

        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        position.x.set(middleX * (strength / 100)); // Tune the strength
        position.y.set(middleY * (strength / 100));
    };

    const handleMouseLeave = () => {
        position.x.set(0);
        position.y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className="inline-block" // Ensure it doesn't break layout
        >
            {children}
        </motion.div>
    );
}
