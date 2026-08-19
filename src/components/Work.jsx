import { projects } from '../data/portfolio'
import { Reveal, RevealLine } from './reveal'

export default function Work() {
    return (
        <section className="section" id="travaux" aria-labelledby="work-title">
            <div className="section-label">02 — Travaux</div>
            <h2 id="work-title" className="section-title" style={{ marginBottom: 12 }}>
                <RevealLine as="span">Huit projets, deux mondes</RevealLine>
            </h2>
            <div className="work-head">
                <p className="work-lead">
                    Plateformes web en production d'un côté, boîtiers que je conçois et programme de l'autre.
                </p>
                <div className="rail-hint">
                    Faites défiler <span className="rail-hint-line" />→
                </div>
            </div>
            <div className="work-list">
                {projects.map((p, i) => (
                    <Reveal index={i} as="div" className="work-row" key={p.num}>
                        <div className="row-head">
                            <div className="row-num">{p.num}</div>
                            <h3 className="row-title">{p.title}</h3>
                            <div className="row-cat">{p.cat}</div>
                        </div>
                        <div className="row-body">
                            <p className="row-desc">{p.desc}</p>
                            <div className="row-tags">
                                {p.tags.map((t) => (
                                    <span className="tag-chip" key={t}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
