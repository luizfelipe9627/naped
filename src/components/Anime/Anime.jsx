import React from "react";
import { Head, Infos } from "../index";
import { useParams } from "react-router-dom";
import { NotFound } from "../../pages";

const Anime = ({ animes }) => {
  const { id } = useParams();
  const anime = animes.find((item) => item.id === parseInt(id, 10));

  if (!anime) {
    return <NotFound />;
  }

  const { category, title, subtitle, img, alt, text1, text2 } = anime;

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

export default Anime;
