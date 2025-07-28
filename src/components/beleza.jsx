import React from "react";
import kitskincare from "../assets/imagens/kitskincare.png";
import batons from "../assets/imagens/batons.png";
import shampoo from '../assets/imagens/shampoo.png';
import paletadesombra from '../assets/imagens/paletadesombra.png';
import pincel from '../assets/imagens/pincel.png';
import corretivo from '../assets/imagens/corretivo.png';
import fixador from '../assets/imagens/fixador.png';
import kitfran from '../assets/imagens/kitfran.png';
import blush from '../assets/imagens/blush.png';
import proteina from '../assets/imagens/proteina.png';
import hidratante from '../assets/imagens/hidratante.png';
import rimel from '../assets/imagens/rimel.png';
import pomac from '../assets/imagens/pomac.png';
import cerave from '../assets/imagens/cerave.png';
import sabonete from '../assets/imagens/sabonete.png';
import rimelbc from '../assets/imagens/rimelbc.png';
import oleo2 from '../assets/imagens/oleo2.png';

const produtos = [
  { nome: "Kit Skincare Facial creamy", preco: "R$ 89,90", imagem: kitskincare, link: "#" },
  { nome: "Shampoo e condicionador nutritivo wella", preco: "R$ 79,00", imagem: shampoo, link: "#" },
  { nome: "Paleta de Sombras eudora glam", preco: "R$ 60,00", imagem: paletadesombra, link: "#" },
  { nome: "Kit Batom quem disse berenice?", preco: "R$ 50,00", imagem: batons, link: "#" },
  { nome: "Kit pinceís 10 und", preco: "R$ 35,90", imagem: pincel, link: "#" },
  { nome: "Corretivo Maybelline Instant Age Rewind Eraser", preco: "R$ 30,00", imagem: corretivo, link: "#" },
  { nome: "Vizzela Bruma Fixadora De Maquiagem Real Fix 150ml", preco: "R$ 30,50", imagem: fixador, link: "#" },
  { nome: "Blush Mac Mineralize Like Me Love Me For Women 4g", preco: "R$ 40,00", imagem: blush, link: "#" },
  { nome: "Fran By Franciny Ehlke", preco: "R$ 59,90", imagem: kitfran, link: "#" },
  { nome: "Creme de proteína capilar vegana restauração total", preco: "R$ 80,00", imagem: proteina, link: "#" },
  { nome: "Boca Rosa - Mascara Para Sobrancelhas Transparente", preco: "R$ 39,00", imagem: rimel, link: "#" },
  { nome: "hidratante facial cica cicaplatst la roche-posay", preco: "R$ 59,90", imagem: hidratante, link: "#" },
  { nome: "pó compacto blot powder cor medium tom médio", preco: "R$ 45,00", imagem: pomac, link: "#" },
  { nome: "Loção Facial Hidratante AM FPS 50 Cerave", preco: "R$ 50,00", imagem: cerave, link: "#" },
  { nome: "Eucerin Dermopure Oil Control Gel De Limpeza Gentil", preco: "R$ 85,90", imagem: sabonete, link: "#" },
  { nome: "Boca Rosa Máscara De Cílios - Meu Volumão", preco: "R$ 35,00", imagem: rimelbc, link: "#" },
  { nome: "Danos Vorazes Óleo Reparador 50ml Lola", preco: "R$ 20,00", imagem: oleo2, link: "#" },
];

const Beleza = () => {
  return (
    <div className="font-sans p-6 bg">
      <h1 className="text-3xl font-bold text-center text-black mb-10">
        Beleza e Cuidados para você!
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {produtos.map((produto, index) => (
          <div
            key={index}
            className="bg-orange-200 border border-gray-200 rounded-xl shadow-md w-[250px] p-4 flex flex-col justify-between transition-transform hover:scale-[1.02]"
          >
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="rounded-md mb-4 w-full h-auto"
            />
            <div>
              <h3 className="text-gray-800 font-semibold min-h-[48px]">{produto.nome}</h3>
              <p className="text-black text-lg font-bold mt-1">{produto.preco}</p>
            </div>
            <a
              href={produto.link}
              className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md text-center transition duration-300"
            >
              <a href="/comprar">Comprar agora</a>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beleza;
