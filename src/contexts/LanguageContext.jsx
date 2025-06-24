import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { translations } from '../data/translations';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('language', 'en');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export { LanguageContext, LanguageProvider };
