import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-4 sm:pt-6 md:pt-8 pb-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="border-t border-[#abb2bf] pt-4 sm:pt-6 md:pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 sm:mb-6 md:mb-8">            <div>
            <div className="flex items-center mb-2 sm:mb-4">
              <img src="/images/img_union.svg" alt="Logo" className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <span className="text-white font-fira-code font-bold text-sm sm:text-base">Mohit Kumar Sahu</span>
            </div>
            <p className="text-[#abb2bf] font-fira-code text-xs sm:text-sm">
              Enthusiast and Curious
            </p>
          </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-white font-fira-code mb-2 sm:mb-4">Media</h3>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="https://github.com/mohitksahu" target="_blank" rel="noopener noreferrer">
                  <img src="/images/img_github.svg" alt="GitHub" className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/img_discord.svg" alt="Discord" className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>  
              </div>
            </div>
          </div>
          <div className="text-center text-[#abb2bf] font-fira-code text-xs sm:text-sm">
            © Copyright 2025. Made by Mohit
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;