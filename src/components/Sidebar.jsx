import { useContext, useRef, useState, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { Home, User, Award, Mail, Moon, Sun, X, MessageSquareText, Layers, Eye, LucideBotMessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ToggleSwitch from './common/ToggleSwitch';
import LanguageSwitch from './common/LanguageSwitch';
import { BsStars } from 'react-icons/bs';
import ReactCountryFlag from 'react-country-flag';

const Sidebar = ({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, setLanguage, t } = useContext(LanguageContext);
  const [isProfileImageLoaded, setIsProfileImageLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: t('nav.home') },
    { id: 'about', icon: User, label: t('nav.about') },
    { id: 'achievements', icon: Award, label: t('nav.achievements') },
    { id: 'projects', icon: Layers, label: t('nav.projects') },
    { id: 'chatroom', icon: MessageSquareText, label: t('nav.chatroom') },
    { id: 'contact', icon: Mail, label: t('nav.contact') },
    { id: 'aichat', icon: BsStars, label: t('nav.aichat') },
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

      <AnimatePresence>
        {isModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] cursor-pointer">
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              src="./images/iam.jpeg"
              alt="Profile zoomed in"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
            <button className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors" onClick={() => setIsModalOpen(false)}>
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`fixed lg:sticky top-0 h-screen flex-shrink-0 w-70 bg-whitee px-7 py-3 dark:bg-background-dark z-50 transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="pb-2 border-b border-gray-3 dark:border-gray-7 relative">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center w-full">
                <div className="relative w-20 h-20 mt-5 group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                  {!isProfileImageLoaded && <div className="absolute inset-0 bg-gray-3 dark:bg-gray-7 rounded-full animate-pulse"></div>}
                  <img
                    src="./images/iam.jpeg"
                    alt="Profile"
                    className={`w-full h-full object-cover rounded-full border-2 border-gray-5 dark:border-gray-6 transition-opacity duration-800 ${isProfileImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setIsProfileImageLoaded(true)}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-gray-2 dark:text-gray-3 text-xs font-medium text-center">
                      <Eye size={16} className="mb-1 mx-auto" />
                      <span>{t('nav.view')}</span>
                    </div>
                  </div>
                </div>

                {/* Nama */}
                <div className="flex items-center gap-1 mt-2">
                  <h1 className="text-lg text-gray-9 dark:text-gray-2">Ichramsyah</h1>
                  <div className="relative group">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-blue-4" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
                    </svg>
                    <span className="absolute left-7 -translate-x-1/2 -top-8 scale-0 group-hover:scale-100 transition-transform duration-200 bg-gray-7 dark:bg-gray-3 dark:text-gray-9 text-whitee text-xs px-2 py-1 rounded-sm shadow-md">
                      Verified
                    </span>
                  </div>
                </div>

                {/* Toggle Tema */}
                <div className="flex gap-2.5 py-2">
                  <ToggleSwitch
                    isActive={theme === 'light'}
                    onToggle={toggleTheme}
                    option1={{ icon: <Sun className="transition-transform duration-400 hover:scale-120" size={15} /> }}
                    option2={{ icon: <Moon className="transition-transform duration-400 hover:scale-120 ml-[3px]" size={15} /> }}
                    activeBg="bg-whitee/90 dark:bg-gray-3/20"
                    inactiveBg="bg-gray-3"
                    activeColor="text-blue-5 dark:text-yellow-3"
                    inactiveColor="text-gray-5 dark:text-gray-3"
                  />

                  {/* Toggle Bahasa */}
                  <LanguageSwitch
                    options={[
                      { label: <ReactCountryFlag countryCode="GB" svg />, value: 'en' },
                      { label: <ReactCountryFlag countryCode="ID" svg />, value: 'id' },
                      { label: <ReactCountryFlag countryCode="JP" svg />, value: 'jp' },
                    ]}
                    activeIndex={['en', 'id', 'jp'].indexOf(language)}
                    onChange={(idx) => setLanguage(['en', 'id', 'jp'][idx])}
                  />
                </div>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-[-10px] right-[-10px] lg:hidden p-2 text-gray-5 hover:text-gray-7 dark:text-gray-4 dark:hover:text-gray-2">
                <X size={24} />
              </button>
            </div>
          </div>

          <nav className="flex-1 py-3 relative" ref={containerRef}>
            {/* Sliding sideline */}
            <motion.div animate={sidelineStyle} transition={{ type: 'spring', stiffness: 400, damping: 26 }} className="absolute right-[-10px] w-[5px] rounded-lg bg-blue-2 dark:bg-gray-2/10" />

            <ul className="space-y-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                const isAiChat = item.id === 'aichat';

                return (
                  <li key={item.id} className="group">
                    <button
                      ref={(el) => {
                        if (isActive) setActiveRef(el);
                      }}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full cursor-pointer flex items-center space-x-3 px-3.5 pt-[7px] pb-[10px] rounded-lg rounded-r-sm transition-all duration-300 relative overflow-hidden isolate group ${
                        isAiChat
                          ? `bg-gradient-to-r from-blue-4 to-gray-1 dark:from-blue-5 dark:to-gray-3 text-whitee ${isActive ? 'scale-[102%]' : 'hover:scale-[102%] opacity-90 hover:opacity-100'}`
                          : isActive
                          ? 'text-blue-7 dark:text-gray-2 scale-[100%]'
                          : 'bg-transparent text-gray-7/90 dark:text-gray-2/60 dark:hover:text-gray-1 hover:bg-gray-2/60 dark:hover:bg-gray-5/20 hover:scale-[103%]'
                      }`}
                    >
                      {!isAiChat && isActive && (
                        <>
                          <div className="absolute inset-[-20%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#374151_0%,#60a5fa_50%,#6b7280_100%)] -z-20 " />
                          <div className="absolute w-[222px] inset-[1.5px] rounded-[5px] rounded-l-[5px] bg-gradient-to-r from-blue-1 to-blue-2 dark:bg-gradient-to-r dark:from-background-dark dark:to-background-dark -z-10" />
                        </>
                      )}
                      <div className="relative z-10 flex items-center space-x-3 w-full">
                        <Icon size={20} className={`transition-transform duration-300 ${isAiChat ? 'animate-pulse' : 'group-hover:rotate-[-13deg]'}`} /> <span className={isAiChat ? '' : ''}>{item.label}</span>
                        {isAiChat && <span className="ml-auto text-[10px] bg-blue-5 dark:bg-blue-5/70 text-whitee dark:text-gray-2 px-1.5 py-0.5 pb-1 rounded-md">V 1.0</span>}
                      </div>
                    </button>
                  </li>
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
