import React from "react";
import styles from "./navbar-logo.module.scss";

const NavbarLogo = () => {
  return (
    <div className={styles["logo__container"]}>
      <img src="/assets/logo.svg" alt="logo" className={styles["logo"]} />
      <p className={styles["logo__title"]}>E-Shop</p>
    </div>
  );
};

export default NavbarLogo;
