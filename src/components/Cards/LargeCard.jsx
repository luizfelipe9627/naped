import React from "react";
import { Link } from "react-router-dom";
import { Heading2, BodyLarge, Categoria1 } from "../index";
import styles from "./LargeCard.module.css";

const LargeCard = ({ img, url, category, title, subtitle, alt }) => {
  return (
    <Link to={url} className={styles.largeCard}>
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

export default LargeCard;
