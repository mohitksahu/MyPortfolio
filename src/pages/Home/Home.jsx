/**
 * Home Page Component
 * 
 * This is the main landing page of the application which consists of multiple sections:
 * - Hero Section: Introduction and headline content
 * - Quote Section: Featured quote or testimonial
 * - Projects Section: Portfolio of work samples
 * - Skills Section: Technical skills and competencies
 * - About Section: Personal information and background
 * - Contacts Section: Contact information and form
 * 
 * The page includes a fixed social sidebar (visible on medium and larger screens)
 * and maintains the website's dark theme styling.
 */
import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import QuoteSection from './QuoteSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import AboutSection from './AboutSection';
import ContactsSection from './ContactsSection';

const HomePage = () => {
  return (
    <div className="bg-[#282c33] min-h-screen overflow-x-hidden">
      {/* Social sidebar - fixed position, only visible on md+ screens */}
      <div className="fixed left-2 sm:left-4 top-1/3 hidden md:flex flex-col space-y-4 z-10">
        <a href="https://github.com/mohitksahu" target="_blank" rel="noopener noreferrer">
          <img src="/images/img_github.svg" alt="GitHub" className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        <div className="w-px h-32 sm:h-48 bg-[#abb2bf] mx-auto"></div>
      </div>

      {/* Page structure */}
      <Header />
      <main>
        <HeroSection />
        <QuoteSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;