import React from "react";
import styles from "./navbar-menu.module.scss";

import { RiShoppingCart2Line } from "react-icons/ri";

const cartStyle = { color: "white", fontSize: "1.75rem" };

const NavbarMenu = () => {
  return (
    <div className={styles["menu"]}>
      <RiShoppingCart2Line style={cartStyle} />
    </div>
  );
};

export default NavbarMenu;
