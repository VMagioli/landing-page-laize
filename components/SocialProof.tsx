
import React from 'react';

const testimonials = [
  { id: 1, alt: "Depoimento 1" },
  { id: 2, alt: "Depoimento 2" },
  { id: 3, alt: "Depoimento 3" },
  { id: 4, alt: "Depoimento 4" },
  { id: 5, alt: "Depoimento 5" },
  { id: 6, alt: "Depoimento 6" },
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-[#0a0a0a] animate-on-load animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#EC4899] mb-6 leading-tight">
            COMO VOCÊ VAI CRIAR CONTEÚDO SE AINDA NÃO DEFINIU SEU POSICIONAMENTO?
          </h2>
          <p className="text-lg md:text-xl text-beige/90 font-medium leading-relaxed mb-12">
            Estruturo a base estratégica que dá direção ao seu conteúdo e faz o mercado entender exatamente o seu valor.
          </p>
          <h3 className="text-2xl md:text-3xl font-bold uppercase text-white tracking-wider border-b-2 border-[#EC4899] inline-block pb-2">
            UMA ENTREGA COMO VOCÊ NUNCA VIU:
          </h3>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {[
            "WhatsApp Image 2026-02-17 at 12.56.25.jpeg",
            "WhatsApp Image 2026-02-17 at 12.56.26 (1).jpeg",
            "WhatsApp Image 2026-02-17 at 12.56.26 (2).jpeg",
            "WhatsApp Image 2026-02-17 at 12.56.26 (3).jpeg",
            "WhatsApp Image 2026-02-17 at 12.56.26 (4).jpeg",
            "WhatsApp Image 2026-02-17 at 12.56.26 (5).jpeg",
            "WhatsApp Image 2026-02-17 at 12.56.26.jpeg",
            "WhatsApp Image 2026-02-17 at 12.56.27 (1).jpeg"
          ].map((src, index) => (
            <div
              key={index}
              className="bg-[#111111] rounded-lg shadow-lg overflow-hidden break-inside-avoid"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={`/Imagens/${src}`}
                alt={`Depoimento ${index + 1}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase leading-tight mb-6" data-aos="fade-up">
            CRIO O SEU PLANO USANDO UMA <span className="text-[#EC4899]">ESTRATÉGIA PRÓPRIA</span>, VALIDADA NA PRÁTICA, QUE SUSTENTA MEUS <span className="text-[#EC4899]">RESULTADOS ORGÂNICOS</span> E JÁ FOI APLICADA EM MAIS DE <span className="text-[#EC4899]">300 CONSULTORIAS</span>.
          </h2>
          <p className="text-[#D4AF37] text-lg font-medium mb-12" data-aos="fade-up" data-aos-delay="200">
            Os conteúdos dos prints seguem essa lógica estruturada.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-beige/10" data-aos="fade-right" data-aos-delay="300">
              <img src="/Imagens/insights1.jpeg" alt="Insights do Post 1" className="w-full h-auto" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-beige/10" data-aos="fade-left" data-aos-delay="400">
              <img src="/Imagens/insights2.jpeg" alt="Insights do Post 2" className="w-full h-auto" />
            </div>
          </div>

          <div className="flex justify-center" data-aos="fade-up" data-aos-delay="500">
            <p className="text-sm md:text-base font-bold uppercase tracking-wide max-w-4xl leading-relaxed">
              O Projeto Reputação Digital entrega essa estrutura personalizada, alinhando posicionamento, discurso e produção de conteúdo para consolidar sua reputação no mercado e atrair clientes alto ticket.
              <span className="block mt-2 w-full h-1 bg-[#050505] border-b-2 border-beige/20 mx-auto max-w-xs"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
