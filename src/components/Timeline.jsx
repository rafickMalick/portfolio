import { timeline } from '../data/portfolio'
import { Reveal, RevealLine, PopReveal } from './reveal'

export default function Timeline() {
    return (
        <section className="section" id="parcours" aria-labelledby="timeline-title" style={{ paddingBottom: 'clamp(56px, 8vw, 92px)' }}>
            <div className="section-label">04 — Parcours</div>
            <h2 id="timeline-title" className="section-title" style={{ marginBottom: 32 }}>
                <RevealLine as="span">Trois ans, déjà trois expériences</RevealLine>
            </h2>
            <div className="timeline-list">
                {timeline.map((e, i) => (
                    <Reveal
                        index={i}
                        as="div"
                        className="timeline-row"
                        key={e.title}
                        style={{ background: e.highlight ? 'var(--panel)' : 'transparent' }}
                    >
                        <div className="tl-year">{e.year}</div>
                        <div className="tl-dot-col">
                            <PopReveal index={i} className={`tl-dot ${e.highlight ? 'tl-dot-highlight' : ''}`} />
                        </div>
                        <div>
                            <div className={`tl-title ${e.highlight ? 'tl-title-highlight' : ''}`}>{e.title}</div>
                            <div className="tl-desc">{e.desc}</div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
