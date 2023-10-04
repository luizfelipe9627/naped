import React from "react";
import { Heading3, BodyMedium, Categoria2, LerMais } from "../index";
import styles from "./MediumCard.module.css";

const MediumCard = ({ img, url, category, title, subtitle, alt }) => {
  return (
    <div className={styles.mediumCard}>
      <div className={styles.image}>
        <img src={img} alt={alt} />
      </div>

      <div className={styles.text}>
        <Categoria2>{category}</Categoria2>
        <Heading3>{title}</Heading3>
        <BodyMedium>{subtitle}</BodyMedium>

        <LerMais link={url}>
          Ler mais
        </LerMais>
      </div>
    </div>
  );
};

export default MediumCard;
