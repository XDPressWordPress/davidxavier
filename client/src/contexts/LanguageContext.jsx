import { createContext, useContext, useState } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('pt');

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[currentLang];
    
    for (const key of keys) {
      value = value?.[key];
    }
    
    return value || path;
  };

  const switchLanguage = () => {
    setCurrentLang(prev => prev === 'pt' ? 'en' : 'pt');
  };

  return (
    <LanguageContext.Provider value={{
      currentLang,
      setCurrentLang,
      switchLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
