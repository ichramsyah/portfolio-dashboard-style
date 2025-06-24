import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Sidebar from './components/Sidebar';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import AchievementsSection from './components/sections/AchievementsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import { Menu } from 'lucide-react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'about':
        return <AboutSection />;
      case 'achievements':
        return <AchievementsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-whitee  dark:bg-gray-9 transition-colors">
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

          <button onClick={() => setIsMobileMenuOpen(true)} className="fixed top-4 left-4 z-30 lg:hidden p-2 bg-whitee dark:bg-gray-8 rounded-lg shadow-md">
            <Menu size={24} className="text-gray-7 dark:text-gray-3" />
          </button>

          <div className="lg:ml-64 min-h-screen">
            <main className="container mx-auto px-6 lg:px-12">{renderSection()}</main>
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
