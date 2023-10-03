import React from "react";
import { Head, Infos } from "../index";
import { useParams } from "react-router-dom";
import { NotFound } from "../../pages";

const Filme = ({ filmes }) => {
  const { id } = useParams();
  const filme = filmes.find((item) => item.id === parseInt(id, 10));

  if (!filme) {
    return <NotFound />;
  }

  const { category, title, subtitle, img, alt, text1, text2 } = filme;

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

export default Filme;
