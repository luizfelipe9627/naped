import React from "react";
import { Head, Infos } from "../index";
import { useParams } from "react-router-dom";
import { NotFound } from "../../pages";

const Serie = ({ series }) => {
  const { id } = useParams();
  const serie = series.find((item) => item.id === parseInt(id, 10));

  if (!serie) {
    return <NotFound />;
  }

  const { category, title, subtitle, img, alt, text1, text2 } = serie;

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

export default Serie;
