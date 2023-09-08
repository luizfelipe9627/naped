import React from "react";
import { Head, Infos } from "../index";
import { noticias } from "../../data/noticias";

const Noticia1 = () => {
  const noticia = new Array(noticias[0]);

  return (
    <section>
      <Head title={noticia[0].title} />

      {noticia.map(
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

export default Noticia1;
