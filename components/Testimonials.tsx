import React, { useState } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([
        { id: 1, name: 'Maria Silva', content: 'Trabalho impecável! A estante ficou exatamente como eu imaginava. Recomendo muito!', rating: 5 },
        { id: 2, name: 'João Santos', content: 'Qualidade excepcional e atendimento personalizado. Meus móveis ficaram lindos!', rating: 5 },
        { id: 3, name: 'Ana Paula', content: 'Profissional dedicado e caprichoso. O acabamento é perfeito!', rating: 5 },
    ]);

    const [formData, setFormData] = useState({ name: '', content: '' });
    const [currentRating, setCurrentRating] = useState(5);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTestimonial = {
            id: Date.now(),
            name: formData.name,
            content: formData.content,
            rating: currentRating,
        };
        setTestimonials([...testimonials, newTestimonial]);
        setSubmitted(true);
    };

    const renderStars = (rating: number, interactive = false) => {
        return (
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`h-5 w-5 transition-colors ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                            } ${interactive ? 'cursor-pointer' : ''}`}
                        onClick={interactive ? () => setCurrentRating(star) : undefined}
                    />
                ))}
            </div>
        );
    };

    return (
        <section id="testimonials" className="py-20 bg-white/60 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Depoimentos de Clientes</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Veja o que nossos clientes dizem sobre nosso trabalho.</p>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-white p-6 rounded-lg shadow-lg animate-fade-in-up">
                            <div className="flex items-center mb-4">{renderStars(t.rating)}</div>
                            <p className="text-gray-600 mb-4">"{t.content}"</p>
                            <p className="font-bold text-text-main text-right">- {t.name}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
                    <h3 className="text-2xl font-bold text-center mb-2">Deixe seu Depoimento</h3>
                    <p className="text-center text-gray-600 mb-6">Compartilhe sua experiência com nosso serviço.</p>

                    {submitted ? (
                        <div className="text-center p-4 bg-green-100 text-green-800 rounded-lg animate-fade-in-up">
                            Obrigado pelo seu depoimento!
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Seu nome completo"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <textarea
                                placeholder="Conte-nos sobre sua experiência"
                                required
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            />
                            <div className="flex items-center space-x-2">
                                <label className="text-gray-700">Avaliação:</label>
                                {renderStars(currentRating, true)}
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-accent transition-colors duration-300"
                            >
                                Enviar Depoimento
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
