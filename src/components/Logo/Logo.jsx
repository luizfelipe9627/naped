import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import Naped from "../../assets/svg/naped.svg";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img src={Naped} alt="Naped" />
        <h1 className={styles.titulo}>Naped</h1>
      </Link>
    </div>
  );
};

export default Logo;
