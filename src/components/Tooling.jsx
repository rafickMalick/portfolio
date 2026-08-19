import { skillGroups, passions, languages } from '../data/portfolio'
import { Reveal, RevealLine } from './reveal'

export default function Tooling() {
    return (
        <section className="section" id="outillage" aria-labelledby="tooling-title">
            <div className="section-label">03 — Outillage</div>
            <h2 id="tooling-title" className="section-title" style={{ marginBottom: 32 }}>
                <RevealLine as="span">Ce que j'utilise, sans enjoliver</RevealLine>
            </h2>

            <div className="tooling-grid">
                {skillGroups.map((g, i) => (
                    <Reveal index={i} as="div" className="tool-card" key={g.title}>
                        <div className="tool-title" style={{ color: g.colorVar }}>{g.title}</div>
                        <div className="tool-note">{g.note}</div>
                        <div className="tool-list">
                            {g.items.map((item) => (
                                <div className="tool-row" key={item.name}>
                                    <span className="tool-name">{item.name}</span>
                                    <span className="tool-level" style={{ color: item.colorVar }}>{item.level}</span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                ))}
            </div>

            <div className="chips-row">
                <span className="chips-label">Hors clavier</span>
                {passions.map((p) => (
                    <span className="chip chip-hover" key={p}>{p}</span>
                ))}
            </div>
            <div className="chips-row">
                <span className="chips-label">Langues</span>
                {languages.map((l) => (
                    <span className="chip" key={l}>{l}</span>
                ))}
            </div>
        </section>
    )
}
