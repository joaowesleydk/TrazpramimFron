import React from "react";
import Navbar from "../components/navbar";
import Lojashero from "../components/lojasHero";
import Footer from "../components/footer";
 
const Lojas =() =>{
    return(
        <>
        <Navbar/>
        <div>
            <Lojashero/>
        </div>
        <Footer/>
        </>
    )
}
 
export default Lojas;