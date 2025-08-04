import React from "react";
 
const ProductCard = ({ name, description, price, image }) => {
  return (
   
    <div className="bg-gray-300 rounded-lg shadow-md p-6 flex flex-col w-full h-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
      <img
        src={image}
        alt={name}
        className="object-contain h-40 w-full mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <span className="text-black font-bold text-2xl mb-4">{price}</span>
      <a
        href="#"
        className="bg-gray-500 text-white text-center py-2 px-4 rounded hover:bg-gray-800 transition mt-auto"
      >
        <a href="/comprar">Comprar Agora</a>
      </a>
    </div>
   
  );
};
 
export default ProductCard;