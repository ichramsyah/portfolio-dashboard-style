import React, { useState, useEffect } from 'react';
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
import ChatRoomSection from './components/sections/ChatRoomSection';
import Preloader from './components/Preloader';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from 'react-hot-toast';
import AISection from './components/sections/AISection';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [activeSection]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection setActiveSection={setActiveSection} />;
      case 'about':
        return <AboutSection />;
      case 'achievements':
        return <AchievementsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      case 'chatroom':
        return <ChatRoomSection />;
      case 'aichat':
        return <AISection />;
      default:
        return <HomeSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <AnimatePresence>
            {isLoading ? (
              <Preloader key="preloader" />
            ) : (
              <div className="max-w-7xl mx-auto min-h-screen bg-whitee dark:bg-background-dark transition-colors duration-300 lg:flex md:px-4 px-0">
                <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

                <button onClick={() => setIsMobileMenuOpen(true)} className="fixed top-0 left-0 z-30 lg:hidden p-3 bg-whitee dark:bg-background-dark w-full border-b border-gray-2 dark:border-gray-8">
                  <Menu size={24} className="text-gray-8 dark:text-gray-3" />
                </button>

                <div className="flex-1 min-h-screen tracking-[0.3px]">
                  <main className="container mx-auto px-6">{renderSection()}</main>
                </div>
              </div>
            )}
          </AnimatePresence>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
