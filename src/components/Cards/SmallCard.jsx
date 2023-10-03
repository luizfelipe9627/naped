import React from "react";
import { Categoria1, Heading3, BodyMedium, LerMais } from "../index";
import styles from "./SmallCard.module.css";

const SmallCard = ({ url, category, title, subtitle }) => {
  return (
    <div className={styles.smallCard}>
      <Categoria1>{category}</Categoria1>
      <Heading3>{title}</Heading3>
      <BodyMedium>{subtitle}</BodyMedium>

      <LerMais link={url}>Ler mais</LerMais>
    </div>
  );
};

export default SmallCard;
