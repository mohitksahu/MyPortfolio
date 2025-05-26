import React from 'react';

/**
 * A styled image component that creates a robot-like effect using CSS
 * as a complete fallback for Three.js when it's not working
 */
const RobotImage = ({ className }) => {
    return (
        <div className={className} style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Purple gradient background */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, #282c33 0%, #322742 100%)',
            }}></div>

            {/* Grid pattern */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(#c778dd 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.2
            }}></div>

            {/* Robot outline */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60%',
                height: '70%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Head */}
                <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    border: '3px solid #c778dd',
                    backgroundColor: '#282c33',
                    position: 'relative',
                    marginBottom: '20px'
                }}>
                    {/* Eyes */}
                    <div style={{
                        position: 'absolute',
                        top: '40px',
                        left: '30px',
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: '#abb2bf'
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        top: '40px',
                        right: '30px',
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: '#abb2bf'
                    }}></div>
                </div>

                {/* Body */}
                <div style={{
                    width: '140px',
                    height: '180px',
                    borderRadius: '20px',
                    backgroundColor: '#c778dd',
                    position: 'relative'
                }}>
                    {/* Control panel */}
                    <div style={{
                        position: 'absolute',
                        top: '30px',
                        left: '20px',
                        right: '20px',
                        height: '40px',
                        backgroundColor: '#282c33',
                        borderRadius: '5px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        padding: '0 10px'
                    }}>
                        {[...Array(3)].map((_, i) => (
                            <div key={i} style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: i === 0 ? '#ff5f56' : i === 1 ? '#ffbd2e' : '#27c93f',
                            }}></div>
                        ))}
                    </div>

                    {/* Arms */}
                    <div style={{
                        position: 'absolute',
                        top: '60px',
                        left: '-20px',
                        width: '20px',
                        height: '80px',
                        backgroundColor: '#c778dd',
                        borderRadius: '5px 0 0 5px'
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        top: '60px',
                        right: '-20px',
                        width: '20px',
                        height: '80px',
                        backgroundColor: '#c778dd',
                        borderRadius: '0 5px 5px 0'
                    }}></div>
                </div>
            </div>

            {/* Label at the bottom */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: 0,
                right: 0,
                textAlign: 'center',
                color: '#abb2bf',
                fontFamily: 'monospace',
                fontSize: '14px'
            }}>
                <span style={{ color: '#c778dd' }}>const</span> robot = <span style={{ color: '#61afef' }}>new</span> <span style={{ color: '#e5c07b' }}>Robot</span>();
            </div>
        </div>
    );
};

export default RobotImage;
