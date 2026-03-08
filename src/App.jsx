import { useState } from 'react'
import Hero from './components/Hero'
import Profile from './components/Profile'
import ThemeToggle from './components/ThemeToggle'
import LanguageSwitcher from './components/LanguageSwitcher'
import Projects from './components/Projects'
import Roadmap from './components/Roadmap'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
    const [theme, setTheme] = useState('it') // 'it' | 'robotique'

    return (
        <div className="app-container">
            {/* Dynamic Background Effect depending on theme */}
            <div
                className="background-glow it-glow"
                style={{ opacity: theme === 'it' ? 0.35 : 0, transition: 'opacity 0.8s ease' }}
            ></div>
            <div
                className="background-glow robot-glow"
                style={{ opacity: theme === 'robotique' ? 0.35 : 0, transition: 'opacity 0.8s ease' }}
            ></div>

            <header className="app-header">
                <LanguageSwitcher />
            </header>

            <main>
                <Hero />
                <Profile />

                {/* The Toggle that controls the layout perspective */}
                <div className="sticky-toggle-container">
                    <ThemeToggle theme={theme} setTheme={setTheme} />
                </div>

                <Projects theme={theme} />
                <Roadmap />
                <Skills theme={theme} />
                <Contact />
            </main>

            <footer className="footer text-center">
                <p>© 2026 - Conçu avec passion & React</p>
            </footer>
        </div>
    )
}

export default App
