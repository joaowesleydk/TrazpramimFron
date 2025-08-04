import React from "react";

const LojasCard = ({ image, image2, title, onClick, children, highlight }) => {
  return (
    <div
      onClick={onClick}
      className={`w-64 h-[460px] mx-auto flex flex-col items-center bg-white rounded-md shadow-md transition-transform duration-300 cursor-pointer p-4 text-center
        ${highlight ? 'scale-110 z-10' : 'hover:scale-105'}`}
    >
      {/* Imagem superior menor */}
      <img
        src={image}
        alt={`Logo da loja ${title}`}
        className="w-20 h-20 object-contain mb-3"
      />

      {/* Imagem inferior maior */}
      <img
        src={image2}
        alt={`Produto em promoção da loja ${title}`}
        className="w-64 h-60 object-contain mb-3"
      />

      {/* Espaço flexível */}
      <div className="flex-grow" />

      {/* Título e descrição */}
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="w-full border-t my-2 border-gray-300" />
      {children && (
        <div className="text-sm mt-1 overflow-auto max-h-20">
          {children}
        </div>
      )}
    </div>
  );
};

export default LojasCard;
