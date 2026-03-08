import { motion } from 'framer-motion'
import { Code, Database, Cpu, Settings, Wrench, TerminalSquare, Compass, Gamepad2, Server, Layers, Monitor, HardDrive } from 'lucide-react'

// Passions
const PASSIONS = [
    { id: 1, name: 'Voyage & Sport', icon: Compass, color: 'text-blue-500' },
    { id: 2, name: 'Robotique', icon: Cpu, color: 'text-orange-500' },
    { id: 3, name: 'Film & Animé', icon: Gamepad2, color: 'text-pink-500' },
    { id: 4, name: 'Apprentissage Autonome', icon: Wrench, color: 'text-purple-500' },
]

export default function Skills({ theme }) {

    const SKILLS_IT = [
        { name: 'C / C++ (Système & Raytracing)', icon: Code, level: 95 },
        { name: 'React / Next.js', icon: Monitor, level: 90 },
        { name: 'Node.js / Express', icon: Server, level: 85 },
        { name: 'Python (IA & Algorithmes)', icon: TerminalSquare, level: 85 },
        { name: 'PHP / PostgreSQL', icon: Database, level: 80 },
        { name: 'Docker / CI-CD (DevOps)', icon: Layers, level: 80 },
    ]

    const SKILLS_ROBOTIQUE = [
        { name: 'C++ / ROS', icon: Code, level: 90 },
        { name: 'Arduino / IoT', icon: Cpu, level: 95 },
        { name: 'OpenCV / Vision', icon: TerminalSquare, level: 85 },
        { name: 'Python / Machine Learning', icon: Server, level: 80 },
        { name: 'Électronique / HardWare', icon: HardDrive, level: 85 },
        { name: 'CAO / Impression 3D', icon: Wrench, level: 80 },
    ]

    const activeSkills = theme === 'it' ? SKILLS_IT : SKILLS_ROBOTIQUE

    return (
        <section className="skills-section" id="skills">
            <div className="container skills-wrapper">

                <div className="skills-grid">

                    {/* Technique */}
                    <motion.div
                        className="skills-box glass-panel"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="section-title-sm">Hard Skills ({theme.toUpperCase()})</h3>

                        <div className="skill-bars">
                            {activeSkills.map((skill, index) => (
                                <div key={skill.name} className="skill-item">
                                    <div className="skill-header">
                                        <div className="skill-name">
                                            <skill.icon size={16} className="text-accent" />
                                            <span>{skill.name}</span>
                                        </div>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar-bg">
                                        <motion.div
                                            className="skill-bar-fill"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Passions */}
                    <motion.div
                        className="passions-box glass-panel"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="section-title-sm">Mes Passions & Intérêts</h3>

                        <div className="passions-grid">
                            {PASSIONS.map((passion, index) => (
                                <motion.div
                                    key={passion.id}
                                    className="passion-card"
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="passion-icon-bg">
                                        <passion.icon size={28} className={passion.color} />
                                    </div>
                                    <span className="passion-name">{passion.name}</span>
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    )
}
