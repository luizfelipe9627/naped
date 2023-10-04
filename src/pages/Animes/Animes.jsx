import React from "react";
import { Head, Pesquisa } from "../index";
import img from "../../assets/img/animes.webp";
import { animes } from "../../data/animes";

const Animes = () => {
  return (
    <React.Fragment>
      <Head
        title="Animes"
        description="Animes do site Naped, aqui você encontra as novidades sobre animes."
      />

      <Pesquisa
        img={img}
        alt="Imagem de um anime como fundo"
        title="Animes"
        subtitle="O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados."
        type={animes}
      />
    </React.Fragment>
  );
};

export default Animes;
