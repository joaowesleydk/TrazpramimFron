import React, { useState } from "react";
import { FaShoppingCart, FaTag } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Banners
import Promo from "../assets/imagens/market1.png";
import Promo2 from "../assets/imagens/market2.png";
import Promo3 from "../assets/imagens/market3.png";

// Logos de mercados
import mark1 from "../assets/imagens/martminas.png";
import mark2 from "../assets/imagens/mineirao.png";
import mark3 from "../assets/imagens/abc.png";
import mark4 from "../assets/imagens/alvorada.png";
import mark5 from "../assets/imagens/baronesa.png";
import mark6 from "../assets/imagens/centerbox.png";

// Produtos
import carne from "../assets/imagens/carne.png";
import detergente from "../assets/imagens/detergente.png";
import arroz from "../assets/imagens/arroz.png";
import linguca from "../assets/imagens/linguça.png";
import sabao from "../assets/imagens/sabao.png";
import feijao from "../assets/imagens/feijao.png";

import MarketCard from "./marketCard";

// Lista de promoções
const promotions = [
  { image: mark1, image2: arroz, title: "Arroz 5kg", description: "Apenas R$ 14,99 - válido até sábado", onClick: () => console.log("Promoção: Arroz") },
  { image: mark2, image2: detergente, title: "Detergente Ypê", description: "Leve 3, pague 2", onClick: () => console.log("Promoção: Detergente") },
  { image: mark4, image2: carne, title: "Carne Bovina 1kg", description: "Oferta especial por R$ 29,90", onClick: () => console.log("Promoção: Carne") },
  { image: mark3, image2: feijao, title: "Feijão Carioca 1kg", description: "Somente R$ 6,89 cada", onClick: () => console.log("Promoção: Feijão") },
  { image: mark5, image2: sabao, title: "Sabão em pó 800g", description: "Oferta R$ 8,99 - Baronesa", onClick: () => console.log("Promoção: Sabão em pó") },
  { image: mark6, image2: linguca, title: "Linguiça Toscana 1kg", description: "Só R$ 19,90 no CenterBox", onClick: () => console.log("Promoção: Linguiça") },
];

// Configurações do carrossel de banners
const bannerSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  pauseOnHover: true,
};

// Configurações do carrossel de promoções
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const Markethero = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="w-full min-h-screen flex items-start justify-center pt-10 md:pt-20 bg-white">
      <div className="w-full max-w-6xl bg-[#F2F2F2] shadow-md rounded-2xl flex flex-col items-center px-6 pt-14 pb-10 gap-6 m-6">
        
        {/* Texto inicial */}
        <p className="text-lg font-medium text-center text-[#1C1C1C]">
          Conheça os melhores preços da região
        </p>

        {/* Título */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FF6B00] to-red-600 bg-clip-text text-transparent text-center flex items-center gap-2">
          <FaTag className="text-[#FF6B00]" /> Promoções em destaque!
        </h2>

        {/* Carrossel de banners */}
        <div className="w-full max-w-8xl">
          <Slider {...bannerSettings}>
            {[Promo, Promo2, Promo3].map((banner, index) => (
              <div key={index} className="px-2">
                <img
                  src={banner}
                  alt={`Banner promocional ${index + 1}`}
                  className="w-full h-60 md:h-80 object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Separador estilizado */}
        <div className="flex items-center w-full my-4">
          <div className="flex-grow border-t-2 border-[#FF6B00]"></div>
          <span className="mx-3 text-white bg-[#FF6B00] p-2 rounded-full shadow-md">
            <FaShoppingCart aria-label="Carrinho de compras" />
          </span>
          <div className="flex-grow border-t-2 border-[#FF6B00]"></div>
        </div>

        {/* Carrossel ou grade de promoções */}
        <div className="w-full mt-8">
          {!showAll ? (
            <Slider {...sliderSettings}>
              {promotions.map((promo, index) => (
                <div key={promo.title} className="px-2">
                  <MarketCard
                    image={promo.image}
                    image2={promo.image2}
                    title={promo.title}
                    onClick={promo.onClick}
                    highlight={index === 1}
                  >
                    {promo.description}
                  </MarketCard>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {promotions.map((promo, index) => (
                <MarketCard
                  key={promo.title}
                  image={promo.image}
                  image2={promo.image2}
                  title={promo.title}
                  onClick={promo.onClick}
                  highlight={index === 1}
                >
                  {promo.description}
                </MarketCard>
              ))}
            </div>
          )}
        </div>

        {/* Botão de alternar */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-8 px-6 py-3 bg-[#FF6B00] text-white font-semibold rounded-full shadow-md hover:bg-orange-700 transition-colors duration-300"
        >
          {showAll ? "Voltar para carrossel" : "Ver todas as promoções"}
        </button>
      </div>
    </section>
  );
};

export default Markethero;
