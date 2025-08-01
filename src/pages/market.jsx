import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Markethero from "../components/marketHero";
 
const Market=() =>{
    return(
        <>
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Markethero></Markethero>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
        </>
    )
}
 
export default Market;