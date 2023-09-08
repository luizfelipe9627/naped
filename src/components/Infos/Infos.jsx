import React from "react";
import {
  Categoria2,
  Heading2,
  LeadParagraph,
  Noticias,
  BodyLarge,
} from "../index";
import styles from "./Infos.module.css";

const Infos = ({ category, title, subtitle, img, url, text1, text2 }) => {
  return (
    <div className={styles.infos}>
      <div className={styles.intro}>
        <Categoria2>{category}</Categoria2>
        <Heading2>{title}</Heading2>
        <LeadParagraph>{subtitle}</LeadParagraph>
        <img src={img} alt={url} />
      </div>

      <div className={styles.text}>
        <BodyLarge>{text1}</BodyLarge>
        <BodyLarge>{text2}</BodyLarge>
      </div>

      <Noticias title="Outras notícias parecidas" />
    </div>
  );
};

export default Infos;
