import React from "react";
import styles from "./Heading2.module.css";

const Heading2 = ({ children, ...props }) => {
  return (
    <h2 className={styles.heading2} style={{ ...props }}>
      {children}
    </h2>
  );
};

export default Heading2;
