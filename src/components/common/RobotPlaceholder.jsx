import React from 'react';

/**
 * A placeholder component that shows a message while the 3D robot attempts to load
 * This is shown first before falling back to other representations
 */
const RobotPlaceholder = ({ className }) => {
    return (
        <div
            className={`${className} flex flex-col items-center justify-center bg-[#282c33]`}
        >
            <div className="w-20 h-20 mb-4 relative">
                {/* Loading animation */}
                <div className="absolute inset-0 border-4 border-[#c778dd] rounded-full animate-ping opacity-75"></div>
                <div className="absolute inset-3 bg-[#c778dd] rounded-full"></div>
            </div>

            <div className="text-[#abb2bf] text-sm text-center">
                <p className="mb-1 text-[#c778dd] font-bold">Loading 3D Robot...</p>
                <p>Interactive element powered by Three.js</p>
            </div>
        </div>
    );
};

export default RobotPlaceholder;
