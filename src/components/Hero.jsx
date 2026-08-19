import { forwardRef } from 'react'
import { RevealLine } from './reveal'

const Hero = forwardRef(function Hero(_, parallaxRef) {
    return (
        <header className="hero">
            <div className="hero-parallax" ref={parallaxRef} />
            <div className="hero-body">
                <div className="hero-badge">
                    <span className="hero-badge-dot" />
                    Ouvert aux offres &amp; stages · Bénin / remote
                </div>

                <h1 className="hero-title">
                    <RevealLine index={0} as="span">J'écris le code</RevealLine>
                    <RevealLine index={1} as="span">qui fait bouger</RevealLine>
                    <RevealLine index={2} as="span">
                        <span className="hero-title-accent">les choses réelles.</span>
                    </RevealLine>
                </h1>

                <div className="hero-columns">
                    <RevealLine index={3} as="p" className="hero-lead">
                        Du firmware d'un boîtier d'arrosage jusqu'à l'interface web qui le pilote, je livre la chaîne complète.
                    </RevealLine>
                    <RevealLine index={4} as="p" className="hero-sub">
                        Étudiant ingénieur à Epitech Bénin, autodidacte compulsif, déjà en responsabilité sur des projets qui tournent en conditions réelles — pas seulement sur ma machine.
                    </RevealLine>
                </div>
            </div>
        </header>
    )
})

export default Hero
