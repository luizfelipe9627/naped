import React from "react";
import styles from "./BodyLarge.module.css";

const BodyLarge = ({ children, ...props }) => {
  return (
    <p className={styles.bodyLarge} style={{ ...props }}>
      {children}
    </p>
  );
};

export default BodyLarge;
