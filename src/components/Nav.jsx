export default function Nav({ theme, toggleTheme }) {
    return (
        <div className="nav">
            <span className="nav-name">Rafick Malick</span>
            <div className="nav-links">
                <a href="#travaux" className="nav-link">Travaux</a>
                <a href="#outillage" className="nav-link">Outillage</a>
                <a href="#parcours" className="nav-link">Parcours</a>
                <button
                    type="button"
                    className="nav-theme-btn"
                    onClick={toggleTheme}
                    aria-label="Changer de thème"
                >
                    {theme === 'light' ? 'Sombre' : 'Clair'}
                </button>
                <a href="#contact" className="nav-cta">Me recruter</a>
            </div>
        </div>
    )
}
