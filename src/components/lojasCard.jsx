import React from "react";

const LojasCard = ({ image, image2, title, onClick, children, highlight }) => {
  return (
    <div
      onClick={onClick}
      className={`
        w-64 h-[460px] mx-auto flex flex-col items-center bg-[#FFFFFF] rounded-md 
        shadow-md transition-transform duration-300 cursor-pointer p-5 text-center
        border
        ${highlight ? "" : "hover:scale-105 border-transparent"}
      `}
      style={{ boxShadow: highlight ? "" : undefined }}
    >
      {/* Imagem superior menor */}
      <img
        src={image}
        alt={`Logo da loja ${title}`}
        className="w-20 h-20 object-contain mb-4"
      />

      {/* Imagem inferior maior */}
      <img
        src={image2}
        alt={`Produto em promoção da loja ${title}`}
        className="w-full h-60 object-contain mb-4 rounded-md"
        style={{ objectFit: "cover" }}
      />

      {/* Espaço flexível */}
      <div className="flex-grow" />

      {/* Título */}
      <h3 className="font-semibold text-xl text-[#FF6B00]">{title}</h3>

      {/* Linha divisória */}
      <div className="w-full border-t mt-3 border-[#F2F2F2]" />

      {/* Descrição */}
      {children && (
        <div
          className="text-sm mt-2 text-[#1C1C1C] overflow-auto max-h-20 px-1"
          style={{ scrollbarWidth: "thin" }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default LojasCard;
