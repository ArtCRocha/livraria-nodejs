import livros from "../models/Livros.js";

class livrosController {
  static getLivros = (req, res) => {
    livros
      .find()
      .populate("autor")
      .populate("editora")
      .exec((err, livros) => {
        if (err) {
          res.status(500).send({ message: `${err.message} - Erro ` });
        } else {
          res.status(200).json(livros);
        }
      });
  };

  static getLivrosById = (req, res) => {
    let id = req.params.id;

    livros
      .findById(id)
      .populate("autor", "nome")
      .populate("editora", "nome")
      .exec((err, livro) => {
        if (err) {
          res
            .status(500)
            .send({ message: `${err.message} - Erro ao encontrar o livro` });
        } else {
          res.status(200).json(livro);
        }
      });
  };

  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);

    livro.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Erro ao cadastrar o livro` });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };

  static atualizaLivro = (req, res) => {
    let id = req.params.id;

    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Erro ao atualizar o livro` });
      } else {
        res
          .status(200)
          .send({ message: `Livro ${id} foi atualizado com sucesso` });
      }
    });
  };

  static deleteLivro = (req, res) => {
    let id = req.params.id;

    livros.findByIdAndDelete(id, (err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Erro ao deletar o livro` });
      } else {
        res.status(200).send({ message: `Livro deletado com sucesso` });
      }
    });
  };

  static getByEditora = (req, res) => {
    let editora = req.query.editora;

    livros.find({ editora: editora }, {}, (err, livros) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Erro ao encontrar o livro` });
      } else {
        res.status(200).send(livros);
      }
    });
  };
}

export default livrosController;
