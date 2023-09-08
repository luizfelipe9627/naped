import React from "react";
import { Link } from "react-router-dom";
import { Heading2, BodyLarge, Categoria1 } from "../index";
import styles from "./CardDestaque.module.css";

const CardDestaque = ({ img, url, category, title, subtitle, alt }) => {
  return (
    <Link to={url} className={styles.card}>
      <div className={styles.image}>
        <img src={img} alt={alt} />
        <div className={styles.text}>
          <Categoria1>{category}</Categoria1>

          <Heading2>{title}</Heading2>

          <BodyLarge>{subtitle}</BodyLarge>
        </div>
      </div>
    </Link>
  );
};

export default CardDestaque;
