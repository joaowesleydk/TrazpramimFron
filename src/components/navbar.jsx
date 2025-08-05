import React, { useState, useEffect } from "react";
import { PiShoppingCartFill } from "react-icons/pi";
import { GiShoppingCart } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { IoStorefrontSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "../assets/imagens/logo.png";

const Navbar = () => {
  const [showCategorias, setShowCategorias] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    window.location.href = "/";
  };

  return (
    <nav className="bg-[#1c1c1c] px-6 py-4 shadow-md relative z-50">
      {/* Topbar */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center text-white font-bold text-xl gap-2">
          <img src={Image} alt="logo" className="w-10 h-auto" />
          <span className="hover:text-[#FF6B00] transition">Traz pra mim</span>
        </a>

        {/* Search */}
        <div className="hidden md:flex items-center gap-2.5 w-full max-w-lg">
          <input
            type="text"
            placeholder="Buscar..."
            className="flex-1 px-4 py-2.5 rounded-full border border-gray-300 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-shadow"
          />
          <a href="/carrinho" className="text-white text-2xl hover:text-[#FF6B00] transition-colors">
            <PiShoppingCartFill />
          </a>
        </div>

        {/* Links de usuário */}
        <div className="hidden md:flex gap-5 text-white font-medium">
          <a className="hover:text-[#FF6B00]" href="/suporte">Suporte</a>
          {!isAuthenticated ? (
            <a className="hover:text-[#FF6B00]" href="/login">Login</a>
          ) : (
            <div className="flex flex-col items-end gap-1">
              <a href="/perfil" className="hover:text-[#FF6B00]">Perfil</a>
              <button onClick={handleLogout} className="hover:text-red-500 transition">Sair</button>
            </div>
          )}
        </div>

        {/* Botão mobile */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Navbar links */}
      <ul className="hidden md:flex justify-center gap-14 mt-5 text-white font-medium">
        {/* Categorias */}
        <li className="relative">
          <button
            onClick={() => setShowCategorias(!showCategorias)}
            className="hover:text-[#FF6B00] transition flex items-center gap-1"
          >
            Categorias <IoIosArrowDown />
          </button>
          {showCategorias && (
            <ul className="absolute top-full left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-md w-56 z-20">
              {[
                "Veículos", "Supermercados", "Tecnologias", "Eletrodomésticos",
                "Esportes e Fitness", "Ferramentas", "Construção", "Pet Shop",
                "Beleza e Cuidados", "Agro", "Brinquedos e Hobbies", "Modas"
              ].map((cat) => (
                <li key={cat}>
                  <a
                    href={`/categorias/${cat.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-[#F2F2F2] hover:text-[#FF6B00] transition"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <a href="/Supermercados" className="hover:text-[#FF6B00] flex items-center gap-1">
            Supermercados <GiShoppingCart />
          </a>
        </li>
        <li>
          <a href="/Ofertas" className="hover:text-[#FF6B00] flex items-center gap-1">
            Ofertas <BiSolidOffer />
          </a>
        </li>
        <li>
          <a href="/Lojas" className="hover:text-[#FF6B00] flex items-center gap-1">
            Lojas <IoStorefrontSharp />
          </a>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-[#1C1C1C] text-white rounded-lg shadow-lg p-4 space-y-3">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
          />
          <a href="/carrinho" className="block hover:text-[#FF6B00]">Carrinho</a>
          <a href="/suporte" className="block hover:text-[#FF6B00]">Suporte</a>
          <a href="/supermercados" className="block hover:text-[#FF6B00]">Supermercados</a>
          <a href="/ofertas" className="block hover:text-[#FF6B00]">Ofertas</a>
          <a href="/lojas" className="block hover:text-[#FF6B00]">Lojas</a>
          {!isAuthenticated ? (
            <a href="/login" className="block hover:text-[#FF6B00]">Login</a>
          ) : (
            <>
              <a href="/perfil" className="block hover:text-[#FF6B00]">Perfil</a>
              <button onClick={handleLogout} className="text-left w-full hover:text-red-500">Sair</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
