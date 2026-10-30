const ferramentas = [];

export function cadastrar(ferramenta) {
    ferramentas.push(ferramenta);
    return ferramenta;
}

export function listar() {
    return ferramentas;
}

export function buscarPorIndice(indice) {
    return ferramentas[indice];
}

export function atualizar(indice, ferramenta) {
    if (ferramenta.codigo !== undefined) {
        ferramentas[indice].codigo = ferramenta.codigo;
    }

    if (ferramenta.descricao !== undefined) {
        ferramentas[indice].descricao = ferramenta.descricao;
    }

    if (ferramenta.estado !== undefined) {
        ferramentas[indice].estado = ferramenta.estado;
    }

    return ferramentas[indice];
}

export function deletar(indice) {
    ferramentas.splice(indice, 1);
}