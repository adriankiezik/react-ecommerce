import React from "react";
import styles from "./button.module.scss";

const Button = (props) => {
  return <span className={styles["button"]}>{props.text}</span>;
};

export default Button;
