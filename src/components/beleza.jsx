import React, { useState, useEffect } from "react";

const Beleza = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:PORT/api/products") // Troque PORT pela porta que seu backend está rodando
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <div className="font-sans p-6 bg">
      <h1 className="text-3xl font-bold text-center text-black mb-10">
        Beleza e Cuidados para você!
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {produtos.map((produto) => (
          <div
            key={produto.id} // Use id do produto
            className="bg-orange-200 border border-gray-200 rounded-xl shadow-md w-[250px] p-4 flex flex-col justify-between transition-transform hover:scale-[1.02]"
          >
            <img
              src={produto.imagem}  // Imagem via URL vindo do backend
              alt={produto.nome}
              className="rounded-md mb-4 w-full h-auto"
            />
            <div>
              <h3 className="text-gray-800 font-semibold min-h-[48px]">{produto.nome}</h3>
              <p className="text-black text-lg font-bold mt-1">{produto.preco}</p>
            </div>
            <a
              href={`/comprar/${produto.id}`} // Link dinâmico para página de compra
              className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md text-center transition duration-300"
            >
              Comprar agora
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beleza;
