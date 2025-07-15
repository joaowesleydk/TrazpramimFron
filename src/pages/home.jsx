import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Hero from "../components/hero"

const Home = () => {
    return (
        <>
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className=" flex-grow">
             <Hero/>
            </div>
              <Footer/>
        </div>
        </>
    )
}




export default Home;