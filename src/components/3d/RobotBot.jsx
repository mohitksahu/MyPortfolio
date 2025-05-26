import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Robot component with head that follows cursor
function Bot() {
    const headRef = useRef();
    const bodyRef = useRef();
    const { mouse } = useThree();

    // Animation for the robot
    useFrame(({ clock }) => {
        if (headRef.current) {
            // Follow mouse movement
            const x = (mouse.x * Math.PI) / 4;
            const y = (mouse.y * Math.PI) / 4;

            // Smooth head rotation
            headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, x, 0.1);
            headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -y, 0.1);

            // Gentle bobbing motion for the body
            if (bodyRef.current) {
                const time = clock.getElapsedTime();
                bodyRef.current.position.y = Math.sin(time) * 0.05;
            }
        }
    });

    return (
        <group position={[0, 0, 0]} scale={1.2}> {/* Scaled up and centered */}
            {/* Body (static) */}
            <mesh ref={bodyRef} position={[0, 0, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
                <meshStandardMaterial
                    color="#c778dd"
                    metalness={0.3}
                    roughness={0.7}
                    emissive="#c778dd"
                    emissiveIntensity={0.2}
                />
            </mesh>

            {/* Head (rotates with mouse) */}
            <mesh ref={headRef} position={[0, 1, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial
                    color="#282c33"
                    metalness={0.2}
                    roughness={0.8}
                    emissive="#444"
                    emissiveIntensity={0.1}
                />
            </mesh>

            {/* Eyes */}
            <mesh position={[0.2, 1, 0.4]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color="#abb2bf" emissive="#abb2bf" emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[-0.2, 1, 0.4]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color="#abb2bf" emissive="#abb2bf" emissiveIntensity={0.5} />
            </mesh>

            {/* Antenna */}
            <mesh position={[0, 1.35, 0]} rotation={[0.2, 0, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
                <meshStandardMaterial color="#abb2bf" />
                <mesh position={[0, 0.2, 0]}>
                    <sphereGeometry args={[0.04, 8, 8]} />
                    <meshStandardMaterial color="#c778dd" emissive="#c778dd" emissiveIntensity={0.5} />
                </mesh>
            </mesh>

            {/* Arms */}
            <mesh position={[0.7, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <cylinderGeometry args={[0.08, 0.08, 0.8, 16]} />
                <meshStandardMaterial color="#c778dd" />
            </mesh>
            <mesh position={[-0.7, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
                <cylinderGeometry args={[0.08, 0.08, 0.8, 16]} />
                <meshStandardMaterial color="#c778dd" />
            </mesh>
        </group>
    );
}

// ThreeJS Scene Component
function RobotScene() {
    return (
        <>
            {/* Basic lights */}
            <ambientLight intensity={0.8} />
            <directionalLight position={[0, 10, 5]} intensity={1.2} />
            <pointLight position={[0, 0, 5]} color="#ffffff" intensity={0.5} />
            
            {/* Robot model */}
            <Bot />
            
            {/* Camera controls */}
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.5}
            />
        </>
    );
}

// Main component export
const RobotBot = ({ className }) => {
    const [hasError, setHasError] = useState(false);
    const [mounted, setMounted] = useState(false);
    
    // Mark component as mounted after a brief delay to ensure DOM is ready
    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
            console.log("RobotBot: Component mounted and ready for rendering");
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);
    
    // Error boundary
    if (hasError) {
        console.log("RobotBot: Rendering fallback due to error");
        return (
            <div className={`${className} flex items-center justify-center bg-[#282c33]`}>
                <div className="text-center">
                    <div className="text-[#c778dd] font-bold mb-2">3D Robot</div>
                    <div className="text-[#abb2bf] text-sm">Interactive element</div>
                </div>
            </div>
        );
    }
    
    // Main render
    try {
        console.log("RobotBot: Attempting to render 3D scene");
        return (
            <div 
                className={className} 
                style={{ 
                    backgroundColor: '#282c33', 
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden'
                }}
                id="robot-container"
            >
                {/* Debug info */}
                <div 
                    style={{
                        position: 'absolute',
                        top: 5,
                        left: 5,
                        zIndex: 100,
                        color: '#c778dd',
                        fontSize: '10px',
                        padding: '2px 4px',
                        backgroundColor: 'rgba(40, 44, 51, 0.5)',
                        borderRadius: '2px',
                        pointerEvents: 'none'
                    }}
                >
                    3D Robot {mounted ? '✓' : '...'}
                </div>
                
                {/* Canvas for Three.js */}
                <Canvas
                    camera={{ 
                        position: [0, 0.5, 4], 
                        fov: 50,
                        near: 0.1,
                        far: 1000
                    }}
                    dpr={[1, 2]}
                    gl={{
                        antialias: true,
                        alpha: false,
                        powerPreference: 'default',
                        failIfMajorPerformanceCaveat: false
                    }}
                    style={{ 
                        width: '100%', 
                        height: '100%'
                    }}
                >
                    <color attach="background" args={['#282c33']} />
                    <RobotScene />
                </Canvas>
            </div>
        );
    } catch (error) {
        console.error('Error rendering 3D robot:', error);
        setHasError(true);
        return (
            <div className={`${className} flex items-center justify-center bg-[#282c33]`}>
                <div className="text-center">
                    <div className="text-[#c778dd] font-bold mb-2">3D Robot</div>
                    <div className="text-[#abb2bf] text-sm">Interactive element</div>
                </div>
            </div>
        );
    }
};

export default RobotBot;
