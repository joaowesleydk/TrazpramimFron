import React, { useState } from "react";
import axios from 'axios'



const RegisterForm = () => {
    const [nome, setName] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://trazpramimback.onrender.com/api/users", {
                name: nome,
                email,
                password: senha
            });

            alert("Usuário cadastrado com sucesso!!" + `nome: ${response.data.name} email: ${response.data.email}`)

            window.location.href = "/login"
        } catch (error) {
            if (error.response) {
                alert("Erro ao cadastrar usuário")
            } else {
                alert("Erro ao conectar ao servidor")
            }
        }



    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Cadastro</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                            Nome completo
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={nome}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
                            placeholder="Digite seu nome"
                        />
                    </div>
 
                   
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                            E-mail
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-base"
                            placeholder="Digite seu e-mail"
                        />
                    </div>
 
                  
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                            Senha
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
                            placeholder="Digite sua senha"
                        />
                    </div>
 
                   
                    <button
                        type="submit"
                        className="w-full bg-gray-500 text-white py-3 rounded-md hover:bg-gray-800 transition-colors duration-300 font-semibold text-lg"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
};
 
export default RegisterForm;