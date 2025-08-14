import React, { useContext, useRef, useState, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { Home, User, Award, Mail, Moon, Sun, X, MessageSquareText, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import ToggleSwitch from './common/ToggleSwitch';
import LanguageSwitch from './common/LanguageSwitch';

const Sidebar = ({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, setLanguage, t } = useContext(LanguageContext);

  const navItems = [
    { id: 'home', icon: Home, label: t('nav.home') },
    { id: 'about', icon: User, label: t('nav.about') },
    { id: 'achievements', icon: Award, label: t('nav.achievements') },
    { id: 'projects', icon: Layers, label: t('nav.projects') },
    { id: 'contact', icon: Mail, label: t('nav.contact') },
    { id: 'chatroom', icon: MessageSquareText, label: t('nav.chatroom') },
  ];

  const containerRef = useRef(null);
  const [activeRef, setActiveRef] = useState(null);
  const [sidelineStyle, setSidelineStyle] = useState({ top: 0, height: 10 });

  useEffect(() => {
    if (activeRef && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const activeRect = activeRef.getBoundingClientRect();
      setSidelineStyle({
        top: activeRect.top - containerRect.top,
        height: activeRect.height,
      });
    }
  }, [activeSection, activeRef]);

  return (
    <>
      {isMobileMenuOpen && <div className="fixed inset-0 bg-blackk/20 bg-opacity-50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />}

      <div className={`fixed left-0 top-0 h-full w-68 bg-whitee px-7 py-7 dark:bg-background-dark z-50 transform transition-all ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex flex-col h-full">
          <div className="pb-2 border-b border-gray-3 dark:border-gray-7 relative">
            <div className="flex items-center justify-between">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }} viewport={{ once: false }} className="flex flex-col items-center w-full">
                {/* Gambar Profil */}
                <img src="./images/iam.jpeg" alt="" className="w-17 border-2 transition-color duration-200 delay-200 border-gray-5 dark:border-gray-6 object-cover rounded-full" />

                {/* Grup Nama & Ikon */}
                <div className="flex items-center gap-1 mt-2">
                  <h1 className="text-lg text-gray-9 dark:text-whitee">Ichramsyah</h1>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-blue-4" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
                  </svg>
                </div>

                {/* Toggle Tema */}
                <div className="flex gap-2 py-2">
                  <ToggleSwitch
                    isActive={theme === 'light'}
                    onToggle={toggleTheme}
                    option1={{ icon: <Sun className="transition-transform duration-400 hover:scale-120" size={14} /> }}
                    option2={{ icon: <Moon className="transition-transform duration-400 hover:scale-120" size={14} /> }}
                    activeBg="bg-whitee dark:bg-gray-7"
                    inactiveBg="bg-gray-3"
                    activeColor="text-blue-6 dark:text-yellow-3"
                    inactiveColor="text-gray-5 dark:text-gray-3"
                  />

                  {/* Toggle Bahasa */}
                  <LanguageSwitch
                    options={[
                      { label: '🇺🇸', value: 'en' },
                      { label: '🇮🇩', value: 'id' },
                      { label: '🇯🇵', value: 'jp' },
                    ]}
                    activeIndex={['en', 'id', 'jp'].indexOf(language)}
                    onChange={(idx) => setLanguage(['en', 'id', 'jp'][idx])}
                  />
                </div>
              </motion.div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-[-10px] right-[-10px] lg:hidden p-2 text-gray-5 hover:text-gray-7 dark:text-gray-4 dark:hover:text-gray-2">
                <X size={24} />
              </button>
            </div>
          </div>

          <nav className="flex-1 py-3 relative" ref={containerRef}>
            {/* Sliding sideline */}
            <motion.div animate={sidelineStyle} transition={{ type: 'spring', stiffness: 400, damping: 26 }} className="absolute right-[-10px] w-[5px] rounded-lg bg-blue-2 dark:bg-blue-3" />

            <ul className="space-y-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <motion.li key={item.id} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 * index }} viewport={{ once: false }} className="group">
                    <button
                      ref={(el) => {
                        if (isActive) setActiveRef(el);
                      }}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg rounded-r-sm transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-1 to-blue-2 dark:bg-gradient-to-r dark:from-blue-5 dark:to-blue-3 text-blue-7 dark:text-gray-1 scale-[100%]'
                          : 'text-gray-7 dark:hover:text-gray-1 dark:text-gray-4 hover:bg-gray-2 dark:hover:bg-gray-8 hover:scale-[104%]'
                      }`}
                    >
                      <Icon size={20} className="transition-transform duration-300 group-hover:rotate-[-13deg]" />
                      <span>{item.label}</span>
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Bagian bawah */}
          <div className="pt-3 border-t border-gray-3 dark:border-gray-7">
            <div className="space-y-2">
              <div className="text-center">
                <p className="text-sm text-gray-5">{t('nav.copyright1')}</p>
                <p className="text-sm text-gray-5 pt-1">{t('nav.copyright2')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
