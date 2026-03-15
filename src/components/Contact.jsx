import { useState } from 'react'
import { Send, MapPin, Mail, Linkedin, Github, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState({ type: null, message: '' }) // 'success', 'error', or null
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setStatus({ type: null, message: '' })

        try {
            const response = await fetch("https://formsubmit.co/ajax/malickrafick456@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Nom: formData.name,
                    Email: formData.email,
                    Message: formData.message,
                    _subject: `Nouveau contact portfolio: ${formData.name}`,
                    _template: "table"
                })
            });

            if (response.ok) {
                setStatus({ 
                    type: 'success', 
                    message: 'Message envoyé avec succès ! Je vous répondrai bientôt.' 
                })
                setFormData({ name: '', email: '', message: '' })
            } else {
                throw new Error('Erreur réseau lors de l\'envoi du message');
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error)
            setStatus({ 
                type: 'error', 
                message: 'Erreur lors de l\'envoi du message. Veuillez réessayer ou me contacter directement par email.' 
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="contact-section" id="contact">
            <div className="container contact-container">

                <div className="section-header text-center">
                    <h2 className="section-title">Prenons Contact</h2>
                    <p className="section-subtitle">
                        Une idée de projet, une offre d'emploi ou juste l'envie de discuter tech ?
                    </p>
                </div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info glass-panel"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>Informations</h3>
                        <p>Disponible pour relever vos plus grands défis technologiques.</p>

                        <div className="info-list">
                            <div className="contact-item glass-panel">
                                <div className="c-icon"><Mail size={24} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>malickrafick456@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-item glass-panel">
                                <div className="c-icon"><Phone size={24} /></div>
                                <div>
                                    <h4>Téléphone</h4>
                                    <p>+229 0151588257</p>
                                </div>
                            </div>

                            <div className="contact-item glass-panel">
                                <div className="c-icon"><MapPin size={24} /></div>
                                <div>
                                    <h4>Localisation</h4>
                                    <p>Bénin</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-icon"><Linkedin size={24} /></a>
                            <a href="https://github.com/rafickMalick" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={24} /></a>
                        </div>
                    </motion.div>

                    <form className="contact-form glass-panel" onSubmit={handleSubmit}>
                        {status.type && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`status-message ${status.type === 'success' ? 'success' : 'error'}`}
                            >
                                {status.type === 'success' ? (
                                    <CheckCircle size={20} />
                                ) : (
                                    <AlertCircle size={20} />
                                )}
                                <span>{status.message}</span>
                            </motion.div>
                        )}

                        <div className="form-group">
                            <label>Nom Complet</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe" 
                                required 
                                disabled={isLoading}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@company.com" 
                                required 
                                disabled={isLoading}
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea 
                                rows="4" 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Parlez-moi de votre projet..." 
                                required 
                                disabled={isLoading}
                            ></textarea>
                        </div>
                        <button 
                            className="btn-primary w-full shadow-lg" 
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    <span>Envoi en cours...</span>
                                </>
                            ) : (
                                <>
                                    <span>Envoyer le message</span>
                                    <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>

                </div>

            </div>
        </section>
    )
}
