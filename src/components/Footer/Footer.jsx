import React from "react";
import styles from "./footer.module.scss";

import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer__padding"]}>
        <div className={styles["footer__logo"]}>
          <Logo black={true} />
        </div>
        <p className={styles["footer__subtitle"]}>
          E-Shop has clothing for the young, the old & everyone in between
          &#8211; but most importantly, for the fashionable.
        </p>
      </div>
      <div>
        <h4 className={styles["footer__title"]}>Shopping online</h4>
        <ul className={styles["footer__list"]}>
          <li>Order status</li>
          <li>Shipping and delivery</li>
          <li>Returns</li>
          <li>Payment options</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div>
        <h4 className={styles["footer__title"]}>Information</h4>
        <ul className={styles["footer__list"]}>
          <li>Gift cards</li>
          <li>Find a store</li>
          <li>Newsletter</li>
          <li>Become a member</li>
          <li>Site feedback</li>
        </ul>
      </div>
      <div>
        <h4 className={styles["footer__title"]}>Contact</h4>
        <ul className={styles["footer__list"]}>
          <li>kiezikadrian@gmail.com</li>
          <li>Hotline: +1 131 138 138</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
