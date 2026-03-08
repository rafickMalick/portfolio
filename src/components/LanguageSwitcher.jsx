import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    
    // Normalize language code (e.g., 'fr-FR' -> 'fr')
    const normalizeLanguage = (lang) => {
        if (!lang) return 'fr';
        const normalized = lang.split('-')[0].toLowerCase();
        const supported = ['fr', 'en', 'es', 'ja', 'ar'];
        return supported.includes(normalized) ? normalized : 'fr';
    };

    const [currentLanguage, setCurrentLanguage] = useState(() => {
        return normalizeLanguage(i18n.language || 'fr');
    });

    const changeLanguage = (e) => {
        const newLang = e.target.value;
        i18n.changeLanguage(newLang);
        setCurrentLanguage(newLang);
    };

    // Update current language when i18n language changes
    useEffect(() => {
        const handleLanguageChanged = (lng) => {
            setCurrentLanguage(normalizeLanguage(lng));
        };
        
        i18n.on('languageChanged', handleLanguageChanged);
        
        return () => {
            i18n.off('languageChanged', handleLanguageChanged);
        };
    }, [i18n]);

    // Sync state with i18n language on mount
    useEffect(() => {
        setCurrentLanguage(normalizeLanguage(i18n.language || 'fr'));
    }, []);

    // Auto-adjust layout direction for Arabic (Right-to-Left)
    useEffect(() => {
        const lang = normalizeLanguage(i18n.language || 'fr');
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }, [i18n.language]);

    return (
        <div className="language-switcher glass-panel">
            <Globe size={18} className="text-secondary" />
            <select
                value={currentLanguage}
                onChange={changeLanguage}
                className="language-select"
            >
                <option value="fr">FR</option>
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="ja">JA</option>
                <option value="ar">AR</option>
            </select>
        </div>
    );
}
