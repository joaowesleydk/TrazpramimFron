import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from 'jwt-decode';


const RegisterForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://trazpramimback.onrender.com/api/users", {
                name: nome,
                email,
                password: senha
            });

            alert(`✅ Usuário cadastrado com sucesso!\nNome: ${response.data.name}\nEmail: ${response.data.email}`);
            navigate("/login");
        } catch (error) {
            if (error.response) {
                alert("❌ Erro ao cadastrar usuário");
            } else {
                alert("⚠️ Erro ao conectar ao servidor");
            }
        }
    };

    // Lida com autenticação do Google
    const handleGoogleSuccess = async (credentialResponse) => {
        try {
            const decoded = jwt_decode(credentialResponse.credential);
            const { name, email, sub } = decoded;

            // Faz o cadastro do usuário com as informações do Google
            const response = await axios.post("https://trazpramimback.onrender.com/api/users", {
                name,
                email,
                password: sub // Usa o Google sub como senha (recomendado criptografar no backend)
            });

            alert(`✅ Conta Google vinculada com sucesso!\nBem-vindo(a), ${response.data.name}`);
            navigate("/login");
        } catch (error) {
            alert("Erro ao autenticar com Google");
        }
    };

    return (
        <GoogleOAuthProvider clientId="SEU_CLIENT_ID_AQUI">
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="bg-[#F2F2F2] p-8 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-center mb-6 text-[#1C1C1C]">Cadastro</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm text-[#1C1C1C] mb-1">Nome completo</label>
                            <input
                                type="text"
                                name="name"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-sm sm:text-base"
                                placeholder="Digite seu nome"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm text-[#1C1C1C] mb-1">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-sm sm:text-base"
                                placeholder="Digite seu e-mail"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm text-[#1C1C1C] mb-1">Senha</label>
                            <input
                                type="password"
                                name="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-sm sm:text-base"
                                placeholder="Digite sua senha"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-6 w-full bg-[#FF6B00] text-white py-2 rounded-b-lg hover:bg-orange-600 transition"
                        >
                            Cadastrar
                        </button>
                    </form>

                    <div className="mt-4">
                        <p className="text-center text-sm text-[#1C1C1C] mb-2">Ou cadastre-se com:</p>
                        <GoogleLogin
                            onSuccess={handleGoogleSuccess}
                            onError={() => alert("Erro ao fazer login com o Google")}
                        />
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Já tem conta?{" "}
                        <a href="/login" className="text-[#FF6B00] hover:underline">
                            Faça login
                        </a>
                    </p>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default RegisterForm;
