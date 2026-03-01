
import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
        <img
          src="/Imagens/hero-bw.png"
          alt="Laize Andreatta"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(236,72,153,0.05)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-16 relative z-10 text-left">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-tight" data-aos="fade-up" data-aos-delay="400">
            PROJETO
            <br />
            <span className="text-beige/90">REPUTAÇÃO DIGITAL</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-beige/80 max-w-2xl" data-aos="fade-up" data-aos-delay="600">
            Para profissionais que buscam posicionamento de alto ticket e conteúdo alinhado à sua reputação.
          </p>
          <div className="mt-12" data-aos="fade-up" data-aos-delay="800">
            <Button>
              Iniciar processo de seleção →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
