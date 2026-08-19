export const stats = [
    { to: 14, suffix: '+', label: 'Projets menés à terme' },
    { to: 3, suffix: '', label: 'Expériences professionnelles' },
    { to: 2, suffix: '', label: 'Piles maîtrisées : soft + hard' },
    { to: 2028, suffix: '', label: 'Diplôme Epitech en vue' },
]

export const pillars = [
    {
        num: 'I',
        title: "Du capteur à l'écran",
        desc: "J'écris le firmware qui lit le capteur ET l'application qui l'affiche. Pas de passage de main, donc pas de perte d'information.",
    },
    {
        num: 'II',
        title: "J'apprends seul, vite",
        desc: 'Raytracer en C++, cryptographie PGP, Kubernetes, vision par ordinateur : appris en autonomie, puis livrés en projet réel.',
    },
    {
        num: 'III',
        title: 'Déjà en responsabilité',
        desc: 'Stage en développement web, formateur en robotique, puis chef de projet tech pour Techbo Robotique. Je tiens un délai et une équipe.',
    },
]

const rawProjects = [
    {
        cat: 'Plateforme · Santé',
        title: 'Sang +',
        desc: 'Mise en relation entre donneurs de sang et structures de santé : inscription des donneurs, appels aux dons ciblés et suivi des demandes urgentes.',
        tags: ['React', 'Node.js', 'PostgreSQL'],
        link: 'https://sang-plus-zeta.vercel.app/',
    },
    {
        cat: 'Automatisation · Administration',
        title: 'Visa & Haj Bénin',
        desc: 'Automatisation de la soumission et de la gestion des demandes de visa, avec suivi étape par étape du parcours des pèlerins.',
        tags: ['Workflow', 'Node.js', 'Dashboard'],
    },
    {
        cat: 'E-commerce',
        title: 'Boutique en ligne',
        desc: 'Catalogue, panier, tunnel de commande et back-office complet de gestion des produits et des commandes.',
        tags: ['React', 'Paiement', 'PostgreSQL'],
        link: 'https://dmoc-1.onrender.com/dmoc/home',
    },
    {
        cat: 'Fullstack · API',
        title: 'AREA (Action/REAction)',
        desc: "Plateforme d'automatisation type Zapier : interconnexion dynamique de services web via leurs API, avec authentification OAuth.",
        tags: ['React', 'OAuth', 'Docker'],
    },
    {
        cat: 'IoT · Agritech',
        title: 'Smart Irrigation',
        desc: "Boîtier d'arrosage autonome : capteurs d'humidité et météo, déclenchement automatique des vannes, application mobile de pilotage à distance.",
        tags: ['ESP32', 'Capteurs', 'App mobile'],
    },
    {
        cat: 'Robotique · Mécanique',
        title: 'Bras robot',
        desc: "Conception mécanique et programmation d'un bras robotisé interactif : cinématique, contrôle des servos, interface de commande.",
        tags: ['Cinématique', 'Servos', 'C++'],
    },
    {
        cat: 'Robotique · Vision',
        title: 'Main robotisée',
        desc: 'Main robotique qui reproduit en temps réel les gestes humains analysés par vision par ordinateur.',
        tags: ['OpenCV', 'Python', 'Hardware'],
    },
    {
        cat: 'Énergie · Embarqué',
        title: 'Sauvegarde énergétique',
        desc: "Boîtier de contrôle des circuits énergétiques : un jeu de capteurs surveille la consommation et bascule les circuits pour préserver l'énergie disponible.",
        tags: ['Firmware', 'Capteurs', 'Électronique'],
        link: 'https://powerlense-v1-sigma.vercel.app/',
    },
]

export const projects = rawProjects.map((p, i) => ({ ...p, num: String(i + 1).padStart(2, '0') }))

const levelColorVar = {
    solide: 'var(--accent)',
    'à l’aise': 'var(--text)',
    'en cours': 'var(--accent-2)',
    notions: 'var(--muted)',
}

const mkItems = (arr) => arr.map(([name, level]) => ({ name, level, colorVar: levelColorVar[level] || 'var(--soft)' }))

export const skillGroups = [
    {
        title: 'Logiciel & web',
        colorVar: 'var(--accent)',
        note: 'Ma base quotidienne, utilisée sur des projets livrés.',
        items: mkItems([
            ['JavaScript / TypeScript', 'solide'],
            ['React / Next.js', 'solide'],
            ['Node.js / Express', 'solide'],
            ['Python', 'à l’aise'],
            ['PostgreSQL / SQL', 'à l’aise'],
            ['PHP', 'à l’aise'],
            ['Docker / CI-CD', 'à l’aise'],
        ]),
    },
    {
        title: 'Embarqué & robotique',
        colorVar: 'var(--accent-2)',
        note: 'Le terrain : capteurs, cartes, mécanique.',
        items: mkItems([
            ['C / Arduino', 'solide'],
            ['ESP32 / IoT', 'solide'],
            ['Électronique & capteurs', 'à l’aise'],
            ['C++', 'à l’aise'],
            ['OpenCV / vision', 'à l’aise'],
            ['ROS', 'notions'],
            ['CAO / impression 3D', 'notions'],
        ]),
    },
    {
        title: 'IA & outils du quotidien',
        colorVar: 'var(--accent-3)',
        note: 'Utilisés pour aller plus vite, jamais pour livrer à l’aveugle.',
        items: mkItems([
            ['Claude', 'solide'],
            ['ChatGPT', 'solide'],
            ['GitHub Copilot', 'à l’aise'],
            ['Cursor', 'à l’aise'],
            ['Git / GitHub', 'solide'],
            ['Figma', 'notions'],
            ['Linux / shell', 'à l’aise'],
        ]),
    },
]

export const passions = ['Voyage & sport', 'Robotique', 'Film & animé', 'Apprentissage autonome']
export const languages = ['Français — courant', 'Anglais — niveau intermédiaire']

export const marquee = [
    'C / C++', 'React', 'Node.js', 'ESP32', 'Python', 'OpenCV',
    'ROS', 'Docker', 'PostgreSQL', 'Arduino', 'Next.js', 'Firmware',
]

const rawTimeline = [
    { year: '2023', title: 'Baccalauréat scientifique (Bac C)', desc: 'Obtenu au Bénin.' },
    { year: '2023 — 2028', title: 'Epitech Bénin', desc: "Cursus d'expertise en ingénierie informatique, en cours." },
    { year: '2024 · 4 mois', title: 'Développeur web — MarketOptionCenter', desc: 'Stage de première année : développement web en conditions réelles.' },
    { year: '2025 · 2 mois', title: 'Formateur robotique — Digital Valeey', desc: "Animation d'ateliers et formation en robotique auprès de débutants." },
    { year: 'Depuis nov. 2025', title: 'Chef de projet tech — Techbo Robotique', desc: "Gestion d'équipe et pilotage de projets innovants au sein de l'association." },
    { year: 'Prochainement', title: 'Votre entreprise', desc: "Prêt à apporter mon énergie et ma capacité d'apprentissage à vos équipes.", highlight: true },
]

export const timeline = rawTimeline
