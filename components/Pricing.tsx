
import React, { useState } from 'react';
import Button from './Button';
import ApplicationForm from './ApplicationForm';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);


const Pricing: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Projeto Reputação Digital",
    "description": "Processo estratégico para profissionais que desejam um posicionamento de alto ticket e uma produção de conteúdo alinhada à própria reputação.",
    "brand": {
      "@type": "Person",
      "name": "Laize Andreatta"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "BRL",
      "price": "2997.00",
      "url": "#",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Person",
        "name": "Laize Andreatta"
      }
    }
  };

  const features = [
    "Análise de Percepção",
    "Plano de Ação no Notion",
    "Arquitetura de Conteúdo"
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="py-20 md:py-32 bg-[#050505] animate-on-load animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="container mx-auto px-4 flex justify-center">
          <div className="border border-beige/10 bg-black p-8 md:p-12 rounded-2xl shadow-2xl max-w-lg w-full text-center">
            <h2 className="text-3xl md:text-4xl font-bold uppercase">Aplicar para o Projeto</h2>
            <p className="text-beige/60 mt-2">Posicionamento estratégico e acompanhamento exclusivo.</p>

            <div className="my-8">
              <p className="text-6xl md:text-7xl font-black text-white">
                R$ 2.997
                <span className="text-2xl font-bold text-beige/40 align-top">,00</span>
              </p>
              <p className="text-lg text-beige/60 mt-2">
                ou 12x de R$ 261 <span className="text-[#EC4899]">no cartão</span>
              </p>
            </div>

            <div className="my-10 space-y-4 text-left inline-block">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-[#EC4899] mr-3 flex-shrink-0" />
                  <span className="text-beige">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              className="w-full text-lg"
              onClick={() => setShowForm(true)}
            >
              QUERO UMA VAGA
            </Button>
            <p className="text-beige/30 mt-6 text-xs uppercase tracking-wider">
              Vagas limitadas para garantir a qualidade da entrega.
            </p>
          </div>
        </div>
      </section>

      {showForm && (
        <ApplicationForm onClose={() => setShowForm(false)} />
      )}
    </>
  );
};

export default Pricing;
