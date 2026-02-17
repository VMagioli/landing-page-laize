
import React from 'react';

const About: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Laize Andreatta",
    "jobTitle": "Especialista em marca pessoal e posicionamento estratégico",
    "description": "Ajudo profissionais a construir relevância e a ocupar um território claro de valor no mercado através do Projeto Reputação Digital.",
    "image": "https://picsum.photos/seed/laizeandreatta/800/1000?grayscale"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="py-10 md:py-20 bg-[#0a0a0a] animate-on-load animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1" data-aos="fade-right">
              <h3 className="text-sm uppercase font-bold text-[#EC4899] tracking-widest">Sobre a Especialista</h3>
              <h2 className="text-4xl md:text-5xl font-black uppercase mt-2">Prazer, Laize.</h2>
              <div className="prose prose-invert text-gray-300 mt-8 space-y-4 text-lg leading-relaxed">
                <p>Meu nome é Laize Andreatta. Sou especialista em marca pessoal e posicionamento estratégico. Estou no digital desde 2020, mas fui advogada por muitos anos. Essa base me deu visão analítica, estrutura e leitura de cenário — competências que hoje aplico na construção de reputação profissional.</p>
                <p>Antes de ensinar sobre percepção digital, eu precisei entendê-la em profundidade. Ao observar o mercado, identifiquei um padrão claro: não cresce quem trabalha mais, cresce quem é percebido como melhor.</p>
                <p>Atendi mais de 300 profissionais em consultorias estratégicas e vi um problema recorrente: alta competência com baixa percepção de valor. O desafio não era técnico. Era estrutural.</p>
                <p>Passei a estudar o que sustenta relevância: posicionamento, narrativa, símbolos de valor e coerência de conteúdos. Com essa base, construí um negócio digital de sete dígitos e reposicionei profissionais de diferentes áreas que buscavam reconhecimento proporcional à sua competência.</p>
                <p>Hoje aplico a metodologia no Projeto Reputação Digital: um processo estratégico para quem deseja consolidar autoridade, proteger a própria imagem e ocupar um território claro de valor no mercado.</p>
                <p>Meu trabalho é estruturar relevância.</p>
              </div>
              <div className="mt-12 border border-gray-700 p-6 rounded-lg">
                <p className="text-md font-bold uppercase text-center tracking-wider">
                  "REPUTAÇÃO SE CONSTRÓI MAIS NO QUE VOCÊ RECUSA DO QUE NO QUE VOCÊ ACEITA."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center" data-aos="fade-left">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-pink-500/30 blur-2xl -z-10 rounded-full"></div>
                <div className="aspect-w-4 aspect-h-5 bg-gray-900 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.3)]">
                  <img
                    src="/Imagens/Foto Profissional (1).jpeg"
                    alt="Laize Andreatta"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
