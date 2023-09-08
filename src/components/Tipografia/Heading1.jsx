import React from "react";
import styles from "./Heading1.module.css";

const Heading1 = ({ children, ...props }) => {
  return (
    <h1 className={styles.heading1} style={{ ...props }}>
      {children}
    </h1>
  );
};

export default Heading1;
