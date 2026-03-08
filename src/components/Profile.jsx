import { motion } from 'framer-motion'
import { Target, Zap, Briefcase } from 'lucide-react'

export default function Profile() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <section className="profile-section" id="profile">
            <div className="container profile-container">

                <motion.div
                    className="profile-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="section-title">Qui suis-je ?</h2>
                    <p className="profile-subtitle">Un profil hybride taillé pour l'innovation</p>
                </motion.div>

                <motion.div
                    className="profile-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Box 1: Vision */}
                    <motion.div className="profile-card glass-panel" variants={itemVariants}>
                        <div className="card-icon-wrapper">
                            <Zap className="card-icon text-accent" size={28} />
                        </div>
                        <h3 className="card-title">Polyvalence</h3>
                        <p className="card-text">
                            Mon parcours académique à Epitech Bénin, couplé à ma passion pour la robotique, me permet de voir les projets dans leur ensemble. Que ce soit du code web fluide ou du hardware, je construis des solutions complètes.
                        </p>
                    </motion.div>

                    {/* Box 2: Objectif */}
                    <motion.div className="profile-card glass-panel" variants={itemVariants}>
                        <div className="card-icon-wrapper">
                            <Target className="card-icon text-accent" size={28} />
                        </div>
                        <h3 className="card-title">Apprentissage Autonome</h3>
                        <p className="card-text">
                            J'ai une soif constante de découverte. Mon plus grand atout est ma proactivité et ma volonté d'apprendre par moi-même. Face à la nouveauté, j'explore, je maîtrise rapidement la théorie experte, et j'acquiers de nouvelles compétences techniques.
                        </p>
                    </motion.div>

                    {/* Box 3: Valeur ajoutée */}
                    <motion.div className="profile-card glass-panel" variants={itemVariants}>
                        <div className="card-icon-wrapper">
                            <Briefcase className="card-icon text-accent" size={28} />
                        </div>
                        <h3 className="card-title">Expérience Pratique</h3>
                        <p className="card-text">
                            Grâce à mes stages (Développeur Web, Formateur Robotique) et mon rôle de Chef de Projet pour l'asso Techbo Robotique, j'ai acquis le sens des responsabilités, la gestion transversale et le goût du travail en équipe.
                        </p>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    )
}
