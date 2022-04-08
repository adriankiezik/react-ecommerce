import React from "react";
import styles from "./landing-page.module.scss";

import Header from "../../components/LandingPage/Header/Header";
import Featured from "../../components/LandingPage/Featured/Featured";

const LandingPage = () => {
  return (
    <main>
      <Header />
      <Featured />
    </main>
  );
};

export default LandingPage;
