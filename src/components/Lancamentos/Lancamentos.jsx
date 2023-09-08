import React from "react";
import { Heading3, CardLancamento } from "../index";
import styles from "./Lancamentos.module.css";
import { lancamentos } from "../../data/lancamentos";


const Lancamentos = ({ title }) => {
  return (
    <section className={styles.lancamentos}>
      <Heading3>{title}</Heading3>

      <div className={styles.container}>
        {lancamentos.map(({ id, url, category, title, subtitle }) => {
          return (
            <CardLancamento
              key={id}
              id={id}
              url={url}
              category={category}
              title={title}
              subtitle={subtitle}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Lancamentos;
