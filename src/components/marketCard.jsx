import React from "react";

const MarketCard = ({ image, image2, title, onClick, children, highlight, className }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      aria-label={`Promoção: ${title}`}
      className={`w-64 min-h-[420px] mx-auto flex flex-col items-center 
        bg-white rounded-xl shadow-md transition-transform duration-300 cursor-pointer p-5 text-center 
        ${highlight ? "" : "hover:scale-105 hover:shadow-lg"} 
        ${className}`}
    >
      {/* Logo do mercado */}
      <img
        src={image}
        alt={`Logo do mercado para promoção ${title}`}
        className="w-20 h-20 object-contain mb-3"
      />

      {/* Imagem do produto */}
      <img
        src={image2}
        alt={`Produto em promoção: ${title}`}
        className="w-full h-40 object-contain mb-4"
      />

      {/* Nome do produto */}
      <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>

      {/* Linha divisória */}
      <div className="w-full border-t border-gray-300 my-2" />

      {/* Preço/descrição */}
      {children && (
        <div className="text-base mt-1 text-red-600 font-semibold">
          {children}
        </div>
      )}
    </div>
  );
};

export default MarketCard;
