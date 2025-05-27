import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

// Component that reveals its children when scrolled into view
const RevealOnScroll = ({ children, direction = "bottom", delay = 0, className = "" }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const controls = useAnimation();

    // Generate different animation variants based on the direction prop
    const getVariants = () => {
        switch (direction) {
            case "left":
                return {
                    hidden: { x: -100, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay, ease: "easeOut" } }
                };
            case "right":
                return {
                    hidden: { x: 100, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay, ease: "easeOut" } }
                };
            case "top":
                return {
                    hidden: { y: -100, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay, ease: "easeOut" } }
                };
            default: // bottom
                return {
                    hidden: { y: 100, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay, ease: "easeOut" } }
                };
        }
    };

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={getVariants()}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Wrapper component for parallax scroll effect
const ParallaxSection = ({ children, speed = 0.5, className = "" }) => {
    const [scrollY, setScrollY] = React.useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            className={`relative ${className}`}
            style={{
                y: scrollY * speed,
                transition: "transform 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67)"
            }}
        >
            {children}
        </motion.div>
    );
};

// Floating element that gently bobs up and down
const FloatingElement = ({ children, amount = 15, duration = 3, delay = 0, className = "" }) => {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -amount, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    );
};

// Text that types itself out
const TypewriterText = ({ text, delay = 0, speed = 0.05, className = "" }) => {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: speed,
                delayChildren: delay,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 5 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { ease: "easeOut" }
        },
    };

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className={`inline-block ${className}`}
        >
            {Array.from(text).map((letter, i) => (
                <motion.span key={i} variants={letterVariants} className="inline-block">
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

export {
    RevealOnScroll,
    ParallaxSection,
    FloatingElement,
    TypewriterText,
};
