import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Info, X } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
    const [showPopup, setShowPopup] = useState(false);

    const handleDownloadCV = () => {
        // Show popup
        setShowPopup(true);
        
        // Download CV
        const link = document.createElement('a');
        link.href = '/cv/MALICK_CV-EN.pdf';
        link.download = 'MALICK_CV-EN.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Hide popup after 30 seconds
        setTimeout(() => {
            setShowPopup(false);
        }, 30000);
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
                            
                            {/* Popup */}
                            <AnimatePresence>
                                {showPopup && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute top-full mt-4 left-0 w-80 bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] z-50 flex flex-col gap-3"
                                        style={{ translateX: "-20%" }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl pointer-events-none" />
                                        
                                        <div className="flex justify-between items-start relative z-10 mb-1">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                                    <Info size={16} />
                                                </div>
                                                <h4 className="text-sm font-semibold text-white">Version française indisponible</h4>
                                            </div>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setShowPopup(false);
                                                }}
                                                className="text-white/40 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10 shrink-0"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                        <p className="text-sm text-gray-300 leading-relaxed font-light relative z-10">
                                            Le CV en français n'est pas encore disponible. La version anglaise a été téléchargée.
                                        </p>
                                        <div className="mt-1 pt-3 border-t border-white/10 relative z-10">
                                            <p className="text-xs text-blue-300/90 leading-relaxed">
                                                💡 N'hésitez pas à m'écrire via le formulaire en bas de page pour avoir une version plus adéquate de mon profil en fonction de votre secteur.
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
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
