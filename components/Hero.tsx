
import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Imagens/laizeprincipal.jpeg"
          alt="Laize Andreatta"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-16 relative z-10 text-left">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-tight" data-aos="fade-up" data-aos-delay="400">
            PROJETO
            <br />
            <span className="text-gray-400">REPUTAÇÃO DIGITAL</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl" data-aos="fade-up" data-aos-delay="600">
            Para profissionais que buscam posicionamento de alto ticket e conteúdo alinhado à sua reputação.
          </p>
          <div className="mt-12" data-aos="fade-up" data-aos-delay="800">
            <Button>
              GARANTA SUA VAGA →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
