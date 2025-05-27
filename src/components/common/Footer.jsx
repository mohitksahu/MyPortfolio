import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-6 sm:pt-8 md:pt-10 pb-6">
      <div className="container mx-auto px-5 sm:px-7 lg:px-10 max-w-7xl">
        <div className="border-t-2 border-[#abb2bf] pt-6 sm:pt-8 md:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 sm:mb-8 md:mb-10">
            <div>
              <div className="flex items-center mb-3 sm:mb-5">
                <img src="/images/img_union.svg" alt="Logo" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-3" />
                <span className="text-white font-fira-code font-bold text-base sm:text-lg md:text-xl">Mohit Kumar Sahu</span>
              </div>
              <p className="text-[#abb2bf] font-fira-code text-sm sm:text-base md:text-lg">
                Enthusiast and Curious
              </p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium text-white font-fira-code mb-3 sm:mb-5">Media</h3>
              <div className="flex space-x-4 sm:space-x-5">
                <a href="https://github.com/mohitksahu" target="_blank" rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-200">
                  <img src="/images/img_github.svg" alt="GitHub" className="w-8 h-8 sm:w-10 sm:h-10" />
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-200">
                  <img src="/images/img_discord.svg" alt="Discord" className="w-8 h-8 sm:w-10 sm:h-10" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-[#abb2bf] font-fira-code text-sm sm:text-base">
            © Copyright 2025. Made by Mohit
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;