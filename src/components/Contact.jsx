import { RevealLine } from './reveal'

export default function Contact() {
    const year = new Date().getFullYear()

    return (
        <section className="contact-section" id="contact" aria-labelledby="contact-title">
            <div className="contact-inner">
                <div className="section-label">05 — Suite</div>
                <h2 id="contact-title" className="contact-title">
                    <RevealLine as="span">Le prochain projet</RevealLine>
                    <RevealLine as="span" index={1}>est le vôtre.</RevealLine>
                </h2>
                <p className="contact-lead">
                    Une offre, un stage, un prototype à sortir du garage ? Écrivez-moi : je réponds vite et je vous dis franchement si je suis le bon profil.
                </p>

                <div className="contact-grid">
                    <a href="mailto:malickrafick456@gmail.com" className="contact-cell">
                        <div className="contact-cell-label">Email</div>
                        <div className="contact-cell-value">malickrafick456@gmail.com</div>
                    </a>
                    <a href="tel:+2290151588257" className="contact-cell">
                        <div className="contact-cell-label">Téléphone</div>
                        <div className="contact-cell-value">+229 01 51 58 82 57</div>
                    </a>
                    <a href="https://github.com/rafickMalick" target="_blank" rel="noreferrer" className="contact-cell">
                        <div className="contact-cell-label">Code</div>
                        <div className="contact-cell-value">github.com/rafickMalick</div>
                    </a>
                </div>

                <div className="footer-row">
                    <span>Rafick Malick — {year}</span>
                    <span>Epitech Bénin · Disponible en remote</span>
                </div>
            </div>
        </section>
    )
}
