import React from "react";
import styles from "./landing-page.module.scss";

import Header from "../../components/LandingPage/Header/Header";
import Features from "../../components/LandingPage/Features/Features";
import Advantages from "../../components/LandingPage/Advantages/Advantages";
import Products from "../../components/LandingPage/Products/Products";

const LandingPage = () => {
  return (
    <main>
      <Header />
      <Features />
      <Advantages />
      <Products />
    </main>
  );
};

export default LandingPage;
