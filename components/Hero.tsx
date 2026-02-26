import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-12">
            <div className="relative container mx-auto px-6 text-center text-text-main z-10">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-up">
                    Móveis sob medida em madeira pinus, feitos com arte e dedicação
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    Transformamos suas ideias em móveis únicos e personalizados, com acabamento artesanal e qualidade incomparável.
                </p>
                <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-accent transition-colors duration-300"
                    >
                        Solicitar Orçamento
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
