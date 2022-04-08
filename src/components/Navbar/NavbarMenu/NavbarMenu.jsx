import React from "react";
import styles from "./navbar-menu.module.scss";

import { RiShoppingCart2Line } from "react-icons/ri";

const cartStyle = { color: "white", fontSize: "1.75rem" };
const cartStyleBlack = { color: "black", fontSize: "1.75rem" };

const NavbarMenu = (props) => {
  return (
    <div className={styles["menu"]}>
      <RiShoppingCart2Line
        style={props.scrolled ? cartStyleBlack : cartStyle}
      />
    </div>
  );
};

export default NavbarMenu;
