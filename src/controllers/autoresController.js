import autores from "../models/Autor.js";

class autoresController {
  static getAutores = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).json(autores);
    });
  };

  static getAutoresById = (req, res) => {
    let id = req.params.id;

    autores.findById(id, (err, autor) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Erro ao encontrar o autor` });
      } else {
        res.status(200).json(autor);
      }
    });
  };

  static cadastrarAutor = (req, res) => {
    let autor = new autores(req.body);

    autor.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Erro ao cadastrar o autor` });
      } else {
        res.status(200).send(autor.toJSON());
      }
    });
  };

  static atualizarAutor = (req, res) => {
    let id = req.params.id;

    autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Erro ao atualizar o autor` });
      } else {
        res
          .status(200)
          .send({ message: `Autor ${id} foi atualizado com sucesso` });
      }
    });
  };

  static deletarAutor = (req, res) => {
    let id = req.params.id;

    autores.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Erro ao deletar o autor` });
      } else {
        res
          .status(200)
          .send({ message: `Autor ${id} foi deletado com sucesso` });
      }
    });
  };
}

export default autoresController;
