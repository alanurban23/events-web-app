import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { translations } from '../translations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: translations,
    fallbackLng: 'en',
    interpolation: {
      format(value, format) {
        if (format === 'uppercase') return value.toUpperCase();
        if (format === 'capitalize')
          return value.replace(/\b(\w)/g, (s: string) => s.toUpperCase());
        return value;
      },
    },
  });

export { useTranslation, i18n };
