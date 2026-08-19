import { useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import WhyMe from './components/WhyMe'
import Work from './components/Work'
import Tooling from './components/Tooling'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import useTheme from './hooks/useTheme'
import useScrollFX from './hooks/useScrollFX'

function App() {
    const { theme, toggleTheme } = useTheme()
    const glowRef = useRef(null)
    const parallaxRef = useRef(null)
    const progressRef = useRef(null)

    useScrollFX({ glowRef, parallaxRef, progressRef })

    return (
        <div>
            <div className="rk-progress" ref={progressRef} />
            <div className="rk-glow" ref={glowRef} />

            <Nav theme={theme} toggleTheme={toggleTheme} />
            <Hero ref={parallaxRef} />
            <Marquee />
            <Stats />
            <WhyMe />
            <Work />
            <Tooling />
            <Timeline />
            <Contact />
        </div>
    )
}

export default App
