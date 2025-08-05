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
    { img: Promocao1, gradient: "linear-gradient(to bottom, #ADD8E6, #fff)" },
    { img: Promocao2, gradient: "linear-gradient(to bottom, #FFB6C1, #fff)" },
    { img: Promocao3, gradient: "linear-gradient(to bottom, #FFC896, #fff)" },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Swiper Banner */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 3000 }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          className="w-full h-[280px] md:h-[400px] lg:h-[480px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: slide.gradient }}
              >
                <img
                  src={slide.img}
                  alt={`Promoção ${index + 1}`}
                  className="max-h-[85%] max-w-[90%] object-contain drop-shadow-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Ofertas do Dia */}
      <div className="px-6 md:px-12 lg:px-20">
        <h1 className="text-center font-bold text-2xl md:text-3xl text-[#FF6B00] pt-16 mb-8">
          Ofertas do Dia!
        </h1>

        {/* Linha divisória */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex-grow border-t-2 border-gray-300 max-w-sm"></div>
        </div>

        <ProductCarousel />
      </div>

      {/* Cards de Acesso Rápido */}
      <div className="px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Login */}
          <a
            href="/login"
            className="bg-gray-100 rounded-2xl shadow-md flex flex-col items-center justify-center p-8 space-y-4 text-center hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <IoManSharp className="text-6xl text-[#1C1C1C]" />
            <h2 className="text-xl font-bold">Entre na sua conta</h2>
            <p className="text-sm text-gray-700">
              Aproveite ofertas para comprar tudo que quiser
            </p>
          </a>

          {/* Localização */}
          <a
            href="/localizacao"
            className="bg-gray-100 rounded-2xl shadow-md flex flex-col items-center justify-center p-8 space-y-4 text-center hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <GrMapLocation className="text-6xl text-[#1C1C1C]" />
            <h2 className="text-xl font-bold">Insira sua localização</h2>
            <p className="text-sm text-gray-700">
              Confira os custos e prazos de entrega
            </p>
          </a>

          {/* Pagamento */}
          <a
            href="/pagamento"
            className="bg-gray-100 rounded-2xl shadow-md flex flex-col items-center justify-center p-8 space-y-4 text-center hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <FaRegCreditCard className="text-6xl text-[#1C1C1C]" />
            <h2 className="text-xl font-bold">Formas de pagamento</h2>
            <p className="text-sm text-gray-700">
              Pague suas compras com rapidez e segurança
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
