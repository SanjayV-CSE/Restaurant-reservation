import React from "react";
import Header from "./Header";
import OurFavourites from "./OurFavourites";
import ServicePage from "./ServicePage";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import { Router, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <div className="py=10">
      <Header />
      <OurFavourites />
      <ServicePage />
      <ContactUs  />
      <Footer />
    </div>
  );
};

export default Home;
