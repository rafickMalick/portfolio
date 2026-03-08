import { motion } from 'framer-motion'
import { MonitorSmartphone, Cpu } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ThemeToggle({ theme, setTheme }) {
    const { t } = useTranslation();

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <div className="theme-toggle-wrapper">
            <div className="glass-panel theme-toggle-container">

                {/* Animated Background Pill */}
                <motion.div
                    className="toggle-pill"
                    animate={{
                        x: theme === 'it' ? '0%' : '100%',
                        backgroundColor: theme === 'it' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(249, 115, 22, 0.2)'
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />

                <button
                    className={`toggle-btn ${theme === 'it' ? 'active' : ''}`}
                    onClick={() => toggleTheme('it')}
                >
                    <MonitorSmartphone size={18} className="toggle-icon" />
                    <span className="toggle-text">{t('theme.it')}</span>
                </button>

                <button
                    className={`toggle-btn ${theme === 'robotique' ? 'active' : ''}`}
                    onClick={() => toggleTheme('robotique')}
                >
                    <Cpu size={18} className="toggle-icon" />
                    <span className="toggle-text">{t('theme.robotics')}</span>
                </button>

            </div>
        </div>
    )
}
