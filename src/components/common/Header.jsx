/**
 * Header Component
 * 
 * The main navigation header for the application featuring:
 * - Responsive design with mobile menu toggle
 * - Smooth scrolling to page sections
 * - Visual styling consistent with site theme
 */
import React, { useState } from 'react';

const Header = () => {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Toggles the mobile menu open/closed state
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Handles smooth scrolling to page sections
   * @param {Event} e - The click event
   * @param {string} sectionId - The ID of the target section
   */
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu if open
    }
  }; return (
    <header className="py-5 sm:py-7 md:py-9 px-5 sm:px-7 lg:px-9 sticky top-0 z-50 bg-[#282c33] bg-opacity-95 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <div className="flex items-center">
          <img src="/images/img_union.svg" alt="Logo" className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
          <span className="text-white font-fira-code font-bold"></span>
        </div>        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 rounded-md hover:bg-[#1e2128] focus:outline-none focus:ring-2 focus:ring-[#c778dd] transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>{/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 font-fira-code">
          <a href="#home" className="text-[#c778dd] font-medium text-base md:text-lg" onClick={(e) => scrollToSection(e, 'home')}>
            <span className="text-[#c778dd]">#</span>
            <span className="text-white">home</span>
          </a>
          <a href="#projects" className="text-[#abb2bf] hover:text-white text-base md:text-lg" onClick={(e) => scrollToSection(e, 'projects')}>
            <span className="text-[#c778dd]">#</span>
            <span>works</span>
          </a>
          <a href="#about-me" className="text-[#abb2bf] hover:text-white text-base md:text-lg" onClick={(e) => scrollToSection(e, 'about-me')}>
            <span className="text-[#c778dd]">#</span>
            <span>about-me</span>
          </a>
          <a href="#contacts" className="text-[#abb2bf] hover:text-white text-base md:text-lg" onClick={(e) => scrollToSection(e, 'contacts')}>
            <span className="text-[#c778dd]">#</span>
            <span>contacts</span>
          </a>
          <div className="flex items-center">
            <span className="text-[#abb2bf] font-semibold">EN</span>
            <img src="/images/img_group_58.svg" alt="Language dropdown" className="ml-1 w-2.5" />
          </div>
        </nav>        {/* Mobile Navigation */}
        <div
          className={`fixed top-[64px] sm:top-[80px] left-0 right-0 bg-[#282c33] z-50 md:hidden border-t border-[#abb2bf]/30 shadow-lg
                    transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col space-y-5 font-fira-code p-6">
            <a
              href="#home"
              className="text-white block py-3 text-lg border-b-2 border-transparent hover:border-[#c778dd] transition-colors duration-300"
              onClick={(e) => scrollToSection(e, 'home')}
            >
              <span className="text-[#c778dd]">#</span>
              <span>home</span>
            </a>
            <a
              href="#projects"
              className="text-[#abb2bf] hover:text-white block py-3 text-lg border-b-2 border-transparent hover:border-[#c778dd] transition-colors duration-300"
              onClick={(e) => scrollToSection(e, 'projects')}
            >
              <span className="text-[#c778dd]">#</span>
              <span>works</span>
            </a>
            <a
              href="#about-me"
              className="text-[#abb2bf] hover:text-white block py-3 text-lg border-b-2 border-transparent hover:border-[#c778dd] transition-colors duration-300"
              onClick={(e) => scrollToSection(e, 'about-me')}
            >
              <span className="text-[#c778dd]">#</span>
              <span>about-me</span>
            </a>
            <a
              href="#contacts"
              className="text-[#abb2bf] hover:text-white block py-3 text-lg border-b-2 border-transparent hover:border-[#c778dd] transition-colors duration-300"
              onClick={(e) => scrollToSection(e, 'contacts')}
            >
              <span className="text-[#c778dd]">#</span>
              <span>contacts</span>
            </a>            <div className="flex items-center py-3">
              <span className="text-[#abb2bf] font-semibold text-lg">EN</span>
              <img src="/images/img_group_58.svg" alt="Language dropdown" className="ml-2 w-3" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;