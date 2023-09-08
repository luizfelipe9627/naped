import React from "react";
import { BodyNormal } from "../index";
import styles from "./Footer.module.css";
import img from "../../assets/svg/powered.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <BodyNormal>
            Copyright © 2023{" "}
            <a
              href="https://iuricode.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Iuri Code
            </a>{" "}
            e{" "}
            <a
              href="https://github.com/luizfelipe9627"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luiz Felipe Silva
            </a>
            . Todos os direitos reservados.
          </BodyNormal>
        </div>

        <div className={styles.powered}>
          <BodyNormal>Powered by</BodyNormal>
          <img src={img} alt="{)" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
