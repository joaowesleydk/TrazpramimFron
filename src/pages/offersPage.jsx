import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProductCarousel from "../components/ProductCarousel";
 
const OffersPage = () => {
  return (
    <>
      <Navbar />
 
      <div className="bg-orange-100 min-h-screen px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-black mb-10">
          Ofertas Diárias!
        </h1>
 
        <ProductCarousel />
      </div>
 
      <Footer />
    </>
  );
};
 
export default OffersPage;