import { marquee } from '../data/portfolio'

function MarqueeGroup() {
    return (
        <div className="marquee-group">
            {marquee.map((item, i) => (
                <span className="marquee-item" key={i}>
                    {item}
                    <span className="marquee-dot" />
                </span>
            ))}
        </div>
    )
}

export default function Marquee({ show = true }) {
    if (!show) return null
    return (
        <div className="marquee">
            <div className="marquee-track">
                <MarqueeGroup />
                <MarqueeGroup />
            </div>
        </div>
    )
}
