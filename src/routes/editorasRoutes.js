import express from "express";
import editoraController from "../controllers/editoraController.js";

const editoras = express.Router();

editoras
  .get("/editoras", editoraController.getEditoras)
  .get("/editoras/:id", editoraController.getEditorasByID)
  .post("/editoras", editoraController.cadastrarEditora)
  .put("/editoras/:id", editoraController.atualizarEditora)
  .delete("/editoras/:id", editoraController.deletarEditora);

export default editoras;
