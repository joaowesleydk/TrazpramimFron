import React from "react";

const MarketCard = ({ image, image2, title, onClick, children, highlight }) => {
  return (
    <div
      onClick={onClick}
      className={`w-64 h-[500px] mx-auto flex flex-col items-center bg-white rounded-md shadow-md transition-transform duration-300 cursor-pointer p-4 text-center
      ${highlight ? 'scale-110 z-10' : 'hover:scale-105'}`}
    >
      <img
        src={image}
        alt={`Logo do mercado ${title}`}
        className="w-24 h-24 object-contain mb-2"
      />
      <img
        src={image2}
        alt={`Produto em promoção: ${title}`}
        className="w-full h-40 object-contain mb-4"
      />
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="w-full border-t border-gray-500 my-2" />
      {children && <div className="text-sm mt-1">{children}</div>}
    </div>
  );
};

export default MarketCard;
