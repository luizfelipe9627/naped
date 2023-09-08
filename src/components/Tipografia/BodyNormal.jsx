import React from "react";
import styles from "./BodyNormal.module.css";

const BodyNormal = ({ children, ...props }) => {
  return (
    <p className={styles.bodyNormal} style={{ ...props }}>
      {children}
    </p>
  );
};

export default BodyNormal;
