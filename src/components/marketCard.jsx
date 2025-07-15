import React from "react";
 
const MarketCard = ({ image, image2, title, onClick, children, highlight }) => {
  return (
    <div
      onClick={onClick}
      className={`w-64 h-[500] flex flex-col items-center bg-orange-100 rounded-md shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer p-4 text-center
      ${highlight ? 'scale-110 z-10' : 'hover:scale-105'}`}
    >
      <img
        src={image}
        alt={title}
        className="w-24 h-24 object-contain mb-2"
      />
      <img
      src={image2}
      alt={title}
 
      />
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="w-full border-t border-orange-500 my-2" />
      {children && <div className="text-sm  mt-1">{children}</div>}
    </div>
  );
};
 
export default MarketCard;