import React from "react";
import styles from "./landing-page.module.scss";

import Header from "../../components/LandingPage/Header/Header";
import Featured from "../../components/LandingPage/Featured/Featured";
import Advantages from "../../components/LandingPage/Advantages/Advantages";

const LandingPage = () => {
  return (
    <main>
      <Header />
      <Featured />
      <Advantages />
    </main>
  );
};

export default LandingPage;
