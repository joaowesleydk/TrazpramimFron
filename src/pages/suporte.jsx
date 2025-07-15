import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
 
const Suporte = () => {
    const [form, setForm] = useState({
        nome: "",
        email:"",
        mensagem:"",
    });
 
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value })
     };
 
     const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formulário enviado:", form);
        alert("mensagem enviada com sucesso!");
        setForm({nome: "", email: "", mensagem: ""});
     };
 
     return (
        <>
        <div className="bg-orange-100">
        <Navbar/>
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Suporte ao Cliente</h1>
            <p className="mb-6 text-gray-600 text-center">
                Estamos aqui para te ajudar! Confira abaixo as perguntas frequentes ou entre em contato conosco.
            </p>
 
            <h2 className="text-xl font-semibold mb-3 text-gray-700">Perguntas Frequentes</h2>
            <ul className="list-disc pl-5 mb-8 text-gray-600 space-y-3">
                <li>
                    <strong>Como recupero minha senha?</strong><br />
                    Clique em "Esqueci minha senha" na tela de login e siga os passos.
                </li>
                <li>
                    <strong>Como entro em contato com o suporte?</strong><br />
                    Use o formulário abaixo para nos enviar sua dúvida.
                </li>
                <li>
                    <strong>Onde posso alterar meus dados?</strong><br />
                    Vá em “Perfil” no menu e clique em “Editar”.
                </li>
            </ul>
 
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Formulário de Contato</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-600 focus:border-green-600"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-600 focus:border-orange-600"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mensagem:</label>
                    <textarea
                        name="mensagem"
                        value={form.mensagem}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                >
                    Enviar
                </button>
            </form>
        </div>
        </div>
        <Footer/>
        </>
    );
};
 
export default Suporte;
 