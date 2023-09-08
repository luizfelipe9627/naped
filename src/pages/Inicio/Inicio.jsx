import React from "react";
import {
  Head,
  Apresentacao,
  Noticias,
  Destaques,
  Lancamentos,
} from "../../components";

const Inicio = () => {
  return (
    <section>
      <Head
        title="Início"
        description="Home do site Naped, aqui você encontra as novidades do site."
      />

      <Apresentacao />
      <Destaques />
      <Noticias title="Notícias mais recentes" />
      <Lancamentos title="Lançamentos" />
    </section>
  );
};

export default Inicio;
