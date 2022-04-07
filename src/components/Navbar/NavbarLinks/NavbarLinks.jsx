import React from "react";
import styles from "./navbar-links.module.scss";

const NavbarLinks = () => {
  return (
    <nav className={styles["links"]}>
      <ul className={styles["links__list"]}>
        <li className={styles["links__link"]}>Products</li>
        <li className={styles["links__link"]}>Contact</li>
        <li className={styles["links__link"]}>Why us?</li>
      </ul>
    </nav>
  );
};

export default NavbarLinks;
