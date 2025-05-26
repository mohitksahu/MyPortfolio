import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacts');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="py-8 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">          <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white font-fira-code mb-4 leading-snug">
            Mohit is a <span className="text-[#c778dd]">web developer</span> and
            <span className="text-[#c778dd]"> AI Enthusiast</span>
          </h1>

          <p className="text-[#abb2bf] mb-6 md:mb-8 font-fira-code text-sm md:text-base">
            He crafts responsive websites integrated with ML where technologies meet creativity
          </p>

          <Button variant="primary" className="py-2 px-4" onClick={scrollToContact}>
            <span className="font-fira-code font-medium">Contact me!!</span>
          </Button>
        </div>          <div className="relative mt-6 md:mt-0">
            <img
              src="/images/img_image_386x457.png"
              alt="Elias"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto object-contain"
            />

            {/* Logo overlay */}
            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 hidden sm:block">
              <img src="/images/img_logo.svg" alt="Logo" className="w-20 h-20 md:w-32 md:h-32" />
            </div>            {/* Dot pattern */}
            <div className="absolute right-0 bottom-0 hidden sm:block">
              <div className="grid grid-cols-5 gap-1">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#abb2bf]"></div>
                ))}
              </div>
            </div>

            {/* Currently working on badge */}
            <div className="absolute bottom-0 left-0 border border-[#abb2bf] bg-[#282c33] py-1 px-2 md:py-2 md:px-2 flex items-center text-xs md:text-sm max-w-[150px] md:max-w-none">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-[#c778dd] border border-[#c778dd] mr-2 flex-shrink-0"></div>
              <p className="text-[#abb2bf] font-fira-code text-xs md:text-sm">
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