import React from "react";
import { Head, Pesquisa } from "../index";
import img from "../../assets/img/jogos.webp";
import { jogos } from "../../data/jogos";

const Jogos = () => {
  return (
    <section>
      <Head
        title="Jogos"
        description="Jogos do site Naped, aqui você encontra as novidades sobre jogos."
      />

      <Pesquisa
        img={img}
        alt="Imagem de um jogo como fundo"
        title="Jogos"
        subtitle="O Naped pode ser sua fonte de informações sobre o mundo nerd e
        outros assuntos relacionados."
        type={jogos}
      />
    </section>
  );
};

export default Jogos;
