import React from "react";
import styles from "./ButtonLink.module.css";
import { NavLink } from "react-router-dom";

const ButtonLink = ({ route, children }) => {
  return (
    <div className={styles.button}>
      <NavLink to={route}>{children}</NavLink>
    </div>
  );
};

export default ButtonLink;
