import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronDown, ChevronUp, X } from 'lucide-react'
import { useState } from 'react'

const PROJECTS = {
    it: [
        {
            id: 1,
            title: 'AREA (Action/REAction)',
            desc: 'Plateforme d\'automatisation (Zapier-like) permettant l\'interconnexion dynamique entre différents services web (API).',
            tags: ['React', 'Node.js', 'OAuth', 'Docker'],
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
            link: ''
        },
        {
            id: 2,
            title: 'RayTracer',
            desc: 'Moteur de rendu 3D par lancer de rayons (Raytracing) écrit from scratch en C++. Gestion de la lumière, ombres et réflexions.',
            tags: ['C++', 'Mathématiques', '3D Graphics', 'SFML'],
            image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'
        },
        {
            id: 3,
            title: 'R-Type',
            desc: 'Reproduction du jeu vidéo mythique R-Type avec un moteur de jeu multijoueur (Client/Serveur UDP) robuste et une architecture ECS.',
            tags: ['C++', 'ECS', 'Network UDP', 'Game Engine'],
            image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 8,
            title: 'Arcade',
            desc: 'Architecture modulaire pour lancer des mini-jeux. Chargement dynamique de bibliothèques (core, games, grapĥics).',
            tags: ['C++', 'OOP', 'Dynamic Libraries (dlfcn)'],
            image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop'
        },
        {
            id: 9,
            title: 'Gomoku IA',
            desc: 'Création d\'une Intelligence Artificielle (MiniMax / Alpha-Beta Pruning) pour jouer et gagner au jeu de plateau Gomoku.',
            tags: ['Python', 'IA', 'Algorithmes'],
            image: 'https://images.unsplash.com/photo-1585822765275-397cb4e819cc?q=80&w=2000&auto=format&fit=crop'
        },
        {
            id: 10,
            title: 'Plazza',
            desc: 'Simulation d\'une pizzeria distribuée. Focus avancé sur l\'IPC (Inter-Process Communication), les Threads et les Mutex en C++.',
            tags: ['C++', 'Multithreading', 'IPC', 'Concurrence'],
            image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop'
        },
        {
            id: 11,
            title: 'Whanos',
            desc: 'Projet DevOps : Création d\'une plateforme CI/CD générique pouvant détecter, builder et packager automatiquement n\'importe quel langage.',
            tags: ['Jenkins', 'Docker', 'Kubernetes', 'DevOps'],
            image: 'https://images.unsplash.com/photo-1667372335198-97fced24f762?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 12,
            title: 'MyFTP',
            desc: 'Développement complet d\'un serveur FTP (File Transfer Protocol) en langage C, gérant les connexions TCP/IP réseaux de façon concurrente.',
            tags: ['C', 'Sockets', 'Network TCP', 'Système'],
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop'
        },
        {
            id: 13,
            title: 'My PGP',
            desc: 'Projet de cryptographie : Implémentation du système PGP (Pretty Good Privacy) pour sécuriser, chiffrer et signer électroniquement des donneés.',
            tags: ['C', 'Cryptographie', 'RSA', 'Sécurité'],
            image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 14,
            title: 'Jetpack',
            desc: 'Serveur de jeu réseau multi-client (Network Programming) reprenant un gameplay de course en scrolling horizontal.',
            tags: ['C', 'Réseau', 'Protocoles', 'Multijoueur'],
            image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=2070&auto=format&fit=crop'
        }
    ],
    robotique: [
        {
            id: 4,
            title: 'Bras Robot (Hugin Face)',
            desc: 'Conception et programmation d\'un bras interactif (Hug In Face).',
            tags: ['Robotique', 'Cinématique', 'Hardware'],
            image: 'https://images.unsplash.com/photo-1533022230198-d1fa78bd8add?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 5,
            title: 'Main Bionique',
            desc: 'Reproduction des gestes de la main humaine analysée par vision par ordinateur.',
            tags: ['OpenCV', 'Computer Vision', 'IA'],
            image: 'https://images.unsplash.com/photo-1620912189868-307842617fdd?q=80&w=2069&auto=format&fit=crop'
        },
        {
            id: 6,
            title: 'SpiderBot',
            desc: 'Robot arachnéen télécommandé via une interface mobile avec contrôle vocal.',
            tags: ['IoT', 'Voice Control', 'Hardware'],
            image: 'https://images.unsplash.com/photo-1631557065099-2a2b0c90d565?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 7,
            title: 'Miroir Magique IA',
            desc: 'Reproduction d\'un Magic Mirror avec IA adaptative pour suggestions vestimentaires via météo.',
            tags: ['IA', 'Computer Vision', 'Python'],
            image: 'https://images.unsplash.com/photo-1542840410-b3bd3fa1bd06?q=80&w=2068&auto=format&fit=crop'
        }
    ]
}

export default function Projects({ theme }) {
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // If showAll is true, combine both arrays. Otherwise, filter by theme and take only first 3.
    let currentProjects = showAll
        ? [...PROJECTS.it, ...PROJECTS.robotique]
        : (PROJECTS[theme] || PROJECTS.it).slice(0, 3);

    const handleLinkClick = (e, project, isDirectLink) => {
        // If it's a direct link and the project has a specific 'link' property defined (like Gastronome), let it navigate naturally.
        if (isDirectLink && project.link) return;

        // Otherwise, prevent default and show the popup
        e.preventDefault();
        setSelectedProject(project);
    };

    return (
        <section className="projects-section" id="projects">
            <div className="container projects-container">

                <div className="section-header">
                    <h2 className="section-title">{showAll ? "Tous Mes Projets" : "Mes Projets Phares"}</h2>
                    <p className="section-subtitle">
                        {showAll
                            ? "Aperçu complet de l'ensemble de mes réalisations passionnées."
                            : `Aperçu de mes meilleures réalisations en ${theme === 'it' ? 'IT & Logiciel' : 'Robotique & Hardware'}.`}
                    </p>
                </div>

                <motion.div
                    layout
                    className="projects-grid"
                >
                    <AnimatePresence mode="popLayout">
                        {currentProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                className="project-card glass-panel"
                            >
                                <div className="project-image-wrapper">
                                    <div className="project-placeholder-img">
                                        <img src={project.image} alt={project.title} />
                                    </div>
                                </div>

                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.desc}</p>

                                    <div className="project-tags">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="tag glass-panel">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        <a href="#" onClick={(e) => handleLinkClick(e, project, false)} className="p-link"><Github size={18} /> Code</a>
                                        {project.link ? (
                                            <a href={project.link} onClick={(e) => handleLinkClick(e, project, true)} target="_blank" rel="noreferrer" className="p-link text-accent">
                                                <ExternalLink size={18} /> Direct
                                            </a>
                                        ) : (
                                            <a href="#" onClick={(e) => handleLinkClick(e, project, true)} className="p-link"><ExternalLink size={18} /> Direct</a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="text-center" style={{ marginTop: '4rem' }}>
                    <button
                        className="btn-secondary"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? (
                            <>Réduire <ChevronUp size={20} /></>
                        ) : (
                            <>Voir plus de projets <ChevronDown size={20} /></>
                        )}
                    </button>
                </div>

                {/* Popup Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            className="modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                className="modal-content glass-panel"
                                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: 20, opacity: 0, scale: 0.95 }}
                                onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
                            >
                                <button className="modal-close" onClick={() => setSelectedProject(null)}>
                                    <X size={24} />
                                </button>
                                <h3 className="modal-title">{selectedProject.title}</h3>
                                <p className="modal-text">
                                    Intrigué par ce projet ? 🚀 <br />
                                    Son code source ou son accès direct n'est pas public par défaut, mais je serais ravi(e) d'en discuter avec vous !
                                </p>
                                <a href="#contact" className="btn-primary" onClick={() => setSelectedProject(null)}>
                                    Contactez-moi pour plus d'informations
                                </a>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    )
}
