import React from "react";
import { Head, Pesquisa } from "../index";
import img from "../../assets/img/series.png";
import { series } from "../../data/series";

const Series = () => {
  return (
    <div>
      <Head
        title="Séries"
        description="Séries do site Naped, aqui você encontra as novidades sobre séries."
      />

      <Pesquisa
        img={img}
        alt="Imagem de um série como fundo"
        title="Séries"
        subtitle="O Naped pode ser sua fonte de informações sobre o mundo nerd e
        outros assuntos relacionados."
        type={series}
      />
    </div>
  );
};

export default Series;
