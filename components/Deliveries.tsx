import React from 'react';

const Deliveries: React.FC = () => {
    return (
        <section className="py-10 md:py-20 bg-[#050505]">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Left Column - Pain/Opportunity */}
                    <div className="flex flex-col justify-center space-y-8" data-aos="fade-right">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight">
                            VOCÊ PODE CONTINUAR TENTANDO AJUSTAR <span className="text-beige">SOZINHO</span>, INVESTIR EM <span className="text-beige">EQUIPE</span> E TESTAR CAMINHOS POR MAIS <span className="text-beige">ALGUNS MESES</span>.
                        </h2>
                        <p className="text-xl md:text-2xl font-bold text-[#EC4899] leading-relaxed">
                            Ou pode estruturar sua base estratégica agora e economizar tempo, energia e dinheiro no processo.
                        </p>
                    </div>

                    {/* Right Column - Deliverables */}
                    <div className="bg-[#111111] p-8 md:p-12 rounded-2xl border border-beige/10" data-aos="fade-left">
                        <h3 className="text-2xl md:text-3xl font-black uppercase text-[#EC4899] mb-8 tracking-wide">
                            O QUE VOCÊ RECEBE?
                        </h3>

                        <ul className="space-y-6 text-beige/90 text-lg">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 mt-1.5 w-2 h-2 bg-white rounded-full mr-4"></span>
                                <span>
                                    <strong className="text-white">1 reunião estratégica individual comigo</strong>, via Google Meet, para extração completa de visão, histórico e ambição de posicionamento.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 mt-1.5 w-2 h-2 bg-white rounded-full mr-4"></span>
                                <span>
                                    <strong className="text-white">Diagnóstico detalhado</strong> da sua percepção atual no mercado, com análise de discurso, presença digital e sinais de marca.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 mt-1.5 w-2 h-2 bg-white rounded-full mr-4"></span>
                                <div className="space-y-3">
                                    <strong className="text-white block">Documento estratégico em PDF contendo:</strong>
                                    <ul className="pl-4 space-y-2 border-l border-white/10 ml-1">
                                        <li>— Território de valor definido</li>
                                        <li>— Tese central de posicionamento</li>
                                        <li>— Narrativa profissional estruturada</li>
                                        <li>— Diretrizes claras de comunicação</li>
                                        <li>— Plano de ação estratégico</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 mt-1.5 w-2 h-2 bg-white rounded-full mr-4"></span>
                                <div className="space-y-3">
                                    <strong className="text-white block">Quadro completo no Notion com:</strong>
                                    <ul className="pl-4 space-y-2 border-l border-white/10 ml-1">
                                        <li>— Arquitetura de conteúdo alinhada à reputação</li>
                                        <li>— Editorias estratégicas</li>
                                        <li>— Linhas argumentativas</li>
                                        <li>— Direcionamento prático para aplicação</li>
                                        <li>— Plano de conteúdo para 6 meses</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Deliveries;
