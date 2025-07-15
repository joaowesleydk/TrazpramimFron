import React, { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-300">
      {/* Botão "Mais informações" */}
      <div className="relative text-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 bg-white border border-gray-300 px-4 py-2 rounded-t-md text-sm font-medium shadow-sm inline-flex items-center gap-2"
        >
          <span
            className= {`transform transition-transform duration-300 bg-gradient-to-br  ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            ▲
          </span>
          Para mais informações
        </button>
      </div>

      {/* Colunas que aparecem/desaparecem */}
      {isOpen && (
        <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm py-10">
          {/* Coluna 1 */}
          <div>
            <h4 className="font-semibold mb-2">Quanto A</h4>
            <ul className="space-y-1">
              <li><a href="/sobre">Traz Pra Mim</a></li>
              <li><a href="#">Envios</a></li>
              <li><a href="#">Mais buscados</a></li>
            </ul>
          </div>

          {/* Coluna 2 */}
          <div>
            <h4 className="font-semibold mb-2">Suporte</h4>
            <ul className="space-y-1">
              <li><a href="#">Comprar</a></li>
              <li><a href="#">Solução de problemas</a></li>
              <li><a href="#">Segurança</a></li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div>
            <h4 className="font-semibold mb-2">Redes sociais</h4>
            <ul className="space-y-1">
              <li><a href="#">X</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>

          {/* Coluna 4 */}
          <div>
            <h4 className="font-semibold mb-2">Minha conta</h4>
            <ul className="space-y-1">
              <li><a href="login">Entre</a></li>
              <li><a href="#">Vender</a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
        </div>
      )}

      {/* Rodapé inferior fixo */}
      <div className="border-t border-gray-300 pt-4 pb-6 text-xs text-center text-gray-600 flex flex-wrap justify-center gap-4">
        <a href="#">Trabalhe conosco</a>
        <a href="#">Termos e condições</a>
        <a href="/ofertas">Ofertas</a>
        <a href="#">Privacidade</a>
        <a href="#">Acessibilidade</a>
        <a href="/suporte">Suporte</a>
        <a href="#">Seguros</a>
        <a href="#">Afiliados</a>
      </div>
    </footer>
  );
};

export default Footer;