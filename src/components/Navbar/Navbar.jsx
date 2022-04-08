import React, { useLayoutEffect, useState } from "react";
import styles from "./navbar.module.scss";

import NavbarLogo from "./NavbarLogo/NavbarLogo";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import NavbarMenu from "./NavbarMenu/NavbarMenu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener("scroll", ListenToScroll);
  });

  const ListenToScroll = () => {
    const windowScroll = document.documentElement.scrollTop;
    if (windowScroll > 0) {
      setScrolled(true);
      return;
    }
    setScrolled(false);
  };

  return (
    <div
      className={
        scrolled
          ? styles["navbar"] + " " + styles["navbar--scrolled"]
          : styles["navbar"]
      }
    >
      <NavbarLogo scrolled={scrolled} />
      <NavbarLinks scrolled={scrolled} />
      <NavbarMenu scrolled={scrolled} />
    </div>
  );
};

export default Navbar;
