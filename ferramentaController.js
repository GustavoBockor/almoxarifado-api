import { Ferramenta } from "../model/Ferramenta.js";

import {
    cadastrar,
    listar,
    buscarPorIndice,
    atualizar,
    deletar
} from "../repository/ferramentaRepository.js";

export function cadastrarFerramenta(req, res) {
    const { codigo, descricao, estado } = req.body;

    const ferramenta = new Ferramenta(codigo, descricao, estado);

    cadastrar(ferramenta);

    return res.status(201).json(ferramenta);
}

export function listarFerramentas(req, res) {
    return res.status(200).json(listar());
}

export function buscarFerramentaPorIndice(req, res) {
    const indice = Number(req.params.indice);

    if (isNaN(indice) || indice < 0 || !buscarPorIndice(indice)) {
        return res.status(404).json({
            mensagem: "Ferramenta não encontrada"
        });
    }

    return res.status(200).json(buscarPorIndice(indice));
}

export function atualizarFerramenta(req, res) {
    const indice = Number(req.params.indice);

    if (isNaN(indice) || indice < 0 || !buscarPorIndice(indice)) {
        return res.status(404).json({
            mensagem: "Ferramenta não encontrada"
        });
    }

    const ferramentaAtualizada = atualizar(indice, req.body);

    return res.status(200).json(ferramentaAtualizada);
}

export function deletarFerramenta(req, res) {
    const indice = Number(req.params.indice);

    if (isNaN(indice) || indice < 0 || !buscarPorIndice(indice)) {
        return res.status(404).json({
            mensagem: "Ferramenta não encontrada"
        });
    }

    deletar(indice);

    return res.status(204).end();
}