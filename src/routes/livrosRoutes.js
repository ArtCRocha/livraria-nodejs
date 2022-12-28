import express from "express";
import livrosController from "../controllers/livrosController.js";

const livros = express.Router();

livros
  .get("/livros", livrosController.getLivros)
  .get("/livros/busca", livrosController.getByEditora)
  .get("/livros/:id", livrosController.getLivrosById)
  .post("/livros", livrosController.cadastrarLivro)
  .put("/livros/:id", livrosController.atualizaLivro)
  .delete("/livros/:id", livrosController.deleteLivro);

export default livros;
