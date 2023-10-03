import React from "react";
import { Routes, Route } from "react-router-dom";

import { Filme, Serie, Jogo, Anime } from "./components";

import {
  Inicio,
  Series,
  Filmes,
  Animes,
  Jogos,
  NotFound,
  Login,
  Cadastro,
} from "./pages";

import { filmes } from "./data/filmes";
import { series } from "./data/series";
import { jogos } from "./data/jogos";
import { animes } from "./data/animes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/series" element={<Series />} />
      <Route path="/filmes" element={<Filmes />} />
      <Route path="/animes" element={<Animes />} />
      <Route path="/jogos/" element={<Jogos />} />
      <Route path="*" element={<NotFound />} />

      <Route path="conta/login" element={<Login />} />
      <Route path="conta/cadastrar" element={<Cadastro />} />

      <Route path="/filmes/:id" element={<Filme filmes={filmes} />} />
      <Route path="/series/:id" element={<Serie series={series} />} />
      <Route path="/jogos/:id" element={<Jogo jogos={jogos} />} />
      <Route path="/animes/:id" element={<Anime animes={animes} />} />
    </Routes>
  );
}

export default AppRoutes;
