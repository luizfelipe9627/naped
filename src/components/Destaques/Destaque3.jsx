import React from "react";
import { Head, Infos } from "../index";
import { destaques } from "../../data/destaques";

const Destaque3 = () => {
  const destaque = new Array(destaques[2]);

  return (
    <section>
      <Head title={destaque[0].title} />

      {destaque.map(
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

export default Destaque3;
