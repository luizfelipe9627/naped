import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Destaque1,
  Destaque2,
  Destaque3,
  Noticia1,
  Noticia2,
  Noticia3,
  Lancamento1,
  Lancamento2,
} from "./components";

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

      <Route path="/series/1" element={<Destaque1 />} />
      <Route path="/jogos/1" element={<Destaque2 />} />
      <Route path="/animes/1" element={<Destaque3 />} />

      <Route path="/filmes/1" element={<Noticia1 />} />
      <Route path="/animes/2" element={<Noticia2 />} />
      <Route path="/jogos/2" element={<Noticia3 />} />

      <Route path="/series/2" element={<Lancamento1 />} />
      <Route path="/filmes/2" element={<Lancamento2 />} />
    </Routes>
  );
}

export default AppRoutes;
