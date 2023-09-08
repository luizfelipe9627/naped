import React from "react";
import { Heading1, LeadParagraph } from "../index";
import styles from "./Apresentacao.module.css";

const Apresentacao = () => {
  return (
    <div className={styles.apresentacao}>
      <Heading1>Mundo nerd? Naped!</Heading1>

      <LeadParagraph>
        O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
        assuntos relacionados.
      </LeadParagraph>
    </div>
  );
};

export default Apresentacao;
