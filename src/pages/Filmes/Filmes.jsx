import React from "react";
import { Head, Pesquisa } from "../index";
import img from "../../assets/img/filmes.png";
import { filmes } from "../../data/filmes";

const Filmes = () => {
  return (
    <React.Fragment>
      <Head
        title="Filmes"
        description="Filmes do site Naped, aqui você encontra as novidades sobre filmes."
      />

      <Pesquisa
        img={img}
        alt="Imagem de um filme como fundo"
        title="Filmes"
        subtitle="O Naped pode ser sua fonte de informações sobre o mundo nerd e
        outros assuntos relacionados."
        type={filmes}
      />
    </React.Fragment>
  );
};

export default Filmes;
