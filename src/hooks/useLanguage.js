import { useEffect, useState } from 'react';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../data/profile';

const STORAGE_KEY = 'hh-language';

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
    return stored;
  }

  return DEFAULT_LANGUAGE;
}

export function useLanguage() {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'zh' : 'en'));
  };

  return {
    language,
    setLanguage,
    toggleLanguage,
  };
}
