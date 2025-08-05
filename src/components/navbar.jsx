import React, { useState, useEffect } from "react";
import { PiShoppingCartFill } from "react-icons/pi";
import Image from "../assets/imagens/logo.png";
import { GiShoppingCart } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { IoStorefrontSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi"; // MOBILE #1: ícones para abrir/fechar o menu


const Navbar = () => {
  const [showCategorias, setShowCategorias] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user);
  }, []);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    window.location.href = '/';
  };


  return (
    <nav className="bg-gray-700 px-6 py-4 shadow-md rounded-b-lg">
      {/* Topo */}
      <div className="flex justify-between items-center">
        <a
          href="/"
          className="flex items-center text-white font-bold text-2xl gap-3 hover:text-gray-500 transition-colors"
        >
          <img src={Image} alt="logo" className="w-10 h-auto" />
          Traz pra mim
        </a>


        {/* MOBILE #2: botão menu hamburguer visível apenas no mobile */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>


        {/* Links topo - Desktop */}
        <div className="gap-5 text-white font-bold hidden md:flex">
          <a className="hover:text-gray-500" href="/suporte">Suporte</a>
          {!isAuthenticated && (
            <a className="hover:text-gray-500" href="/login">Login</a>
          )}
          {isAuthenticated && (
            <div className="flex flex-col items-end gap-1">
              <a
                href="/perfil"
                className="hover:text-gray-500 transition-colors"
              >
                Perfil
              </a>
              <button
                onClick={handleLogout}
                className="hover:text-gray-500 transition-colors"
              >
                Sair
              </button>
            </div>
          )}
        </div>
      </div>


      {/* Barra de busca */}
      <div className="flex justify-center items-center mt-2">
        <div className="flex items-center gap-2.5 w-full max-w-2xl">
          <input
            type="text"
            placeholder="Buscar..."
            className="flex-1 px-4 py-2.5 rounded-full border border-white bg-white text-gray-800 text-sm focus:outline-none focus:ring-4 focus:ring-orange-200 transition-shadow"
          />
          <a
            href="/carrinho"
            className="text-white text-2xl hover:text-gray-500 transition-colors"
          >
            <PiShoppingCartFill />
          </a>
        </div>
      </div>


      {/* Menu principal - Desktop */}
      <ul className="justify-center gap-20 list-none p-0 m-0 mt-6 relative hidden md:flex">
        <li className="relative">
          <button
            onClick={() => setShowCategorias(!showCategorias)}
            className="text-white font-medium hover:text-gray-500 transition-colors flex items-center gap-1"
          >
            Categorias <IoIosArrowDown />
          </button>


          {showCategorias && (
            <ul className="absolute top-full left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-md w-48 z-10">
              {[
                "Veículos", "Supermercados", "Tecnologias", "Eletrodomesticos",
                "Esportes e fitness", "Ferramentas", "Construção", "Pet Shop",
                "Beleza e Cuidados", "Agro", "Brinquedos e Hobbies", "Modas"
              ].map((cat) => (
                <li key={cat}>
                  <a
                    href={`/categorias/${cat.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-gray-200 transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>


        <li>
          <a
            href="/Supermercados"
            className="text-white font-medium hover:text-gray-500 transition-colors flex items-center gap-1"
          >
            Supermercados <GiShoppingCart />
          </a>
        </li>
        <li>
          <a
            href="/Ofertas"
            className="text-white font-medium hover:text-gray-500 transition-colors flex items-center gap-1"
          >
            Ofertas <BiSolidOffer />
          </a>
        </li>
        <li>
          <a
            href="/Lojas"
            className="text-white font-medium hover:text-gray-500 transition-colors flex items-center gap-1"
          >
            Lojas <IoStorefrontSharp />
          </a>
        </li>
      </ul>


      {/* MOBILE #3: Menu mobile visível apenas quando aberto */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col gap-3 text-white font-medium md:hidden">
          <a href="/suporte" className="hover:text-gray-400">Suporte</a>
          {!isAuthenticated && (
            <a href="/login" className="hover:text-gray-400">Login</a>
          )}
          {isAuthenticated && (
            <>
              <a href="/perfil" className="hover:text-gray-400">Perfil</a>
              <button onClick={handleLogout} className="hover:text-gray-400">Sair</button>
            </>
          )}
          <a href="/Supermercados" className="hover:text-gray-400 flex items-center gap-1">Supermercados <GiShoppingCart /></a>
          <a href="/Ofertas" className="hover:text-gray-400 flex items-center gap-1">Ofertas <BiSolidOffer /></a>
          <a href="/Lojas" className="hover:text-gray-400 flex items-center gap-1">Lojas <IoStorefrontSharp /></a>
          <details className="bg-white text-gray-800 rounded-md px-2 py-1">
            <summary className="cursor-pointer">Categorias</summary>
            <ul className="pl-4">
              {[
                "Veículos", "Supermercados", "Tecnologias", "Eletrodomesticos",
                "Esportes e fitness", "Ferramentas", "Construção", "Pet Shop",
                "Beleza e Cuidados", "Agro", "Brinquedos e Hobbies", "Modas"
              ].map((cat) => (
                <li key={cat}>
                  <a
                    href={`/categorias/${cat.toLowerCase()}`}
                    className="block py-1 hover:text-orange-600"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      )}
    </nav>
  );
};


export default Navbar;


 