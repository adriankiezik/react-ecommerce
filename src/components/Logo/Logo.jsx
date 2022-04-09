import React from "react";
import styles from "./logo.module.scss";

const Logo = (props) => {
  return (
    <div className={styles["logo__container"]}>
      <img
        src="/assets/logo.svg"
        alt="logo"
        className={
          props.black
            ? styles["logo"] + " " + styles["logo--black"]
            : styles["logo"]
        }
      />
      <p
        className={
          props.black
            ? styles["logo__title"] + " " + styles["logo__title--black"]
            : styles["logo__title"]
        }
      >
        E-Shop
      </p>
    </div>
  );
};

export default Logo;
