import React from "react";
import { Head, Infos } from "../index";
import { useParams } from "react-router-dom";
import { NotFound } from "../../pages";

const Jogo = ({ jogos }) => {
  const { id } = useParams();
  const jogo = jogos.find((item) => item.id === parseInt(id, 10));

  if (!jogo) {
    return <NotFound />;
  }

  const { category, title, subtitle, img, alt, text1, text2 } = jogo;

  return (
    <section>
      <Head title={title} />

      <Infos
        category={category}
        title={title}
        subtitle={subtitle}
        img={img}
        alt={alt}
        text1={text1}
        text2={text2}
      />
    </section>
  );
};

export default Jogo;
