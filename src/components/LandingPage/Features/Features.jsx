import React from "react";
import styles from "./features.module.scss";

import Button from "../../Button/Button";

const Features = () => {
  return (
    <div className={styles["featured"]}>
      <div className={styles["featured__section"]}>
        <div
          className={
            styles["featured__image"] + " " + styles["featured__image--1"]
          }
        ></div>
        <div className={styles["featured__content"]}>
          <h2 className={styles["featured__title"]}>
            New arrivals are now in!
          </h2>
          <div>
            <Button text="SHOW COLLECTION" />
          </div>
        </div>
      </div>
      <div className={styles["featured__section"]}>
        <div
          className={
            styles["featured__image"] + " " + styles["featured__image--2"]
          }
        ></div>
        <div className={styles["featured__content"]}>
          <h2 className={styles["featured__title"]}>Basic t-shirts $29.99</h2>
          <div>
            <Button text="MORE DETAILS" />
          </div>
        </div>
      </div>
      <div className={styles["featured__section"]}>
        <div
          className={
            styles["featured__image"] + " " + styles["featured__image--3"]
          }
        ></div>
        <div className={styles["featured__content"]}>
          <h2 className={styles["featured__title"]}>Sale this summer</h2>
          <div>
            <Button text="VIEW ALL" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
