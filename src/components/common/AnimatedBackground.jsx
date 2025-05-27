import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingShape = ({ shape, delay, duration, size, color, initialPosition, finalPosition }) => {
    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{
                width: size,
                height: size,
                backgroundColor: shape === 'circle' ? color : 'transparent',
                borderRadius: shape === 'circle' ? '50%' : '0',
                border: shape === 'square' ? `2px solid ${color}` : 'none',
                opacity: 0.5,
                top: initialPosition.top,
                left: initialPosition.left,
                zIndex: 0,
            }}
            initial={{ opacity: 0, ...initialPosition }}
            animate={{
                opacity: [0.1, 0.3, 0.1],
                ...finalPosition,
                rotate: shape === 'square' ? [0, 180] : [0, 0],
            }}
            transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: duration,
                delay: delay,
                ease: 'easeInOut',
            }}
        />
    );
};

const AnimatedBackground = ({ className, density = 'medium' }) => {
    const [shapes, setShapes] = useState([]);
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
        height: typeof window !== 'undefined' ? window.innerHeight : 800,
    });

    // Determine number of shapes based on density
    const getShapeCount = () => {
        switch (density) {
            case 'low': return 6;
            case 'high': return 14;
            default: return 10; // medium
        }
    };

    useEffect(() => {
        // Update window dimensions when resized
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const shapeCount = getShapeCount();
        const colors = ['#c778dd', '#abb2bf', '#282c33', '#c778dd', '#abb2bf'];
        const shapes = ['circle', 'square'];
        const newShapes = [];

        for (let i = 0; i < shapeCount; i++) {
            const size = Math.floor(Math.random() * 40) + 10;
            const initialTop = Math.floor(Math.random() * windowSize.height);
            const initialLeft = Math.floor(Math.random() * windowSize.width);

            newShapes.push({
                id: i,
                shape: shapes[Math.floor(Math.random() * shapes.length)],
                delay: Math.random() * 2,
                duration: Math.random() * 10 + 15,
                size: size,
                color: colors[Math.floor(Math.random() * colors.length)],
                initialPosition: {
                    top: initialTop,
                    left: initialLeft,
                },
                finalPosition: {
                    top: [initialTop, initialTop + (Math.random() * 100 - 50)],
                    left: [initialLeft, initialLeft + (Math.random() * 100 - 50)],
                }
            });
        }

        setShapes(newShapes);
    }, [windowSize, density]);

    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
            {shapes.map((shape) => (
                <FloatingShape key={shape.id} {...shape} />
            ))}
        </div>
    );
};

export default AnimatedBackground;
