import editoras from "../models/Editora.js";

class editoraController {
  static getEditoras = (req, res) => {
    editoras.find((err, editora) => {
      res.status(200).json(editora);
    });
  };

  static getEditorasByID = (req, res) => {
    let id = req.params.id;

    editoras.findById(id, (err, editora) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Erro ao encontrar a editora` });
      } else {
        res.status(200).json(editora);
      }
    });
  };

  static cadastrarEditora = (req, res) => {
    let editora = new editoras(req.body);
    editora.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Erro ao cadastrar a editora` });
      } else {
        res.status(200).send(editora.toJSON());
      }
    });
  };

  static atualizarEditora = (req, res) => {
    let id = req.params.id;

    editoras.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Erro ao atualizar a editora` });
      } else {
        res
          .status(200)
          .send({ message: `Editora ${id} foi atualizada com sucesso` });
      }
    });
  };

  static deletarEditora = (req, res) => {
    let id = req.params.id;

    editoras.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Erro ao deletada a editora` });
      } else {
        res
          .status(200)
          .send({ message: `Editora ${id} foi deletada com sucesso` });
      }
    });
  };

  static buscarEditoraPorNome = async (nome) => {
    return await editoras.findOne({ nome: nome });
  };
}

export default editoraController;
