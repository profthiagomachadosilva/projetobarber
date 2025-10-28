import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Importa o modelo Agendamento
import Agendamento from "./models/Agendamento.js";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// =================== ROTAS ===================

// GET — lista todos os agendamentos
app.get("/agendamentos", function (req, res) {
    Agendamento.findAll()
        .then(function (agendamentos) {
            res.send(agendamentos);
        })
        .catch(function (erro) {
            res.send("Erro ao buscar os agendamentos: " + erro);
        });
});

// GET dinâmico — busca agendamentos por nome
// Exemplo: GET /agendamentos/Thiago
app.get("/agendamentos/:nome", function (req, res) {
    Agendamento.findAll({
        where: { nomeCompleto: req.params.nome }
    })
        .then(function (agendamentos) {
            res.send(agendamentos);
        })
        .catch(function (erro) {
            res.send("Agendamento não encontrado: " + erro);
        });
});

// POST — cadastra novo agendamento
app.post("/agendamentos", function (req, res) {
    Agendamento.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        servico: req.body.servico,
        data: req.body.data,
        horario: req.body.horario
    })
        .then(function () {
            res.send("Agendamento cadastrado com sucesso!");
        })
        .catch(function (erro) {
            res.send("Erro ao cadastrar o agendamento: " + erro);
        });
});

// PATCH — atualiza agendamento existente pelo ID
app.patch("/agendamentos/:id", function (req, res) {
    Agendamento.update(
        {
            nome: req.body.nome,
            telefone: req.body.telefone,
            servico: req.body.servico,
            data: req.body.data,
            horario: req.body.horario
        },
        { where: { id: req.params.id } }
    )
        .then(function () {
            res.send("Agendamento atualizado com sucesso!");
        })
        .catch(function (erro) {
            res.send("Erro ao atualizar o agendamento: " + erro);
        });
});

// DELETE — remove um agendamento pelo ID
app.delete("/agendamentos/:id", function (req, res) {
    Agendamento.destroy({
        where: { id: req.params.id }
    })
        .then(function () {
            res.send("Agendamento deletado com sucesso!");
        })
        .catch(function (erro) {
            res.send("Erro ao deletar agendamento: " + erro);
        });
});

// =================== INICIALIZAÇÃO DO SERVIDOR ===================
app.listen(3000, function () {
    console.log("O servidor está rodando na porta 3000");
});