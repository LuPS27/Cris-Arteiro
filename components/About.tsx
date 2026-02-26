import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white/60 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in-up">
                        <img
                            src="https://iili.io/qfqnVXn.jpg"
                            alt="Madeira Pinus de alta qualidade"
                            className="rounded-lg shadow-2xl w-full h-auto object-cover max-h-[500px]"
                        />
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre o Marceneiro</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>Com anos de experiência em marcenaria artesanal, Cris Arteiro se dedica a criar móveis sob medida que combinam funcionalidade, beleza e durabilidade. Cada peça é cuidadosamente planejada e executada com atenção aos mínimos detalhes.</p>
                            <p>Trabalhando exclusivamente com madeira pinus de alta qualidade, oferecemos soluções personalizadas para todos os ambientes da sua casa ou empresa. Do projeto à instalação, acompanhamos cada etapa para garantir sua total satisfação.</p>
                            <p className="font-semibold text-text-main">Nossos diferenciais: móveis 100% personalizados, acabamento artesanal impecável e atendimento próximo ao cliente.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
