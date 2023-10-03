import React from "react";
import { Heading3, MediumCard } from "../index";
import styles from "./Noticias.module.css";
import { noticias } from "../../data/noticias";

const Noticias = ({ title }) => {
  return (
    <section className={styles.noticias}>
      <Heading3>{title}</Heading3>
      <div className={styles.container}>
        {noticias.map(({ id, img, url, category, title, subtitle, alt }) => {
          return (
            <MediumCard
              key={id}
              id={id}
              img={img}
              url={url}
              category={category}
              title={title}
              subtitle={subtitle}
              alt={alt}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Noticias;
