import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";  // CORRETO: useNavigate

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();  // Obtem função de navegação

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
            navigate("/");  // REDIRECIONAMENTO CORRETO
        } catch (error) {
            if (error.response) {
                alert("Erro ao logar usuário, email ou senha incorretos");
            } else {
                alert("Erro ao conectar ao servidor");
            }
        }
    };

    return (
        <div className="bg-white p-8 rounded-2x1 shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>E-mail</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                        placeholder="Digite seu E-mail"
                    />
                </div>
                <div>
                    <label>Senha</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                        className="w-full border border-gray-300 p-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base mb-3"
                        placeholder="Digite sua Senha"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-b-lg hover:bg-blue-300 transition">
                    Entrar
                </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600 ">
                não tem conta?{" "}
                <a href="/register" className="text-blue-600 hover:underline text-center p-2">
                    Cadastre-se
                </a>
            </p>
        </div>
    );
}

export default LoginForm;
