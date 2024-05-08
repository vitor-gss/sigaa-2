class Disciplina {
    constructor(nome, sala) {
        this.nome = nome
        this.sala = sala
    }
}

class Disciplinas{
    constructor(){
        this.listaDeDisciplinas = []
    }

    adicionarDisciplina(nome, sala) {
        let disciplina = new Disciplina(nome, sala)
        this.listaDeDisciplinas.push(disciplina)
    }
}

let listaDisciplinas = new Disciplinas()

function adicionarNovaDisciplina(nome, sala) {
    listaDisciplinas.adicionarDisciplina(nome, sala)
}

adicionarNovaDisciplina('Biologia', 'Sala 2')
adicionarNovaDisciplina('Empreendedorismo', 'Sala 2')
adicionarNovaDisciplina('Filosofia', 'Sala 2')
adicionarNovaDisciplina('Física', 'Sala 2')
adicionarNovaDisciplina('Geografia', 'Sala 2')
adicionarNovaDisciplina('História', 'Sala 2')
adicionarNovaDisciplina('Infraestrutura e Serviço de Redes', 'Sala 2')
adicionarNovaDisciplina('Língua Espanhola', 'Sala 2')
adicionarNovaDisciplina('Língua Portuguesa', 'Sala 2')
adicionarNovaDisciplina('Matemática', 'Sala 2')
adicionarNovaDisciplina('Química', 'Sala 2')
adicionarNovaDisciplina('Programação Móvel', 'Sala 2')
adicionarNovaDisciplina('Programação Web', 'Sala 2')
adicionarNovaDisciplina('Sociologia', 'Sala 2')