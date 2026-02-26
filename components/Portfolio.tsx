import React from 'react';

const Portfolio = () => {
    const projects = [
        { id: 1, title: 'Estante Personalizada', image: 'https://iili.io/qfKxXKx.jpg' },
        { id: 2, title: 'Mesa de Jantar', image: 'https://iili.io/qfKTuMg.jpg' },
        { id: 3, title: 'Guarda-Roupa Planejado', image: 'https://iili.io/qfqzSII.jpg' },
        { id: 4, title: 'Móvel Infantil', image: 'https://iili.io/qfq7g9a.jpg' },
    ];

    return (
        <section id="portfolio" className="py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">Portfólio de Trabalhos</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    Conheça alguns dos projetos que realizamos com dedicação e qualidade.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="bg-card rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${(index + 2) * 100}ms` }}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-80 object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
