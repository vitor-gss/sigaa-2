function criarCardDisciplina(card) {
    for (const disciplina of listaDisciplinas.listaDeDisciplinas) {
        card.innerHTML += `
        <div class="col-12">
            <div class='row'>
                <div class='col'>
                    <span class='title'>${disciplina.nome}</span>
                </div>
                <div class='col d-flex justify-content-end'>
                    <span>${disciplina.sala}</span>
                </div>
            </div>
        </div>
        `
    }
}

criarCardDisciplina(document.querySelector('#disciplinas'))

// -------------------------------------------------------------------------------------------------------------------

function ajustarTexto() {
    var width = window.innerWidth;
    var textoElement = document.querySelector('#sigaa');

    if (width <= 768) {
        textoElement.innerText = 'SIGAA'; // Altere para o texto desejado para telas menores
    } else {
        textoElement.innerText = 'SIGAA - Sistema Integrado de Gestão de Atividades Acadêmicas'; // Texto original para telas maiores
    }
}

window.addEventListener('resize', ajustarTexto);

// Chame a função uma vez para ajustar o texto quando a página carregar
ajustarTexto();
