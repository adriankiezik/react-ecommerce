import React from "react";
import styles from "./navbar-links.module.scss";

const NavbarLinks = (props) => {
  return (
    <nav className={styles["links"]}>
      <ul className={styles["links__list"]}>
        <li
          className={
            props.scrolled
              ? styles["links__link"] + " " + styles["links__link--black"]
              : styles["links__link"]
          }
        >
          Products
        </li>
        <li
          className={
            props.scrolled
              ? styles["links__link"] + " " + styles["links__link--black"]
              : styles["links__link"]
          }
        >
          Contact
        </li>
        <li
          className={
            props.scrolled
              ? styles["links__link"] + " " + styles["links__link--black"]
              : styles["links__link"]
          }
        >
          Why us?
        </li>
      </ul>
    </nav>
  );
};

export default NavbarLinks;
