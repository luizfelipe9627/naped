import React from "react";
import styles from "./LeadParagraph.module.css";

const LeadParagraph = ({ children, ...props }) => {
  return (
    <p className={styles.leadParagraph} style={{ ...props }}>
      {children}
    </p>
  );
};

export default LeadParagraph;
