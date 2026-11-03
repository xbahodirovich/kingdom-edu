import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { UI, type Locale, type Translation } from '../data/content';

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tr: (translation: Translation | null | undefined) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem('kingdom-locale');
    if (stored === 'ru' || stored === 'uz') return stored;
    // Check path or browser language
    if (window.location.pathname.startsWith('/uz')) return 'uz';
  } catch {
    // ignore
  }
  return 'ru';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('kingdom-locale', newLocale);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback(
    (key: string): string => {
      const entry = UI[key];
      if (!entry) return key;
      return entry[locale] || entry.ru || key;
    },
    [locale],
  );

  const tr = useCallback(
    (translation: Translation | null | undefined): string => {
      if (!translation) return '';
      return translation[locale] || translation.ru || '';
    },
    [locale],
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, tr }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return ctx;
}
