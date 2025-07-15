import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import FormasDePagamento from "../components/formasDePagamento";

const Pagamento = () => {
    return (
        <>
        <div className="flex flex-col min-h-screen ">
            <Navbar/>
            <div className=" flex-grow  ">
                <FormasDePagamento/>
             
            </div>
              <Footer/>
        </div>
        </>
    )
}




export default Pagamento;