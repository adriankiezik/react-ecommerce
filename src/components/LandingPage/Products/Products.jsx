import React from "react";
import styles from "./products.module.scss";

import Button from "../../Button/Button";
import ProductCarousel from "../../ProductCarousel/ProductCarousel";

const Products = () => {
  return (
    <div className={styles["products"]}>
      <div className={styles["products__titlebar"]}>
        <h1 className={styles["products__title"]}>Selected just for you</h1>
        <Button text="SHOW ALL" border={true} />
      </div>
      <ProductCarousel />
    </div>
  );
};

export default Products;
