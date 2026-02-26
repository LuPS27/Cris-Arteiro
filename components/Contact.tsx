import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Contato do Site - ${formData.name}`;
        const body = `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`;
        window.location.href = `mailto:contato@crisarteiro.exponha.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setSubmitted(true);
    };

    return (
        <section id="contact" className="py-20 bg-white/60 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Solicite um orçamento ou tire suas dúvidas.</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6">Envie sua Mensagem</h3>
                        {submitted ? (
                            <div className="text-center p-4 bg-green-100 text-green-800 rounded-lg">
                                Obrigado! Seu cliente de e-mail deve abrir em instantes.<br />
                                Se não abrir, envie para <strong>contato@crisarteiro.exponha.com</strong>.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Seu nome completo"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                <input
                                    type="email"
                                    placeholder="Seu melhor e-mail"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <textarea
                                    placeholder="Descreva seu projeto ou dúvida"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                                <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-accent transition-colors duration-300">
                                    Enviar Mensagem
                                </button>
                            </form>
                        )}
                    </div>
                    <div className="space-y-8">
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4">Informações de Contato</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                    <a href="tel:+5531973164419" className="ml-4 text-gray-600 hover:text-primary break-all">31 97316-4419</a>
                                </li>
                                <li className="flex items-start">
                                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                    <a href="mailto:contato@crisarteiro.exponha.com" className="ml-4 text-gray-600 hover:text-primary break-all">contato@crisarteiro.exponha.com</a>
                                </li>
                                <li className="flex items-start">
                                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                    <span className="ml-4 text-gray-600 break-words">Rua Retiro das Esmeraldas, 583, Bairro Retiro<br />Contagem - MG, CEP: 32050-390</span>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-xl shadow-2xl overflow-hidden h-64">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.776615591942!2d-44.05389022485661!3d-19.891694981507963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69528f8f0f0f1%3A0x1a1a1a1a1a1a1a1a!2sR.%20Retiro%20das%20Esmeraldas%2C%20583%20-%20Retiro%2C%20Contagem%20-%20MG%2C%2032050-390!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Google Maps Location"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
