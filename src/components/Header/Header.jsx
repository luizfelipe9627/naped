import React from "react";
import { NavLink } from "react-router-dom";
import { Logo, ButtonLink } from "../index";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = (event) => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }

    if (event.target.tagName === "A") {
      setIsMenuOpen(false);
      document.body.style.overflow = "initial";
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />

        <button
          className={`${styles.navMobile} ${isMenuOpen ? styles.active : ""}`}
          onClick={closeMenu}
        >
          <span className={styles.iconLines}></span>
          <span className={styles.iconLines}></span>
          <span className={styles.iconX}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <ul onClick={closeMenu}>
            <li>
              <NavLink to="/" end>
                Início
              </NavLink>
            </li>

            <li>
              <NavLink to="/series">Séries</NavLink>
            </li>

            <li>
              <NavLink to="/filmes">Filmes</NavLink>
            </li>

            <li>
              <NavLink to="/animes">Animes</NavLink>
            </li>

            <li>
              <NavLink to="/jogos">Jogos</NavLink>
            </li>

            <li>
              <ButtonLink route={"conta/login"}>
                Minha conta
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
