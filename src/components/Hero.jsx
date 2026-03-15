import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {

    const handleDownloadCV = () => {
        // Download CV
        const link = document.createElement('a');
        link.href = '/cv/MALICK_CV-EN.pdf';
        link.download = 'MALICK_CV-EN.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="hero-section">
            <div className="container hero-container">

                {/* Left Side: Copywriting */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <span className="pulse-dot"></span>
                        Disponible pour de nouveaux défis
                    </motion.div>

                    <h1 className="hero-title">
                        Je suis Rafick Malick. <br />
                        <span className="text-gradient">Donner vie aux idées.</span>
                    </h1>

                    <p className="hero-description">
                        Étudiant à Epitech Bénin, je suis passionné par l'informatique, la robotique et la gestion de projet.
                        Ma plus grande force ? Mon incroyable capacité d'apprentissage autonome. Je m'adapte vite, j'assimile
                        par moi-même de nouveaux concepts et je transforme vos idées en réalité fonctionnelle.
                    </p>

                    <div className="hero-actions">
                        <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                            Explorer mes projets
                            <ArrowRight size={20} />
                        </button>
                        
                        <div className="relative inline-block">
                            <button 
                                className="btn-secondary" 
                                onClick={handleDownloadCV}
                            >
                                Télécharger mon CV
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Photo & Floating Elements */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    <div className="photo-container glass-panel">
                        <div className="photo-inner">
                            <img src="/profile.jpeg" alt="Rafick Malick" className="profile-img" />
                        </div>

                        {/* Floating badges */}
                        <motion.div
                            className="floating-badge badge-1 glass-panel"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >
                            💻 Dev Fullstack
                        </motion.div>
                        <motion.div
                            className="floating-badge badge-2 glass-panel"
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        >
                            🤖 Roboticien
                        </motion.div>
                        <motion.div
                            className="floating-badge badge-3 glass-panel"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                        >
                            📊 Chef de Projet
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
