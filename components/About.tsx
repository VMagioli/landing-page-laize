
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
      <section id="sobre" className="py-16 md:py-24 bg-[#0a0a0a] border-t border-[#f1e9dc]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight">
              <span className="text-[#EC4899]">REPUTAÇÃO</span> SE CONSTRÓI MAIS NO QUE VOCÊ RECUSA DO QUE NO QUE VOCÊ ACEITA.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-[#111111] p-8 md:p-12 rounded-2xl border border-[#EC4899]/30 shadow-2xl" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl md:text-3xl font-black uppercase text-[#EC4899] mb-8 tracking-widest text-center">
              ATENÇÃO!
            </h3>

            <div className="space-y-6 text-beige text-lg md:text-xl leading-relaxed font-medium">
              <p>
                Tenho muita responsabilidade com o processo do Projeto Reputação Digital,
                ele exige maturidade, clareza e momento profissional adequado.
              </p>
              <p>
                Por isso, ele não é aberto ao público geral.
              </p>
              <p>
                Para garantir a execução integral do método e seus resultados, todos os
                interessados passam por uma breve aplicação.
              </p>
              <p>
                O objetivo é simples: assegurar que você está no momento certo para viver
                essa transformação.
              </p>
              <p>
                Se você leu até aqui e sente que está preparado para estruturar sua reputação
                com seriedade, prossiga para a aplicação.
              </p>
              <p>
                Após o envio, seu perfil será analisado.
              </p>
              <p className="font-bold text-white">
                Sendo aprovado, você receberá o link para fazer o pagamento e finalizar sua
                inscrição.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
