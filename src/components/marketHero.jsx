import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Promo from "../assets/imagens/promo.png";
import mark1 from "../assets/imagens/martminas.png";
import mark2 from "../assets/imagens/mineirao.png";
import mark3 from "../assets/imagens/abc.png";
import mark4 from "../assets/imagens/alvorada.png";
import mark5 from "../assets/imagens/baronesa.png";
import mark6 from "../assets/imagens/centerbox.png";
import carne from "../assets/imagens/carne.png";
import detergente from "../assets/imagens/detergente.png";
import arroz from "../assets/imagens/arroz.png";
import linguca from "../assets/imagens/linguça.png";
import sabao from "../assets/imagens/sabao.png";
import feijao from "../assets/imagens/feijao.png"
import MarketCard from "./marketCard";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
const promotions = [
  {
    image: mark1,
    image2: arroz,
    title: "Arroz 5kg",
    description: "Apenas R$ 14,99 - válido até sábado",
    onClick: () => console.log("Promoção: Arroz"),
  },
  {
    image: mark2,
    image2: detergente,
    title: "Detergente Ypê",
    description: "Leve 3, pague 2",
    onClick: () => console.log("Promoção: Detergente"),
  },
  {
    image: mark4,
    image2: carne,
    title: "Carne Bovina 1kg",
    description: "Oferta especial por R$ 29,90",
    onClick: () => console.log("Promoção: Carne"),
  },
  {
    image: mark3,
    image2: feijao,
    title: "Feijão Carioca 1kg",
    description: "Somente R$ 6,89 cada",
    onClick: () => console.log("Promoção: Feijão"),
  },
  {
    image: mark5,
    image2: sabao,
    title: "Sabão em pó 800g",
    description: "Oferta R$ 8,99 - Baronesa",
    onClick: () => console.log("Promoção: Sabão em pó"),
  },
  {
    image: mark6,
    image2: linguca,
    title: "Linguiça Toscana 1kg",
    description: "Só R$ 19,90 no CenterBox",
    onClick: () => console.log("Promoção: Linguiça"),
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
 
const Markethero = () => {
  return (
    <section className=" w-full min-h-screen flex items-start justify-center pt-20">
      <div className="w-full max-w-6xl bg-gray-200 shadow-md rounded-lg flex flex-col items-center px-6 pt-14 pb-8 gap-6 m-6">
        <img
          src={Promo}
          alt="Promoção destaque"
          className="w-40 h-40 object-cover -mt-32 shadow-lg rounded-full"
        />
        <p className="text-lg font-semibold  text-center">
          Conheça os melhores preços da região
        </p>
 
        <h2 className="text-xl font-semibold text-gray-900 mb-8 text-center">
          Promoções em destaque!
        </h2>
 
        <div className="flex items-center w-full my-4">
          <div className="flex-grow border-t-2 border-gray-500"></div>
          <span className="mx-2 text-black-800 text-2xl">
            <FaShoppingCart />
          </span>
          <div className="flex-grow border-t-2 border-gray-500"></div>
        </div>
 
       
        <div className="w-full mt-10">
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
        </div>
      </div>
    </section>
  );
};
 
export default Markethero;