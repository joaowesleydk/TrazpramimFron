import React from "react";
import Navbar from "../components/navbar";
import Lojashero from "../components/lojashero";
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