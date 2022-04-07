import React from "react";
import styles from "./navbar.module.scss";

import NavbarLogo from "./NavbarLogo/NavbarLogo";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import NavbarMenu from "./NavbarMenu/NavbarMenu";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavbarLogo />
      <NavbarLinks />
      <NavbarMenu />
    </div>
  );
};

export default Navbar;
