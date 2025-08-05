import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://trazpramimback.onrender.com/api/auth/login", {
                email,
                password: senha
            });

            const userData = response.data;
            localStorage.setItem("user", JSON.stringify(userData));

            alert("Usuário logado com sucesso!!");
            navigate("/");
        } catch (error) {
            if (error.response) {
                alert("Erro ao logar usuário, email ou senha incorretos");
            } else {
                alert("Erro ao conectar ao servidor");
            }
        }
    };

    return (
        <div className="bg-[#F2F2F2] min-h-screen flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold text-[#1C1C1C] text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-[#1C1C1C] mb-1">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-sm"
                            placeholder="Digite seu E-mail"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-[#1C1C1C] mb-1">Senha</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-sm"
                            placeholder="Digite sua Senha"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#FF6B00] text-white font-semibold py-2 rounded-md hover:bg-orange-500 transition duration-200"
                    >
                        Entrar
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-[#1C1C1C]">
                    Não tem conta?{" "}
                    <a href="/register" className="text-[#FF6B00] hover:underline">
                        Cadastre-se
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
