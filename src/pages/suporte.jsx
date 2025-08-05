import React, { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const SuportePage = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", form);
    alert("Mensagem enviada com sucesso!");
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <>
      <div className="bg-white min-h-screen flex flex-col">
        <Navbar />

        <div className="max-w-3xl mx-auto px-4 py-12 flex-grow">
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
            Suporte ao Cliente
          </h1>
          <p className="mb-8 text-gray-600 text-center">
            Estamos aqui para te ajudar! Confira abaixo as perguntas frequentes
            ou entre em contato conosco.
          </p>

          {/* FAQ */}
          <h2 className="text-xl font-semibold mb-3 text-gray-700">
            Perguntas Frequentes
          </h2>
          <ul className="list-disc pl-5 mb-10 text-gray-600 space-y-3">
            <li>
              <strong>Como recupero minha senha?</strong>
              <br />
              Clique em <em>"Esqueci minha senha"</em> na tela de login e siga
              os passos.
            </li>
            <li>
              <strong>Como entro em contato com o suporte?</strong>
              <br />
              Use o formulário abaixo para nos enviar sua dúvida.
            </li>
            <li>
              <strong>Onde posso alterar meus dados?</strong>
              <br />
              Vá em <em>“Perfil”</em> no menu e clique em <em>“Editar”</em>.
            </li>
          </ul>

          {/* Formulário */}
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Formulário de Contato
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nome:
              </label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#FF6B00] focus:border-[#FF6B00]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#FF6B00] focus:border-[#FF6B00]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mensagem:
              </label>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                required
                rows="5"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#FF6B00] focus:border-[#FF6B00]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#FF6B00] hover:bg-[#e65a00] text-white font-semibold py-2 px-6 rounded-md transition duration-300"
            >
              Enviar
            </button>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SuportePage;
