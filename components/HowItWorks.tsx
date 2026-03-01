import React from 'react';

const steps = [
    {
        number: "01",
        title: "Reunião Estratégica Individual",
        description: "Iniciamos com uma reunião aprofundada. Extraio sua visão de negócio, ambição de posicionamento, histórico profissional, público atual e metas de crescimento. Essa conversa direciona toda a construção estratégica."
    },
    {
        number: "02",
        title: "Diagnóstico de Percepção",
        description: "Analiso sua presença digital, discurso, sinais de marca e posicionamento atual. Identifico desalinhamentos e oportunidades de fortalecimento da sua percepção de valor."
    },
    {
        number: "03",
        title: "Definição do Território de Alto Valor",
        description: "Estruturo o território estratégico que você deve ocupar no mercado. Delimito o tipo de cliente que deseja atrair, o espaço competitivo que assumirá e o padrão de autoridade que precisa sustentar."
    },
    {
        number: "04",
        title: "Construção da Tese e Narrativa",
        description: "Desenvolvo a tese central que sustenta seu posicionamento e organizo sua narrativa profissional com coerência estratégica. Você passa a ter um discurso claro, consistente e reconhecível."
    },
    {
        number: "05",
        title: "Arquitetura de Conteúdo",
        description: "Desenho a estrutura de conteúdo alinhada à sua reputação. Defino editorias, linhas argumentativas e função estratégica de cada publicação. Sua comunicação passa a operar com intenção."
    },
    {
        number: "06",
        title: "Entrega do Plano Estratégico",
        description: "Você recebe um documento completo com diagnóstico, tese, narrativa e plano de ação, além de um quadro estruturado no Notion com diretrizes práticas de aplicação. Após a entrega,  tem 15 dias de suporte direto via WhatsApp para garantir clareza na execução."
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section className="py-10 md:py-20 bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    <div className="lg:sticky lg:top-32 h-fit" data-aos="fade-right">
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-[#EC4899] mb-8 tracking-tighter">
                            COMO FUNCIONA
                        </h2>
                        <div className="text-xl md:text-2xl font-bold text-white leading-relaxed space-y-4">
                            <p>
                                O Projeto Reputação Digital segue uma estrutura estratégica e personalizada.
                            </p>
                            <p>
                                Cada etapa é com foco em elevar seu posicionamento ao nível de alto ticket e alinhar sua produção de conteúdo à reputação que você deseja sustentar.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-12" data-aos="fade-left">
                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-6">
                                <span className="text-4xl md:text-5xl font-black text-[#EC4899]/20 select-none">
                                    {step.number}.
                                </span>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-[#EC4899] mb-3 uppercase">
                                        {step.title}
                                    </h3>
                                    <p className="text-beige/90 text-lg leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
