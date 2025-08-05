import React from "react";
import LojasCard from "./lojasCard";
import Slider from "react-slick";
import loja1 from "../assets/imagens/rener.png"
import loja2 from "../assets/imagens/boticario.png"
import loja3 from "../assets/imagens/franciny.png"
import loja4 from "../assets/imagens/rihappy.png"
import promo1 from "../assets/imagens/roupapromo.png"
import promo2 from "../assets/imagens/perfumepromo.png"
import promo3 from "../assets/imagens/maquiagempromo.png"
import promo4 from "../assets/imagens/brinquedopromo.png"
import { FaShoppingCart } from 'react-icons/fa';
 
 
 
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
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
 
const Lojashero = () => {
  return (
    <section className=" w-full min-h-screen flex items-start justify-center pt-20">
      <div className="w-full max-w-6xl bg-gray-200 shadow-md rounded-lg flex flex-col items-center px-6 pt-14 pb-8 gap-6 m-6">
       
        <h1 className="text-lg font-semibold  text-center">
          Conheça os melhores preços da região
        </h1>
 
        <h2 className="text-xl font-semibold mb-8 text-center">
         <strong>Promoções em destaque!</strong>
        </h2>
 
        <div className="flex items-center w-full my-4">
          <div className="flex-grow border-t-2 border-gray-400"></div>
          <span className="mx-2 text-black text-2xl">
            <FaShoppingCart />
          </span>
          <div className="flex-grow border-t-2 border-gray-400"></div>
        </div>
 
       
        <div className="w-full m-10 ">
          <Slider {...sliderSettings}>
            {promotions.map((promo, index) => (
              <div key={promo.title} className="px-2">
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
      </div>
    </section>
  );
};
 
export default Lojashero;