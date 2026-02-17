
import React from 'react';

const Methodology: React.FC = () => {
    const timelineItems = [
        {
            title: "A Essência",
            description: "O Projeto Reputação Digital é um processo estratégico para profissionais que desejam um posicionamento de alto ticket e uma produção de conteúdo alinhada à própria reputação. Eu conduzo pessoalmente cada etapa."
        },
        {
            title: "Análise e Estrutura",
            description: "Analiso como o mercado percebe você hoje, identifico desalinhamentos e estruturo o território de valor que precisa ser ocupado. Defino a tese central que sustenta sua autoridade e organizo sua narrativa profissional com coerência estratégica."
        },
        {
            title: "Arquitetura de Conteúdo",
            description: "A partir disso, desenho uma arquitetura de conteúdo que reforça sua reputação e sustenta seu posicionamento no nível que você deseja atuar."
        },
        {
            title: "Clareza Total",
            description: "Você sai com clareza sobre:",
            list: [
                "Como deve se posicionar para operar em alto ticket",
                "Que discurso fortalece sua autoridade",
                "Que tipo de cliente passa a atrair",
                "Como produzir conteúdo com função estratégica",
                "Quais ajustes elevam sua percepção de valor"
            ]
        },
        {
            title: "Entrega e Acompanhamento",
            description: "Ao final, você recebe um plano estratégico personalizado, estruturado em PDF e quadro no Notion, além de acompanhamento direto comigo para garantir aplicação consistente.",
            quote: "Eu não entrego posts. Entrego direção estratégica para posicionamento de alto valor."
        }
    ];

    return (
        <section className="py-10 md:py-20 bg-[#050505] animate-on-load animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-black text-center uppercase mb-20">O Projeto</h2>

                <div className="relative">
                    <div className="absolute top-0 left-4 w-0.5 h-full bg-pink-500/30" aria-hidden="true"></div>

                    <div className="space-y-16">
                        {timelineItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative pl-12 md:pl-16"
                                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            >
                                <div className="absolute top-1 left-4 w-8 h-8 rounded-full flex items-center justify-center transform -translate-x-1/2">
                                    <div className={`w-full h-full rounded-full ${index === 0 ? 'bg-[#EC4899]' : 'border-2 border-[#EC4899]'}`}></div>
                                </div>

                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase text-white">{item.title}</h3>
                                    <p className="mt-4 text-lg text-gray-400 leading-relaxed">{item.description}</p>

                                    {item.list && (
                                        <div className="mt-6 bg-black/50 p-6 rounded-lg border border-gray-800">
                                            <ul className="space-y-3">
                                                {item.list.map((listItem, listIndex) => (
                                                    <li key={listIndex} className="flex items-start">
                                                        <span className="flex-shrink-0 mt-1.5 w-2 h-2 bg-[#EC4899] rounded-full mr-4"></span>
                                                        <span className="text-gray-300">{listItem}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {item.quote && (
                                        <div className="mt-6 border-l-4 border-[#EC4899] pl-6">
                                            <p className="text-lg text-gray-300 italic">"{item.quote}"</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
