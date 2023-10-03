import React from "react";
import { LargeCard } from "../index";
import styles from "./Destaques.module.css";
import { destaques } from "../../data/destaques";

const Destaques = () => {
  return (
    <section className={styles.destaques}>
      {destaques.map(({ id, img, url, category, title, subtitle, alt }) => {
        return (
          <LargeCard
            key={id}
            id={id}
            url={url}
            category={category}
            title={title}
            subtitle={subtitle}
            img={img}
            alt={alt}
          />
        );
      })}
    </section>
  );
};

export default Destaques;
