import React from "react";
import { ButtonLink, Heading1, BodyLarge, Head, Heading3 } from "../../components";
import styles from "./NotFound.module.css";
import img from "../../assets/svg/404.svg";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <Head title="Erro 404" description="Página não encontrada" />

      <div className={styles.text}>
        <Heading1>Tenho más notícias para você!</Heading1>
        <BodyLarge>
          A página que você está procurando pode ter sido removida ou está
          temporariamente indisponível.
        </BodyLarge>
        <ButtonLink route="/">Voltar para o início</ButtonLink>
      </div>

      <div className={styles.image}>
        <img src={img} alt="Imagem 404" />
        <Heading3>
          Ups! Você chegou no espaço... volte para o mundo nerd!
        </Heading3>
      </div>
    </div>
  );
};

export default NotFound;
