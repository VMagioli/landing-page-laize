
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#EC4899] text-white font-bold uppercase py-4 px-10 rounded-lg shadow-lg shadow-pink-500/40 hover:bg-pink-600 hover:shadow-xl hover:shadow-pink-500/60 transform hover:scale-105 transition-all duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
