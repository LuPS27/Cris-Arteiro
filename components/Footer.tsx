import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="bg-text-main text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')}>
                            <img src="https://iili.io/qfF7tqX.png" alt="Cris Arteiro Logo" className="h-20 w-auto" />
                        </a>
                        <p className="text-gray-400">Móveis sob medida em madeira pinus, feitos com arte e dedicação.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="text-gray-400 hover:text-white">Sobre</a></li>
                            <li><a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')} className="text-gray-400 hover:text-white">Portfólio</a></li>
                            <li><a href="#blog" onClick={(e) => handleLinkClick(e, '#blog')} className="text-gray-400 hover:text-white">Blog</a></li>
                            <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-gray-400 hover:text-white">Contato</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Siga-nos</h4>
                        <p className="text-gray-400 mb-4">contato@crisarteiro.exponha.com<br />31 97316-4419</p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/cris_arteiro/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black/20 py-4">
                <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                    © {currentYear} Cris Arteiro Marcenaria Sob Medida. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
