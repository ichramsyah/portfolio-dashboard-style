import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { Home, User, Award, Briefcase, Mail, Moon, Sun, Globe, X } from 'lucide-react';

const Sidebar = ({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, setLanguage, t } = useContext(LanguageContext);

  const navItems = [
    { id: 'home', icon: Home, label: t('nav.home') },
    { id: 'about', icon: User, label: t('nav.about') },
    { id: 'achievements', icon: Award, label: t('nav.achievements') },
    { id: 'projects', icon: Briefcase, label: t('nav.projects') },
    { id: 'contact', icon: Mail, label: t('nav.contact') },
  ];

  return (
    <>
      {isMobileMenuOpen && <div className="fixed inset-0 bg-blackk/20 bg-opacity-50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />}

      <div className={`fixed left-0 top-0 h-full w-68 bg-whitee px-7 py-7 dark:bg-gray-9 z-50 transform transition-all ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex flex-col h-full">
          <div className=" pb-5 border-b border-gray-2 dark:border-gray-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-9 dark:text-whitee pl-1">Ichramabdr</h1>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-blue-400 ml-1 mt-[2px]" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
                </svg>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden p-2 text-gray-5 hover:text-gray-7 dark:text-gray-4 dark:hover:text-gray-2">
                <X size={20} />
              </button>
            </div>
          </div>

          <nav className="flex-1 py-4">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-[0.2s] ${
                        activeSection === item.id ? 'bg-blue-1 dark:bg-blue-5 text-blue-7 dark:text-gray-1 scale-[103%]' : 'text-gray-7 dark:text-gray-3 hover:bg-gray-1 dark:hover:bg-gray-8 hover:scale-[103%]'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="pt-3 border-t border-gray-2 dark:border-gray-7">
            <div className="space-y-2">
              <button onClick={toggleTheme} className="w-full flex items-center space-x-3 px-3 py-2 text-gray-7 dark:text-gray-3 hover:bg-gray-1 dark:hover:bg-gray-8 rounded-lg transition-[0.2s] hover:scale-[103%]">
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                <span>{theme === 'light' ? 'Light' : 'Dark'} Mode</span>
              </button>

              <button
                onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
                className="w-full flex items-center space-x-3 px-3 py-2 text-gray-7 dark:text-gray-3 hover:bg-gray-1 dark:hover:bg-gray-8 rounded-lg transition-[0.2s] hover:scale-[103%]"
              >
                <Globe size={20} />
                <span>{language === 'en' ? 'English' : 'Indonesia'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
