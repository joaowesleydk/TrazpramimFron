import React from "react";
import { IoManSharp } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { FaRegCreditCard } from "react-icons/fa";
import Promocao1 from "../assets/imagens/promocao1.png";
import Promocao2 from "../assets/imagens/promocao2.png";
import Promocao3 from "../assets/imagens/promocao3.png";
import ProductCarousel from "./ProductCarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const slides = [
    { img: Promocao1, gradient: "linear-gradient(to bottom, rgb(173, 216, 230), rgb(255, 255, 255))" },
    { img: Promocao2,gradient: "linear-gradient(to bottom, rgb(255, 182, 193), rgb(255, 255, 255))" },
    { img: Promocao3,gradient: "linear-gradient(to bottom, rgb(255, 200, 150), rgb(255, 255, 255))" },
  ];

  return (
    <div className="flex flex-col bg--100">
      <div className="flex-1 relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 3000 }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          className="w-full h-[300px] md:h-[400px]"
        >
          {slides.map((slide, index) => (
          <SwiperSlide key={index}>
  <div
    className="w-full h-full flex items-center justify-center p-4" // adicionamos padding
    style={{ background: slide.gradient }}
  >
    <img
      src={slide.img}
      alt={`Promoção ${index + 1}`}
      className="max-h-[90%] max-w-[90%] object-contain" // padronizamos as proporções
    />
  </div>
</SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <div> <h1 className="text-center font-bold text-2xl pt-16 mb-6">Ofertas do dia!!!</h1></div>
 <ProductCarousel/>
      </div>

      <div className="flex justify-center items-center px-6 py-16 overflow-x-auto">
        <div className="flex gap-64 min-w-[960px]">
          <a
            href="/login"
            className="w-80 h-96 bg-gray-200 rounded-lg shadow-md flex-shrink-0 flex flex-col items-center justify-center text-black font-bold p-4 space-y-3 text-center hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-xl">Entre na sua conta</h1>
            <IoManSharp className="text-6xl text-gray-800" />
            <p className="text-sm font-normal text-black">
              Aproveite ofertas para comprar tudo que quiser
            </p>
          </a>

          <a
            href="/localizacao"
            className="w-80 h-96 bg-gray-200 rounded-lg shadow-md flex-shrink-0 flex flex-col items-center justify-center text-black font-bold p-4 space-y-3 text-center hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-xl">Insira sua localização</h1>
            <GrMapLocation className="text-6xl text-gray-800" />
            <p className="text-sm font-normal text-black">
              Confira os custos e prazos de entrega
            </p>
          </a>

          <a
            href="/pagamento"
            className="w-80 h-96 bg-gray-200 rounded-lg shadow-md flex-shrink-0 flex flex-col items-center justify-center text-black font-bold p-4 space-y-3 text-center hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-xl">Formas de pagamento</h1>
            <FaRegCreditCard className="text-6xl text-gray-800" />
            <p className="text-sm font-normal text-black">
              Pague suas compras com rapidez e segurança
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
