import React, { useState } from "react";
import styles from "./Pesquisa.module.css";
import search from "../../assets/svg/search.svg";
import { Heading2, BodyMedium, BodyLarge, Input, CardNoticia } from "../index";

const Pesquisa = ({ img, alt, title, subtitle, type }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showActiveResult, setShowActiveResult] = useState(false);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() !== "") {
      const filteredResults = type.filter((item) =>
        item.title.toLowerCase().includes(term),
      );
      setSearchResults(filteredResults);
      setShowActiveResult(filteredResults.length > 0);
    } else {
      setSearchResults([]);
      setShowActiveResult(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className={styles.pesquisa}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={img} alt={alt} />
        </div>

        <div className={styles.text}>
          <Heading2>{title}</Heading2>
          <BodyMedium>{subtitle}</BodyMedium>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          placeholder="Quer ajuda na procura? Pesquise aqui"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button>
          <img src={search} alt="Lupa de pesquisa" />
        </button>
      </form>

      <div
        className={
          showActiveResult ? `${styles.resultadoActive}` : `${styles.resultado}`
        }
      >
        {searchResults.length > 0 ? (
          (console.log(searchResults),
          searchResults.map(
            ({ id, img, url, category, title, subtitle, alt }) => (
              <CardNoticia
                key={id}
                id={id}
                img={img}
                url={url}
                category={category}
                title={title}
                subtitle={subtitle}
                alt={alt}
              />
            ),
          ))
        ) : (
          <BodyLarge>
            Ops, não encontramos nada! Tente pesquisar alguma coisa.
          </BodyLarge>
        )}
      </div>
    </section>
  );
};

export default Pesquisa;
