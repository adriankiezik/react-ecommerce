import React from "react";
import styles from "./newsletter.module.scss";

import Button from "../../Button/Button";
import Input from "../../Input/Input";

const Newsletter = () => {
  return (
    <div className={styles["newsletter"]}>
      <img
        src="/assets/newsletter.jpg"
        alt="newsletter"
        className={styles["newsletter__image"]}
      />
      <div className={styles["newsletter__content"]}>
        <div className={styles["newsletter__column"]}>
          <h1 className={styles["newsletter__title"]}>
            Subscribe to our newsletter and receive exclusive offers every week
          </h1>
        </div>
        <div className={styles["newsletter__column"]}>
          <Input type="email" placeholder="Email address" />
          <Button text="SUBSCRIBE" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
