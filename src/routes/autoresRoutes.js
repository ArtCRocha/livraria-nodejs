import express from "express";
import autoresController from "../controllers/autoresController.js";

const autores = express.Router();

autores
  .get("/autores", autoresController.getAutores)
  .get("/autores/:id", autoresController.getAutoresById)
  .post("/autores", autoresController.cadastrarAutor)
  .put("/autores/:id", autoresController.atualizarAutor)
  .delete("/autores/:id", autoresController.deletarAutor);

export default autores;
