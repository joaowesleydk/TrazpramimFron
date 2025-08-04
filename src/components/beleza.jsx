import React from "react";
import { useNavigate } from "react-router-dom";
 
import kitskincare from "../assets/imagens/kitskincare.png";
import batons from "../assets/imagens/batons.png";
import shampoo from "../assets/imagens/shampoo.png";
import paletadesombra from "../assets/imagens/paletadesombra.png";
import pincel from "../assets/imagens/pincel.png";
import corretivo from "../assets/imagens/corretivo.png";
import fixador from "../assets/imagens/fixador.png";
import kitfran from "../assets/imagens/kitfran.png";
import blush from "../assets/imagens/blush.png";
import proteina from "../assets/imagens/proteina.png";
import hidratante from "../assets/imagens/hidratante.png";
import rimel from "../assets/imagens/rimel.png";
import pomac from "../assets/imagens/pomac.png";
import cerave from "../assets/imagens/cerave.png";
import sabonete from "../assets/imagens/sabonete.png";
import rimelbc from "../assets/imagens/rimelbc.png";
import oleo2 from "../assets/imagens/oleo2.png";
 
const produtos = [
  { nome: "Kit Skincare Facial creamy", preco: "R$ 89,90", imagem: kitskincare },
  { nome: "Shampoo e condicionador nutritivo wella", preco: "R$ 79,00", imagem: shampoo },
  { nome: "Paleta de Sombras eudora glam", preco: "R$ 60,00", imagem: paletadesombra },
  { nome: "Kit Batom quem disse berenice?", preco: "R$ 50,00", imagem: batons },
  { nome: "Kit pinceís 10 und", preco: "R$ 35,90", imagem: pincel },
  { nome: "Corretivo Maybelline Instant Age Rewind Eraser", preco: "R$ 30,00", imagem: corretivo },
  { nome: "Vizzela Bruma Fixadora De Maquiagem Real Fix 150ml", preco: "R$ 30,50", imagem: fixador },
  { nome: "Blush Mac Mineralize Like Me Love Me For Women 4g", preco: "R$ 40,00", imagem: blush },
  { nome: "Fran By Franciny Ehlke", preco: "R$ 59,90", imagem: kitfran },
  { nome: "Creme de proteína capilar vegana restauração total", preco: "R$ 80,00", imagem: proteina },
  { nome: "Boca Rosa - Mascara Para Sobrancelhas Transparente", preco: "R$ 39,00", imagem: rimel },
  { nome: "hidratante facial cica cicaplatst la roche-posay", preco: "R$ 59,90", imagem: hidratante },
  { nome: "pó compacto blot powder cor medium tom médio", preco: "R$ 45,00", imagem: pomac },
  { nome: "Loção Facial Hidratante AM FPS 50 Cerave", preco: "R$ 50,00", imagem: cerave },
  { nome: "Eucerin Dermopure Oil Control Gel De Limpeza Gentil", preco: "R$ 85,90", imagem: sabonete },
  { nome: "Boca Rosa Máscara De Cílios - Meu Volumão", preco: "R$ 35,00", imagem: rimelbc },
  { nome: "Danos Vorazes Óleo Reparador 50ml Lola", preco: "R$ 20,00", imagem: oleo2 },
];
 
const Beleza = () => {
  const navigate = useNavigate();
 
  const handleComprar = (produto) => {
    navigate("/comprar", { state: { produto } });
  };
 
  return (
    <div className="font-sans p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center text-black mb-10">
        Beleza e Cuidados para você!
      </h1>
 
      <div className="flex flex-wrap justify-center gap-6">
        {produtos.map((produto, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-200 rounded-xl shadow-md w-[250px] p-4 flex flex-col justify-between transition-transform hover:scale-[1.02]"
          >
            <div className="w-full h-48 flex justify-center items-center bg-white rounded-md overflow-hidden mb-4">
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold min-h-[48px]">
                {produto.nome}
              </h3>
              <p className="text-black text-lg font-bold mt-1">
                {produto.preco}
              </p>
            </div>
            <button
              onClick={() => handleComprar(produto)}
              className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              Comprar agora
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Beleza;
 