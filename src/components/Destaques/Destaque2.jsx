import React from "react";
import { Head, Infos } from "../index";
import { destaques } from "../../data/destaques";

const Destaque2 = () => {
  const destaque = new Array(destaques[1]);

  return (
    <section>
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
    </section>
  );
};

export default Destaque2;
