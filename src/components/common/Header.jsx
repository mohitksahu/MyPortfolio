import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };
  return (
    <header className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 bg-[#282c33] bg-opacity-95 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <div className="flex items-center">
          <img src="/images/img_union.svg" alt="Logo" className="w-4 h-4 mr-2" />
          <span className="text-white font-fira-code font-bold"></span>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-fira-code">
          <a href="#home" className="text-[#c778dd] font-medium" onClick={(e) => scrollToSection(e, 'home')}>
            <span className="text-[#c778dd]">#</span>
            <span className="text-white">home</span>
          </a>
          <a href="#projects" className="text-[#abb2bf] hover:text-white" onClick={(e) => scrollToSection(e, 'projects')}>
            <span className="text-[#c778dd]">#</span>
            <span>works</span>
          </a>
          <a href="#about-me" className="text-[#abb2bf] hover:text-white" onClick={(e) => scrollToSection(e, 'about-me')}>
            <span className="text-[#c778dd]">#</span>
            <span>about-me</span>
          </a>
          <a href="#contacts" className="text-[#abb2bf] hover:text-white" onClick={(e) => scrollToSection(e, 'contacts')}>
            <span className="text-[#c778dd]">#</span>
            <span>contacts</span>
          </a>
          <div className="flex items-center">
            <span className="text-[#abb2bf] font-semibold">EN</span>
            <img src="/images/img_group_58.svg" alt="Language dropdown" className="ml-1 w-2.5" />
          </div>
        </nav>        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed top-[60px] sm:top-[72px] left-0 right-0 bg-[#282c33] z-50 p-4 md:hidden border-t border-[#abb2bf]/30 shadow-lg">
            <nav className="flex flex-col space-y-4 font-fira-code">
              <a href="#home" className="text-white" onClick={(e) => scrollToSection(e, 'home')}>
                <span className="text-[#c778dd]">#</span>
                <span>home</span>
              </a>
              <a href="#projects" className="text-[#abb2bf]" onClick={(e) => scrollToSection(e, 'projects')}>
                <span className="text-[#c778dd]">#</span>
                <span>works</span>
              </a>
              <a href="#about-me" className="text-[#abb2bf]" onClick={(e) => scrollToSection(e, 'about-me')}>
                <span className="text-[#c778dd]">#</span>
                <span>about-me</span>
              </a>
              <a href="#contacts" className="text-[#abb2bf]" onClick={(e) => scrollToSection(e, 'contacts')}>
                <span className="text-[#c778dd]">#</span>
                <span>contacts</span>
              </a>
              <div className="flex items-center">
                <span className="text-[#abb2bf] font-semibold">EN</span>
                <img src="/images/img_group_58.svg" alt="Language dropdown" className="ml-1 w-2.5" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;