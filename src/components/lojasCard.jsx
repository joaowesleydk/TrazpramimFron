import React from "react";

const LojasCard = ({ image, image2, title, onClick, children, highlight }) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`w-64 h-[460px] flex flex-col items-center bg-orange-100 rounded-md shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer p-4 text-center
          ${highlight ? 'scale-110 z-10' : 'hover:scale-105'}`}
      >
        {/* Imagem superior menor, tamanho fixo */}
        <img
          src={image}
          alt={title}
          className="w-20 h-20 object-contain mb-3"
        />

        {/* Imagem inferior maior, tamanho fixo */}
        <img
          src={image2}
          alt={title}
          className="w-64 h-60 object-contain mb-3"
        />

        {/* Espaço flexível para empurrar o texto para a parte inferior */}
        <div className="flex-grow" />

        {/* Título e conteúdo na parte inferior do card */}
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="w-full border-t border-orange-500 my-2" />
        {children && (
          <div className="text-sm mt-1 overflow-auto max-h-20">
            {children}
          </div>
        )}
      </div>
    </>
  )

}
export default LojasCard;