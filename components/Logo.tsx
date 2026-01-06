
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img 
        src="https://cemacremocoes.com.br/wp-content/uploads/2026/01/CEMAC.png" 
        alt="CEMAC Remoções" 
        className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};
