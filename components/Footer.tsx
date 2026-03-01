
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#050505] border-t border-beige/5 py-8">
      <div className="container mx-auto px-4 text-center text-beige/40">
        <p>&copy; {currentYear} Laize Andreatta. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
