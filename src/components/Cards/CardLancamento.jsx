import React from "react";
import { Categoria1, Heading3, BodyMedium, LerMais } from "../index";
import styles from "./CardLancamento.module.css";

const CardLancamento = ({ url, category, title, subtitle }) => {
  return (
    <div className={styles.cardLancamento}>
      <Categoria1>{category}</Categoria1>
      <Heading3>{title}</Heading3>
      <BodyMedium>{subtitle}</BodyMedium>

      <LerMais link={url}>Ler mais</LerMais>
    </div>
  );
};

export default CardLancamento;
