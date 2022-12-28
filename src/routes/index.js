import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import editoras from "./editorasRoutes.js";
import cors from "cors";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Pagina inicial" });
  });
  app.use(express.json(), cors(), livros, autores, editoras);
};

export default routes;
