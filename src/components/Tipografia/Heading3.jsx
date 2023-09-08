import React from "react";
import styles from "./Heading3.module.css";

const Heading3 = ({ children, ...props }) => {
  return (
    <h3 className={styles.heading3} style={{ ...props }}>
      {children}
    </h3>
  );
};

export default Heading3;
