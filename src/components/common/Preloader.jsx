import React, { useState, useEffect, useRef } from 'react';

const Preloader = ({ onLoadComplete }) => {
    const [typingComplete, setTypingComplete] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [showCursor, setShowCursor] = useState(true); const [text, setText] = useState('');
    const fullText = `const portfolio = {\n  name: "Mohit Kumar Sahu",\n  skills: ["Web Dev", "AI", "ML"],\n  loading: true\n};`;

    const loadingTextRef = useRef(null);    // Typing animation effect
    useEffect(() => {
        let currentIndex = 0;
        let typingInterval;

        if (currentIndex < fullText.length) {
            typingInterval = setInterval(() => {
                setText(fullText.substring(0, currentIndex + 1));
                currentIndex++;

                if (currentIndex >= fullText.length) {
                    clearInterval(typingInterval);
                    setTypingComplete(true);
                }
            }, 45); // Slower typing speed for more natural effect
        }

        return () => {
            clearInterval(typingInterval);
        };
    }, []);

    // Cursor blinking effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);    // Progress bar effect
    useEffect(() => {
        let progressInterval;

        if (typingComplete) {
            progressInterval = setInterval(() => {
                setLoadingProgress(prev => {
                    const newProgress = prev + 2; // Slower progress increment
                    if (newProgress >= 100) {
                        clearInterval(progressInterval);
                        // Added wait time before completing
                        setTimeout(() => {
                            if (onLoadComplete) onLoadComplete();
                        }, 500);
                        return 100;
                    }
                    return newProgress;
                });
            }, 60); // Slower interval
        }

        return () => clearInterval(progressInterval);
    }, [typingComplete, onLoadComplete]); const formatCode = (code) => {
        return code.split('\n').map((line, index) => (
            <div key={index} className="line">
                {line.includes('loading: true') ? (
                    <>
                        {line.split('loading: ')[0]}
                        <span className="text-yellow-300">loading</span>: <span className="text-purple-400 loading-text" ref={loadingTextRef}>true</span>
                    </>
                ) : line.includes('name:') ? (
                    <>
                        {line.split('name: ')[0]}
                        <span className="text-yellow-300">name</span>: <span className="text-green-300">"Mohit Kumar Sahu"</span>
                    </>
                ) : line.includes('skills:') ? (
                    <>
                        {line.split('skills: ')[0]}
                        <span className="text-yellow-300">skills</span>: <span className="text-blue-400">[</span><span className="text-green-300">"Web Dev"</span>, <span className="text-green-300">"AI"</span>, <span className="text-green-300">"ML"</span><span className="text-blue-400">]</span>
                    </>
                ) : line.includes('const portfolio') ? (
                    <>
                        <span className="text-green-400">const</span> <span className="text-blue-400">portfolio</span> {line.substring(15)}
                    </>
                ) : (
                    line
                )}
            </div>
        ));
    };

    return (
        <div className="fixed inset-0 bg-[#282c33] flex flex-col items-center justify-center z-[9999] transition-opacity duration-500">
            {/* Logo */}
            <div className="mb-6">
                <img src="/images/img_union.svg" alt="Logo" className="w-8 h-8 mx-auto animate-pulse" />
            </div>            {/* Animated Code Container */}
            <div className="mb-8 bg-[#1e2128] p-4 sm:p-5 md:p-6 rounded-md shadow-lg border-2 border-[#abb2bf]/30 w-[280px] xs:w-[320px] sm:w-[400px] md:w-[450px] font-fira-code">
                <div className="flex items-center mb-3">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"></div>
                </div>

                <div className="code-animation text-[#abb2bf] text-xs xs:text-sm sm:text-base whitespace-pre-wrap overflow-hidden">
                    <div className="typing-code font-fira-code">
                        {formatCode(text)}
                        <span className={`cursor ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                    </div>
                </div>
            </div>

            {/* Loading progress bar */}
            <div className="w-60 xs:w-72 sm:w-80 md:w-96 bg-[#1e2128] h-2 sm:h-2.5 rounded-full overflow-hidden mb-4">
                <div
                    className="h-full bg-[#c778dd]"
                    style={{
                        width: `${loadingProgress}%`,
                        transition: 'width 0.3s ease-in-out'
                    }}
                ></div>
            </div>

            {/* Loading percentage */}
            <div className="text-[#abb2bf] text-sm xs:text-base font-fira-code mb-6">
                {typingComplete ? `Loading portfolio... ${loadingProgress}%` : 'Initializing...'}
            </div>

            {/* Decorative elements - similar to the ones in your main site */}
            <div className="absolute bottom-8 left-8 hidden sm:block">
                <div className="grid grid-cols-4 gap-1">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-[#abb2bf] opacity-30"></div>
                    ))}
                </div>
            </div>

            <div className="absolute top-8 right-8 hidden sm:block">
                <div className="border border-[#c778dd] w-8 h-8 opacity-50"></div>
            </div>
        </div>
    );
};

export default Preloader;
