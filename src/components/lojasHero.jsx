import React, { useState } from "react";
import LojasCard from "./lojasCard";
import Slider from "react-slick";
import loja1 from "../assets/imagens/rener.png";
import loja2 from "../assets/imagens/boticario.png";
import loja3 from "../assets/imagens/franciny.png";
import loja4 from "../assets/imagens/rihappy.png";
import promo from "../assets/imagens/promoçao4.png";
import promo1 from "../assets/imagens/roupapromo.png";
import promo2 from "../assets/imagens/perfumepromo.png";
import promo3 from "../assets/imagens/maquiagempromo.png";
import promo4 from "../assets/imagens/brinquedopromo.png";
import { FaShoppingCart } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const promotions = [
  {
    image: loja1,
    title: "Roupas em promoção",
    image2: promo1,
    description: "Moda a partir de R$ 69 – só até sábado!",
    onClick: () => console.log("Promoção: roupas"),
  },
  {
    image: loja2,
    title: "Perfume ",
    image2: promo2,
    description: "Leve 3 fragrâncias e pague só 2",
    onClick: () => console.log("Promoção: Perfume"),
  },
  {
    image: loja4,
    title: "Brinquedos divertidos",
    image2: promo4,
    description: "Ofertas especiais a partir de R$ 29,90",
    onClick: () => console.log("Promoção: Brinquedo"),
  },
  {
    image: loja3,
    title: "Kit de Maquiagem",
    image2: promo3,
    description: "Tudo por apenas R$ 6,89 cada item!",
    onClick: () => console.log("Promoção: Maquiagem"),
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Lojashero = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="w-full min-h-screen flex items-start justify-center pt-20 bg-[#FFFFFF]">
      <div className="w-full max-w-6xl bg-[#F2F2F2] shadow-lg rounded-lg flex flex-col items-center px-8 pt-14 pb-10 gap-8 m-6">
        {/* Título principal */}
        <h1 className="text-2xl font-bold text-center text-[#1C1C1C]">
          Conheça os melhores preços da região
        </h1>

        {/* Subtítulo */}
        <h2 className="text-3xl font-extrabold text-center text-[#FF6B00]">
          Promoções em destaque!
        </h2>

        {/* Imagem da promoção especial */}
        <img
          src={promo}
          alt="Promoção especial"
          className="w-full max-h-72 object-cover rounded-lg shadow-md mb-6"
        />

        {/* Divisor com ícone */}
        <div className="flex items-center w-full my-6">
          <div className="flex-grow border-t-2 border-[#1C1C1C]" />
          <span className="mx-4 text-[#FF6B00] text-3xl">
            <FaShoppingCart />
          </span>
          <div className="flex-grow border-t-2 border-[#1C1C1C]" />
        </div>

        {/* Mostrar slider ou lista completa */}
        {!showAll ? (
          <div className="w-full">
            <Slider {...sliderSettings}>
              {promotions.map((promo, index) => (
                <div key={promo.title} className="px-3">
                  <LojasCard
                    image={promo.image}
                    image2={promo.image2}
                    title={promo.title}
                    onClick={promo.onClick}
                    highlight={index === 1}
                  >
                    {promo.description}
                  </LojasCard>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {promotions.map((promo) => (
              <LojasCard
                key={promo.title}
                image={promo.image}
                image2={promo.image2}
                title={promo.title}
                onClick={promo.onClick}
                highlight={false}
              >
                {promo.description}
              </LojasCard>
            ))}
          </div>
        )}

        {/* Botão para alternar */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 px-6 py-3 bg-[#FF6B00] text-white rounded-md font-semibold hover:bg-[#e65a00] transition-colors duration-300"
        >
          {showAll ? "Voltar ao Slider" : "Ver todos os itens"}
        </button>
      </div>
    </section>
  );
};

export default Lojashero;
