import React from "react";

import Header from "../../components/LandingPage/Header/Header";
import Features from "../../components/LandingPage/Features/Features";
import Advantages from "../../components/LandingPage/Advantages/Advantages";
import Products from "../../components/LandingPage/Products/Products";
import Newsletter from "../../components/LandingPage/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Copyright/Copyright";

const LandingPage = () => {
  return (
    <main>
      <Header />
      <Features />
      <Advantages />
      <Products />
      <Newsletter />
      <Footer />
      <Copyright />
    </main>
  );
};

export default LandingPage;
