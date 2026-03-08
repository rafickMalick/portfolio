import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationFR from './fr.json';
import translationEN from './en.json';
import translationES from './es.json';
import translationJA from './ja.json';
import translationAR from './ar.json';

const resources = {
    fr: { translation: translationFR },
    en: { translation: translationEN },
    es: { translation: translationES },
    ja: { translation: translationJA },
    ar: { translation: translationAR }
};

i18n
    .use(LanguageDetector) // Detects language automatically
    .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'fr', // French is default if detection fails
        lng: localStorage.getItem('i18nextLng') || undefined, // Use stored language or let detector decide
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
            lookupLocalStorage: 'i18nextLng',
            checkWhitelist: true
        },
        supportedLngs: ['fr', 'en', 'es', 'ja', 'ar'],
        interpolation: {
            escapeValue: false // React already escapes values
        }
    });

export default i18n;
