import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, CircleDashed } from 'lucide-react'

const ROADMAP_DATA = [
    { id: 1, year: '2023', title: 'Baccalauréat Scientifique (Bac C)', desc: 'Obtention du BAC C au Bénin.', side: 'left', done: true },
    { id: 2, year: '2023 - 2028', title: 'Epitech Bénin', desc: 'Cursus d\'expertise en ingénierie informatique (actuellement en cours).', side: 'right', done: false },
    { id: 3, year: '2024 (4 mois)', title: 'Développeur Web', desc: 'Stage de 1ère année chez MarketOptionCenter.', side: 'left', done: true },
    { id: 4, year: '2025 (2 mois)', title: 'Formateur Robotique', desc: 'Stage chez Digital Valeey. Animation d\'ateliers et formation en robotique.', side: 'right', done: true },
    { id: 5, year: 'Depuis Nov. 2025', title: 'Chef de Projet Tech', desc: 'Association Techbo Robotique. Gestion d\'équipe et pilotage de projets innovants.', side: 'left', done: true },
    { id: 6, year: 'Demain', title: 'VOTRE ENTREPRISE', desc: 'Prêt à apporter mon énergie et mon envie d\'apprendre à vos équipes.', side: 'right', highlight: true, done: false },
]

export default function Roadmap() {
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })

    // Magic glowing line height based on scroll
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <section className="roadmap-section" id="parcours">
            <div className="container roadmap-wrapper" ref={containerRef}>

                <div className="section-header text-center">
                    <h2 className="section-title">Mon Parcours</h2>
                    <p className="section-subtitle">Level up constant. De la théorie à la pratique.</p>
                </div>

                <div className="timeline-container">

                    {/* Animated Main Line */}
                    <div className="timeline-line-bg"></div>
                    <motion.div
                        className="timeline-line-fill"
                        style={{ height: lineHeight }}
                    />

                    {ROADMAP_DATA.map((node, index) => (
                        <motion.div
                            key={node.id}
                            className={`timeline-node-wrapper ${node.side} ${node.highlight ? 'highlight-node' : ''}`}
                            initial={{ opacity: 0, x: node.side === 'left' ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >

                            <div className="timeline-content glass-panel">
                                <span className="node-year text-accent">{node.year}</span>
                                <h3 className="node-title">{node.title}</h3>
                                <p className="node-desc">{node.desc}</p>
                            </div>

                            {/* Glowing Dot overlay */}
                            <div className="timeline-dot-container">
                                <div className={`timeline-dot ${node.highlight ? 'pulse-heavy' : ''}`}>
                                    {node.done ?
                                        <CheckCircle2 className="node-icon done" size={16} /> :
                                        <CircleDashed className="node-icon pending text-accent" size={16} />
                                    }
                                </div>
                            </div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    )
}
