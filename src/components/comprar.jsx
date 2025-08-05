import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaCreditCard, FaBarcode } from "react-icons/fa";
import { SiPix } from "react-icons/si";
import bairroImg from "../assets/imagens/bairro.png";

const CheckoutPage = () => {
  const location = useLocation();
  const produto = location.state?.produto;

  const [mostrarMapa, setMostrarMapa] = useState(false);
  const [cupom, setCupom] = useState("");
  const [mensagemCupom, setMensagemCupom] = useState("");
  const [desconto, setDesconto] = useState(0);
  const [cep, setCep] = useState("");
  const [pagamentoSelecionado, setPagamentoSelecionado] = useState("");
  const [mostrarEnderecoManual, setMostrarEnderecoManual] = useState(false);
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [cepGerado, setCepGerado] = useState("");
  const [mapaUrl, setMapaUrl] = useState("");
  const [mostrarBoleto, setMostrarBoleto] = useState(false);

  if (!produto) {
    return (
      <div className="w-screen h-screen flex items-center justify-center text-center text-red-600 font-bold text-xl p-4">
        Produto não encontrado. Volte e selecione um produto.
      </div>
    );
  }

  const aplicarCupom = () => {
    if (cupom.trim().toUpperCase() === "DESCONTO50") {
      setMensagemCupom("Cupom aplicado! 50% OFF");
      setDesconto(0.5);
    } else if (cupom.trim().toUpperCase() === "DESCONTO10") {
      setMensagemCupom("Cupom aplicado! 10% OFF");
      setDesconto(0.1);
    } else {
      setMensagemCupom("Cupom inválido.");
      setDesconto(0);
    }
  };

  const gerarCepEMapa = () => {
    const cepFake = "35000-000";
    setCepGerado(cepFake);
    setMapaUrl(bairroImg); // imagem estática como simulação
  };

  const precoNumerico = Number(
    produto.preco.replace("R$", "").replace(",", ".").trim()
  );
  const subtotal = precoNumerico * (produto.quantidade || 1);
  const total = subtotal - subtotal * desconto;

  const copiarTexto = async (texto) => {
    try {
      await navigator.clipboard.writeText(texto);
      alert("Copiado para a área de transferência!");
    } catch (err) {
      alert("Erro ao copiar: " + err);
    }
  };

  const pixKey = "123e4567-e89b-12d3-a456-426614174000";
  const boletoCodigo = "12345678901234567890";

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row gap-8 w-full h-full max-w-full">
        {/* LADO ESQUERDO - RESUMO DO PRODUTO */}
        <div className="flex-1 bg-[#F2F2F2] p-6 rounded-lg flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4 text-[#1C1C1C]">
            Checkout
          </h1>
          <div className="border border-gray-300 p-4 rounded-lg w-full max-w-sm bg-white shadow">
            <h2 className="text-2xl font-semibold mb-4 text-[#1C1C1C]">
              {produto.nome}
            </h2>
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-72 rounded-lg mb-4 mx-auto"
            />
            <div className="text-center">
              <p className={`mb-2 ${desconto > 0 ? "text-gray-500" : "text-[#1C1C1C]"}`}>
                <strong>Preço original:</strong> R$ {subtotal.toFixed(2)}
              </p>
              {desconto > 0 && (
                <p className="mb-2 text-red-500 line-through">
                  Desconto: - R$ {(subtotal * desconto).toFixed(2)}
                </p>
              )}
              <hr className="my-4 border-t" />
              <h3 className="text-xl font-bold text-[#28A745]">
                Total: R$ {total.toFixed(2)}
              </h3>
              {cep.length > 0 && (
                <p className="mt-4 text-gray-600">
                  📦 Entrega:{" "}
                  <span className="font-medium">3–5 dias úteis</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* LADO DIREITO - PAGAMENTO */}
        <div className="flex-1 bg-white p-6 rounded-lg flex flex-col overflow-y-auto shadow">
          <h2 className="text-2xl font-semibold mb-4 text-[#1C1C1C]">
            Pagamento
          </h2>

          {/* CEP */}
          <div className="mb-4">
            <label htmlFor="cep" className="block mb-1 font-medium text-[#1C1C1C]">
              Digite seu CEP:
            </label>
            <input
              id="cep"
              type="text"
              placeholder="00000-000"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              onClick={() => setMostrarEnderecoManual(true)}
              className="mt-2 w-full bg-[#FF6B00] hover:bg-orange-700 text-white py-2 rounded"
            >
              Não sei meu CEP
            </button>
          </div>

          {/* CUPOM */}
          <div className="mb-4">
            <label htmlFor="cupom" className="block mb-1 font-medium text-[#1C1C1C]">
              Cupom de Desconto:
            </label>
            <input
              id="cupom"
              type="text"
              placeholder="Digite seu cupom"
              value={cupom}
              onChange={(e) => setCupom(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              onClick={aplicarCupom}
              className="mt-2 w-full bg-[#FF6B00] hover:bg-orange-700 text-white py-2 rounded"
            >
              Aplicar Cupom
            </button>
            {mensagemCupom && (
              <p
                className={`mt-2 ${
                  mensagemCupom.includes("inválido")
                    ? "text-red-600"
                    : "text-[#28A745]"
                }`}
              >
                {mensagemCupom}
              </p>
            )}
          </div>

          {/* MÉTODOS DE PAGAMENTO */}
          <ul className="mb-6">
            <li
              className={`cursor-pointer mb-3 flex items-center gap-2 hover:underline ${
                pagamentoSelecionado === "Crédito" ? "font-bold text-[#FF6B00]" : "text-[#1C1C1C]"
              }`}
              onClick={() =>
                setPagamentoSelecionado(
                  pagamentoSelecionado === "Crédito" ? "" : "Crédito"
                )
              }
            >
              <FaCreditCard className="text-[#FF6B00]" /> Cartão de Crédito
            </li>
            <li
              className={`cursor-pointer mb-3 flex items-center gap-2 hover:underline ${
                pagamentoSelecionado === "Boleto" ? "font-bold text-[#FF6B00]" : "text-[#1C1C1C]"
              }`}
              onClick={() =>
                setPagamentoSelecionado(
                  pagamentoSelecionado === "Boleto" ? "" : "Boleto"
                )
              }
            >
              <FaBarcode className="text-[#1C1C1C]" /> Boleto Bancário
            </li>
            <li
              className={`cursor-pointer flex items-center gap-2 hover:underline ${
                pagamentoSelecionado === "Pix" ? "font-bold text-[#FF6B00]" : "text-[#1C1C1C]"
              }`}
              onClick={() =>
                setPagamentoSelecionado(
                  pagamentoSelecionado === "Pix" ? "" : "Pix"
                )
              }
            >
              <SiPix className="text-teal-600" /> PIX
            </li>
          </ul>

          {/* FORMULÁRIOS DE PAGAMENTO */}
          {pagamentoSelecionado === "Crédito" && (
            <div className="mb-4 space-y-3">
              <input type="text" placeholder="Número do Cartão" className="w-full p-2 border border-gray-300 rounded" />
              <input type="text" placeholder="Nome do Titular" className="w-full p-2 border border-gray-300 rounded" />
              <div className="flex gap-2">
                <input type="text" placeholder="Validade (MM/AA)" className="flex-1 p-2 border border-gray-300 rounded" />
                <input type="text" placeholder="CVV" className="w-24 p-2 border border-gray-300 rounded" />
              </div>
            </div>
          )}

          {pagamentoSelecionado === "Boleto" && (
            <div className="mb-4 p-4 bg-[#F2F2F2] border border-gray-300 rounded text-center">
              <p className="mb-2 font-medium text-[#1C1C1C]">Clique abaixo para gerar seu boleto:</p>
              <button
                className="bg-[#FF6B00] hover:bg-orange-700 text-white py-2 px-4 rounded"
                onClick={() => setMostrarBoleto(true)}
              >
                Gerar Boleto
              </button>
              {mostrarBoleto && (
                <>
                  <img
                    src={`https://bwipjs-api.metafloor.com/?bcid=code128&text=${boletoCodigo}&scale=3&height=10&includetext`}
                    alt="Código de Barras do Boleto"
                    className="mx-auto mt-4"
                  />
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <input readOnly className="bg-gray-200 p-2 rounded flex-1" value={boletoCodigo} />
                    <button
                      onClick={() => copiarTexto(boletoCodigo)}
                      className="bg-[#28A745] hover:bg-green-700 text-white py-2 px-4 rounded"
                    >
                      Copiar Código
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {pagamentoSelecionado === "Pix" && (
            <div className="mb-4 p-4 bg-[#F2F2F2] border border-gray-300 rounded text-center">
              <p className="mb-2 font-medium text-[#1C1C1C]">Copia e Cola:</p>
              <div className="flex items-center justify-center gap-2">
                <input readOnly className="bg-gray-200 p-2 rounded flex-1 break-all" value={pixKey} />
                <button
                  onClick={() => copiarTexto(pixKey)}
                  className="bg-[#28A745] hover:bg-green-700 text-white py-2 px-4 rounded"
                >
                  Copiar
                </button>
              </div>
              <p className="mb-2 font-medium mt-4 text-[#1C1C1C]">QR Code:</p>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?data=${pixKey}&size=200x200`}
                alt="QR Code Pix"
                className="mx-auto"
              />
              <button
                onClick={() => copiarTexto(pixKey)}
                className="mt-2 bg-[#FF6B00] hover:bg-orange-700 text-white py-2 px-4 rounded"
              >
                Copiar Chave Pix
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
