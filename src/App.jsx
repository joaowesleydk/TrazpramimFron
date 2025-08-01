import React from "react";
import { BrowserRouter as Router, Routes, Route} from"react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import Suporte from "./pages/suporte";
import OffersPage from "./pages/offersPage";
import Sobre from "./pages/sobre";
 import Market from "./pages/market";
 import Pagamento from "./pages/pagamento"
import BelezaPage from "./pages/belezaPage";
import Lojas from "./pages/lojas";
import ComprarPage from "./pages/comprarPage";

 
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/suporte" element={<Suporte/>} />
        <Route path="/cadastro" element={<RegisterPage/>} />
        <Route path="/Ofertas" element={<OffersPage/>} />
        <Route path="/Sobre" element={<Sobre/>} />
        <Route path="/Supermercados" element={<Market/>} />
        <Route path="/categorias/Supermercados" element={<Market/>} />
        <Route path="/pagamento" element={<Pagamento/>} />
        <Route path="/categorias/Beleza e Cuidados" element={<BelezaPage/>} />
        <Route path="/lojas" element={<Lojas/>} />
        <Route path="/reportar" element={<Suporte/>} />
        <Route path="/comprar" element={<ComprarPage/>} />
      </Routes>
    </Router>
  )
}
 
export default App
