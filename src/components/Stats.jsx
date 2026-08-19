import { stats } from '../data/portfolio'
import { Reveal } from './reveal'
import useCountUp from '../hooks/useCountUp'

function StatCell({ stat, index }) {
    const { ref: countRef, text } = useCountUp(stat.to, stat.suffix)
    return (
        <Reveal index={index} className="stat-cell">
            <div ref={countRef} className="stat-number">{text}</div>
            <div className="stat-label">{stat.label}</div>
        </Reveal>
    )
}

export default function Stats() {
    return (
        <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className="stats-grid">
                {stats.map((stat, i) => (
                    <StatCell stat={stat} index={i} key={stat.label} />
                ))}
            </div>
        </section>
    )
}
