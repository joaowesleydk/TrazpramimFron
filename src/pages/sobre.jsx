import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const AccordionSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-2xl font-semibold text-black hover:underline"
      >
        {title}
      </button>
      {isOpen && <div className="mt-2 text-gray-700 text-lg">{children}</div>}
    </div>
  );
};

const Sobre = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Traz Pra Mim – A qualquer hora, em qualquer lugar, o que você precisar!
          </h1>
          <p className="mb-10 text-lg text-center">
            Traz tudo. Pra todo mundo. A qualquer hora. Em qualquer lugar.
          </p>

          <AccordionSection title="O que é o Traz Pra Mim?">
            <p>
              Somos uma plataforma moderna e dinâmica, pensada para quem quer conveniência, agilidade e variedade. Entregamos qualquer tipo de produto, 24 horas por dia, 7 dias por semana, diretamente na sua mão — sem complicação.
            </p>
            <p className="mt-2">
              Nosso diferencial? Não somos limitados por categoria, horário ou localização. Estamos aqui para trazer pra você exatamente o que você precisa, do jeito mais rápido e fácil possível.
            </p>
          </AccordionSection>

          <AccordionSection title="O que você encontra aqui?">
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Supermercado (alimentos, bebidas, limpeza, pet...)</li>
              <li>Farmácia (medicamentos, higiene, cuidados diários)</li>
              <li>Moda (roupas, calçados, acessórios)</li>
              <li>Tecnologia (eletrônicos, periféricos, gadgets)</li>
              <li>Presentes (flores, kits personalizados, lembranças)</li>
              <li>E muito mais! A lista cresce todos os dias.</li>
            </ul>
          </AccordionSection>

          <AccordionSection title="Como funciona?">
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>Acesse o site ou app</li>
              <li>Escolha o que precisa</li>
              <li>Informe o local da entrega</li>
              <li>Confirme o pedido</li>
            </ol>
            <p className="mt-4">
              Seja para aquela compra rápida do dia a dia ou uma emergência de madrugada — nós estamos prontos para agir.
            </p>
          </AccordionSection>

          <AccordionSection title="Por que usar o Traz Pra Mim?">
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>Tudo em um só lugar:</strong> sem precisar visitar vários sites ou apps.</li>
              <li><strong>Rápido e prático:</strong> pensado para que você resolva tudo em poucos minutos.</li>
              <li><strong>Entrega onde você estiver:</strong> casa, trabalho, hotel, parque...</li>
              <li><strong>Disponível 24/7:</strong> a qualquer hora, sem restrições.</li>
              <li><strong>Preços justos:</strong> com ofertas e parceiros confiáveis.</li>
            </ul>
          </AccordionSection>

          <AccordionSection title="Nossa promessa para você">
            <p>
              No Traz Pra Mim, o foco é você. Nosso time está em constante evolução para garantir a melhor experiência possível. Trabalhamos com tecnologia de ponta, uma rede sólida de parceiros e entregadores, e uma equipe atenta ao que realmente importa: fazer sua vida mais fácil.
            </p>
          </AccordionSection>

          <AccordionSection title="Estamos expandindo!">
            <p>
              Em breve, o Traz Pra Mim estará disponível em novas cidades e regiões, levando mais praticidade para ainda mais pessoas.
            </p>
          </AccordionSection>

          <div className="mt-10 p-6 bg-gray-200 border-l-4 border-[#FF6B00] rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Quer experimentar o futuro das compras?</h3>
            <p className="text-lg mb-2">
              Cadastre-se, explore e aproveite uma nova forma de comprar — do seu jeito!
            </p>
            <button className="mt-2 px-5 py-3 bg-[#FF6B00] text-white rounded-xl hover:bg-orange-800 transition">
             <a href="/cadastro">Cadastre-se agora</a> 
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Sobre;

