import React from "react";
import styles from "./header.module.scss";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSentimentVerySatisfied } from "react-icons/md";
import { SiAdguard } from "react-icons/si";

const buttonStyle = { fontSize: "2.2em", color: "gold" };
const featureIconStyle = { fontSize: "1.3em", color: "orange" };

const Header = () => {
  return (
    <div className={styles["header"]}>
      <div className={styles["header__image"]}></div>
      <h1 className={styles["header__title"]}>
        Sale of the <br />
        summer <br />
        collection
      </h1>
      <div className={styles["header__button"]}>
        <BsFillArrowRightCircleFill style={buttonStyle} />
        <p>Shop now</p>
      </div>
      <div className={styles["features"]}>
        <div className={styles["features__feature"]}>
          <div className={styles["features__icon"]}>
            <FaShippingFast style={featureIconStyle} />
          </div>
          <div>
            <h3 className={styles["features__title"]}>Free shipping</h3>
            <p className={styles["features__subtitle"]}>
              On purchases over $199
            </p>
          </div>
        </div>
        <div className={styles["features__feature"]}>
          <div className={styles["features__icon"]}>
            <MdOutlineSentimentVerySatisfied style={featureIconStyle} />
          </div>
          <div>
            <h3 className={styles["features__title"]}>
              99% Satisfied Customers
            </h3>
            <p className={styles["features__subtitle"]}>
              Our clients opinions speak for themselves
            </p>
          </div>
        </div>
        <div className={styles["features__feature"]}>
          <div className={styles["features__icon"]}>
            <SiAdguard style={featureIconStyle} />
          </div>
          <div>
            <h3 className={styles["features__title"]}>
              Originality Guaranteed
            </h3>
            <p className={styles["features__subtitle"]}>
              30 days warranty for each product from our store
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
