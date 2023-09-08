import React from "react";
import { Head, Infos } from "../index";
import { lancamentos } from "../../data/lancamentos";

const Lancamento1 = () => {
  const lancamento = new Array(lancamentos[0]);

  return (
    <section>
      <Head title={lancamento[0].title} />

      {lancamento.map(
        ({ id, category, title, subtitle, img, alt, text1, text2 }) => {
          return (
            <Infos
              key={id}
              category={category}
              title={title}
              subtitle={subtitle}
              img={img}
              alt={alt}
              text1={text1}
              text2={text2}
            />
          );
        },
      )}
    </section>
  );
};

export default Lancamento1;
