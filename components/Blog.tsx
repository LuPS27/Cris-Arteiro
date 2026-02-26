import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Comment {
    id: number;
    author: string;
    content: string;
    status: 'approved' | 'pending';
}

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    featuredImage: string;
    author: string;
    publishedAt: string;
    categories: string[];
    comments: Comment[];
}

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
        { id: 1, title: "Vantagens da Madeira Pinus para Móveis", excerpt: "Descubra por que a madeira pinus é uma excelente escolha para móveis sob medida.", content: "<p>A madeira pinus é uma das opções mais versáteis e econômicas para a fabricação de móveis sob medida. Suas características únicas, como leveza, facilidade de trabalho e belo acabamento natural, fazem dela a escolha ideal para diversos tipos de projetos.</p><p>Além disso, por ser uma madeira de reflorestamento, o pinus é uma opção ecologicamente correta e sustentável, contribuindo para a preservação do meio ambiente.</p>", featuredImage: "https://iili.io/qfcoWDN.jpg", author: "Cris Arteiro", publishedAt: "2025-01-15", categories: ["Dicas", "Materiais"], comments: [{ id: 1, author: "Carlos Pereira", content: "Ótimo artigo! Estava em dúvida sobre qual madeira usar e isso me ajudou a decidir.", status: 'approved' }] },
        { id: 2, title: "Como Cuidar de Móveis em Madeira", excerpt: "Dicas essenciais para manter seus móveis de madeira sempre bonitos e duráveis.", content: "<p>Móveis de madeira requerem cuidados especiais para manter sua beleza e durabilidade ao longo dos anos. A limpeza deve ser feita com um pano seco ou levemente umedecido, evitando produtos químicos abrasivos.</p><p>Para proteger contra riscos e manchas, utilize descansos de copos e pratos. A aplicação de cera ou óleo específico para madeira a cada seis meses pode revitalizar o brilho e proteger a peça.</p>", featuredImage: "https://iili.io/qfcXPLP.jpg", author: "Cris Arteiro", publishedAt: "2025-02-10", categories: ["Dicas", "Manutenção"], comments: [] },
        { id: 3, title: "Tendências em Marcenaria para 2026", excerpt: "Conheça as principais tendências em design de móveis e marcenaria para este ano.", content: "<p>O mundo da marcenaria está em constante evolução, e 2026 traz novidades interessantes. Formas orgânicas e arredondadas estão em alta, trazendo suavidade aos ambientes. A combinação de madeira com outros materiais, como metal e pedra, também é uma forte tendência.</p><p>A sustentabilidade continua sendo um pilar, com a valorização de madeiras de demolição e acabamentos naturais que realçam a beleza e a textura do material.</p>", featuredImage: "https://iili.io/qfcQpLP.jpg", author: "Cris Arteiro", publishedAt: "2026-03-05", categories: ["Tendências", "Design"], comments: [{ id: 2, author: "Fernanda Lima", content: "Adorei as dicas de tendência!", status: 'approved' }, { id: 3, author: "Ricardo Alves", content: "Estou pensando em um projeto com formas orgânicas, muito inspirador.", status: 'approved' }] },
        { id: 4, title: "Onde encontrar marceneiro em Contagem, Minas Gerais", excerpt: "Saiba como encontrar os melhores profissionais de marcenaria na região de Contagem, MG.", content: "<p>Se você está em Contagem, Minas Gerais, e procura por um marceneiro de confiança para realizar seus projetos sob medida, está no lugar certo. A região conta com excelentes profissionais capacitados para transformar suas ideias em realidade.</p><p>A Cris Arteiro Marcenaria Sob Medida atende toda a região de Contagem e arredores, oferecendo móveis de alta qualidade em madeira pinus, com acabamento impecável e design exclusivo. Entre em contato conosco para solicitar um orçamento!</p>", featuredImage: "https://iili.io/qf0eorB.jpg", author: "Cris Arteiro", publishedAt: "2026-04-10", categories: ["Localização", "Serviços"], comments: [] },
    ]);

    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [commentData, setCommentData] = useState({ author: '', content: '' });
    const [commentSubmitted, setCommentSubmitted] = useState(false);

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedPost) return;

        const newComment: Comment = {
            id: Date.now(),
            author: commentData.author,
            content: commentData.content,
            status: 'pending'
        };

        const updatedPosts = blogPosts.map(post => {
            if (post.id === selectedPost.id) {
                return { ...post, comments: [...post.comments, newComment] };
            }
            return post;
        });

        setBlogPosts(updatedPosts);
        setSelectedPost({ ...selectedPost, comments: [...selectedPost.comments, newComment] });
        setCommentSubmitted(true);
        setCommentData({ author: '', content: '' });
    };

    return (
        <section id="blog" className="py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Blog</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">Dicas, tendências e novidades sobre marcenaria e móveis sob medida.</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-card rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                            <img src={post.featuredImage} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                    <span>{post.categories.join(', ')}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-text-main group-hover:text-primary transition-colors">{post.title}</h3>
                                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                                <button
                                    onClick={() => { setSelectedPost(post); setCommentSubmitted(false); }}
                                    className="font-semibold text-primary hover:text-accent self-start"
                                >
                                    Leia mais →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedPost && (
                <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4">
                    <div className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-fade-in-up">
                        <button
                            onClick={() => setSelectedPost(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"
                        >
                            <X size={24} />
                        </button>
                        <img src={selectedPost.featuredImage} alt={selectedPost.title} className="w-full h-64 object-cover rounded-t-lg" />
                        <div className="p-8">
                            <div className="text-sm text-gray-500 mb-2">
                                <span>{selectedPost.categories.join(', ')}</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-text-main">{selectedPost.title}</h2>
                            <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />

                            <hr className="my-8" />

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-text-main">Comentários</h3>
                                <div className="space-y-4">
                                    {selectedPost.comments.length > 0 ? (
                                        selectedPost.comments.map(c => (
                                            <div key={c.id} className="bg-background p-4 rounded-lg">
                                                <p className="font-semibold text-text-main">{c.author}</p>
                                                <p className="text-gray-600">{c.content}</p>
                                                {c.status === 'pending' && <p className="text-sm text-yellow-600 italic mt-1">(Aguardando aprovação)</p>}
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500">Ainda não há comentários. Seja o primeiro a comentar!</p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-2xl font-bold text-text-main mb-4">Deixe um comentário</h3>
                                {commentSubmitted ? (
                                    <div className="text-center p-4 bg-green-100 text-green-800 rounded-lg">
                                        Obrigado! Seu comentário foi enviado para moderação.
                                    </div>
                                ) : (
                                    <form onSubmit={handleCommentSubmit} className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Seu nome"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                            value={commentData.author}
                                            onChange={(e) => setCommentData({ ...commentData, author: e.target.value })}
                                        />
                                        <textarea
                                            placeholder="Seu comentário"
                                            required
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                            value={commentData.content}
                                            onChange={(e) => setCommentData({ ...commentData, content: e.target.value })}
                                        />
                                        <button type="submit" className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-accent transition-colors duration-300">
                                            Enviar Comentário
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Blog;
