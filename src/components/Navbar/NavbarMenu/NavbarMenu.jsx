import styles from "./navbar-menu.module.scss";

import { RiShoppingCart2Line } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

const cartStyle = { color: "white", fontSize: "1.5rem" };
const cartStyleBlack = { color: "black", fontSize: "1.5rem" };

const NavbarMenu = (props) => {
  return (
    <div className={styles["menu"]}>
      <RiShoppingCart2Line
        style={props.scrolled ? cartStyleBlack : cartStyle}
      />
      <FiMenu
        className={styles["menu--mobile"]}
        style={props.scrolled ? cartStyleBlack : cartStyle}
        onClick={() => {
          props.setOpen(true);
          console.log("clicked button");
        }}
      />
    </div>
  );
};

export default NavbarMenu;
