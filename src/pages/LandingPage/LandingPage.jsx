import React from "react";
import styles from "./landing-page.module.scss";

import Header from "../../components/LandingPage/Header/Header";
import Features from "../../components/LandingPage/Features/Features";
import Advantages from "../../components/LandingPage/Advantages/Advantages";

const LandingPage = () => {
  return (
    <main>
      <Header />
      <Features />
      <Advantages />
    </main>
  );
};

export default LandingPage;
