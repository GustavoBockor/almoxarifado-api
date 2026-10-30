import { Colaborador } from "../model/Colaborador.js";

import {
    cadastrar,
    listar,
    buscarPorIndice,
    atualizar,
    deletar
} from "../repository/colaboradorRepository.js";

export function cadastrarColaborador(req, res) {
    const { nome, matricula, setor } = req.body;

    const colaborador = new Colaborador(nome, matricula, setor);

    cadastrar(colaborador);

    return res.status(201).json(colaborador);
}

export function listarColaboradores(req, res) {
    return res.status(200).json(listar());
}

export function buscarColaboradorPorIndice(req, res) {
    const indice = Number(req.params.indice);

    if (isNaN(indice) || indice < 0 || !buscarPorIndice(indice)) {
        return res.status(404).json({
            mensagem: "Colaborador não encontrado"
        });
    }

    return res.status(200).json(buscarPorIndice(indice));
}

export function atualizarColaborador(req, res) {
    const indice = Number(req.params.indice);

    if (isNaN(indice) || indice < 0 || !buscarPorIndice(indice)) {
        return res.status(404).json({
            mensagem: "Colaborador não encontrado"
        });
    }

    const colaboradorAtualizado = atualizar(indice, req.body);

    return res.status(200).json(colaboradorAtualizado);
}

export function deletarColaborador(req, res) {
    const indice = Number(req.params.indice);

    if (isNaN(indice) || indice < 0 || !buscarPorIndice(indice)) {
        return res.status(404).json({
            mensagem: "Colaborador não encontrado"
        });
    }

    deletar(indice);

    return res.status(204).end();
}