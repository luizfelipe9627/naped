import React from "react";
import styles from "./BodyMedium.module.css";

const BodyMedium = ({ children, ...props }) => {
  return (
    <p className={styles.bodyMedium} style={{ ...props }}>
      {children}
    </p>
  );
};

export default BodyMedium;
