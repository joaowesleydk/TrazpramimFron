import React from "react";
import Footer from "../components/footer";
import Comprar from "../components/comprar"
import Navbar from "../components/navbar";
 
 
 
const ComprarPage = () => {
    return (
        <>
        <div className="flex flex-col min-h-screen bg-cover bg-center ">
 
            <Navbar/>
            <div>
                <div>
                    <Comprar/>
               
                </div>
            </div>
            <Footer/>
            </div>
        </>
    )
}
    export default ComprarPage;
 