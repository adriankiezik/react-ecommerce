import React from "react";
import styles from "./navbar-logo.module.scss";

const NavbarLogo = (props) => {
  return (
    <div className={styles["logo__container"]}>
      <img
        src="/assets/logo.svg"
        alt="logo"
        className={
          props.scrolled
            ? styles["logo"] + " " + styles["logo--black"]
            : styles["logo"]
        }
      />
      <p
        className={
          props.scrolled
            ? styles["logo__title"] + " " + styles["logo__title--black"]
            : styles["logo__title"]
        }
      >
        E-Shop
      </p>
    </div>
  );
};

export default NavbarLogo;
