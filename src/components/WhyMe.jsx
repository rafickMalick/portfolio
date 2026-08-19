import { pillars } from '../data/portfolio'
import { Reveal, RevealLine } from './reveal'

export default function WhyMe() {
    return (
        <section className="section" id="profil" aria-labelledby="whyme-title">
            <div className="section-label">01 — Pourquoi moi</div>
            <h2 id="whyme-title" className="section-title">
                <RevealLine as="span">Les entreprises cherchent deux profils. J'en suis un seul.</RevealLine>
            </h2>
            <div className="pillars-grid">
                {pillars.map((p, i) => (
                    <Reveal index={i} as="div" className="pillar-card" key={p.num}>
                        <div className="pillar-num">{p.num}</div>
                        <h3 className="pillar-title">{p.title}</h3>
                        <p className="pillar-desc">{p.desc}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
