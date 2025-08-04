import React from "react";
import { FaCreditCard, FaBarcode, FaMoneyBillWave } from "react-icons/fa";
import { SiPix } from "react-icons/si";

const formas = [
  {
    nome: "Cartão de Crédito",
    descricao: "Aceitamos Visa, MasterCard, Elo e outros. Pagamento em até 12x.",
    icone: <FaCreditCard size={28} />,
  },
  {
    nome: "Cartão de Débito",
    descricao: "Pagamento instantâneo direto da sua conta bancária.",
    icone: <FaMoneyBillWave size={28} />,
  },
  {
    nome: "Pix",
    descricao: "Pagamento instantâneo via Pix. Liberação imediata do pedido.",
    icone: <SiPix size={28} />,
  },
  {
    nome: "Boleto Bancário",
    descricao: "Liberação após confirmação de pagamento. Válido por até 3 dias.",
    icone: <FaBarcode size={28} />,
  },
];

const FormasDePagamento = () => {
  return (
    <div className="min-h-screen bg-white p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-500">
       <a href="/pagamento">Formas de Pagamento</a> 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {formas.map((forma, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-gray-200 p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-gray-800">{forma.icone}</div>
            <div>
              <h2 className="text-lg font-semibold">{forma.nome}</h2>
              <p className="text-sm">{forma.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormasDePagamento;
