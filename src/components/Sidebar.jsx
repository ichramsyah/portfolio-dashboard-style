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

  const SvgLight = () => (
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"></path>
      <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"></path>
    </svg>
  );
  const SvgDark = () => (
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"></path>
      <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"></path>
    </svg>
  );

  return (
    <>
      {isMobileMenuOpen && <div className="fixed inset-0 bg-blackk/20 bg-opacity-50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />}

      <div className={`fixed left-0 top-0 h-full w-68 bg-whitee px-7 py-7 dark:bg-gray-9 z-50 transform transition-all ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex flex-col h-full">
          <div className=" pb-5 border-b border-gray-2 dark:border-gray-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src="./images/ppinstagram.png" alt="" className="w-8 object-cover rounded-full" />
                <h1 className="text-xl font-medium text-gray-9 dark:text-whitee pl-[6px]">Ichramabdr</h1>
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
                  <li key={item.id} className="group">
                    <button
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-3 py-2 pb-[11px] rounded-lg transition-[0.2s] ${
                        activeSection === item.id ? 'bg-blue-1 dark:bg-blue-4 text-blue-7 dark:text-gray-1 scale-[100%]' : 'text-gray-7 dark:text-gray-3 hover:bg-gray-1 dark:hover:bg-gray-8 hover:scale-[104%]'
                      }`}
                    >
                      <Icon size={20} className="transition-transform duration-300 group-hover:rotate-[-13deg]" />
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
                {theme === 'light' ? <SvgLight /> : <SvgDark />}
                <span>{theme === 'light' ? 'Light' : 'Dark'} Mode</span>
              </button>

              <button
                onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
                className="w-full flex items-center space-x-3 px-3 py-2 text-gray-7 dark:text-gray-3 hover:bg-gray-1 dark:hover:bg-gray-8 rounded-lg transition-[0.2s] hover:scale-[103%]"
              >
                <Globe size={20} />
                <div className="flex items-center space-x-2">
                  <span>{language === 'en' ? 'English' : 'Indonesia'}</span>
                  <span className="mb-[-4px]">{language === 'en' ? '🇺🇸' : '🇮🇩'}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
