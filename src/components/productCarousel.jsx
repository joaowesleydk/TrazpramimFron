import React from "react";
import Slider from "react-slick";
import ProductCard from "./productCard";

import tenis from "../assets/imagens/tenis.png";
import fone from "../assets/imagens/fone.png";
import microondas from "../assets/imagens/microondas.png";
import playstation from "../assets/imagens/playstation.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
const products = [
  {
    id: 1,
    name: "Tênis Esportivo",
    description: "Conforto e estilo para o seu dia a dia.",
    price: "R$ 199,90",
    image: tenis,
  },
  {
    id: 2,
    name: "Teclado Mecânico",
    description: "RGB e switches azuis para máxima performance.",
    price: "R$ 299,90",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_676608-MLA87478169161_072025-O.webp",
  
  },
  {
    id: 3,
    name: "Galaxy Buds FE",
    description: "Bateria duradoura com carregamento USB-C.",
    price: "R$ 299,90",
    image: fone,
  },
  {
    id: 4,
    name: "Forno Micro-ondas",
    description: "Classe de eficiência energética A.",
    price: "R$ 299,90",
    image: microondas,
  },
  {
    id: 5,
    name: "Playstation 5",
    description: "Console de última geração para games incríveis.",
    price: "R$ 4500,00",
    image: playstation,
  },
];
 
const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };
 
  return (
    <div className=" carousel-container max-w-7xl mx-auto px-6 py-10 relative">
      <Slider {...settings}>
        {products.map((product) => (
          <div
            key={product.id}
            className="px-3 h-[460px] flex"
            style={{ display: "flex" }}
          >
            <ProductCard {...product} />
          </div>
        ))}
      </Slider>
 
      <style>{`
      
        .slick-dots {
          bottom: -30px;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #999;
          opacity: 0.7;
        }
        .slick-dots li.slick-active button:before {
          color: black;
          opacity: 1;
        }
 
       
        .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
};
 
export default ProductCarousel;