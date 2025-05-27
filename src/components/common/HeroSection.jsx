import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacts');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }; return (
    <section id="home" className="py-10 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-7 lg:px-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white font-fira-code mb-6 leading-snug">
              Mohit is a <span className="text-[#c778dd]">web developer</span> and
              <span className="text-[#c778dd]"> AI Enthusiast</span>
            </h1>

            <p className="text-[#abb2bf] mb-8 md:mb-10 font-fira-code text-base sm:text-lg md:text-xl">
              He crafts responsive websites integrated with ML where technologies meet creativity
            </p>

            <Button variant="primary" className="py-3 px-6 text-base sm:text-lg" onClick={scrollToContact}>
              <span className="font-fira-code font-medium">Contact me!!</span>
            </Button>
          </div>          <div className="relative mt-8 md:mt-0 order-1 md:order-2">
            <img
              src="/images/img_image_386x457.png"
              alt="Mohit"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto object-contain"
            />

            {/* Logo overlay */}
            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 hidden sm:block">
              <img src="/images/img_logo.svg" alt="Logo" className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36" />
            </div>{/* Dot pattern */}
            <div className="absolute right-0 bottom-0 hidden sm:block">
              <div className="grid grid-cols-5 gap-1.5">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#abb2bf]"></div>
                ))}
              </div>
            </div>            {/* Currently working on badge */}
            <div className="absolute bottom-0 left-0 border border-[#abb2bf] bg-[#282c33] py-2 px-3 md:py-3 md:px-4 flex items-center text-sm md:text-base max-w-[180px] sm:max-w-[240px] md:max-w-none">
              <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#c778dd] border border-[#c778dd] mr-2 sm:mr-3 flex-shrink-0"></div>
              <p className="text-[#abb2bf] font-fira-code text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                Currently working on <span className="text-white font-semibold">Portfolio</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;