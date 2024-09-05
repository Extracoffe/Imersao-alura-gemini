// Função para fazer o botão de pesquisa ficar funcional.
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
//console.log(section);

let resultados = ""

//para cada dado dentro da lista de dados
for (let dado of dados) {
    resultados += `
    <div class="item-resultado">
        <h2>${dado.titulo}</h2>
        <p class="descricao-meta">
            ${dado.descricao}
        </p>
        <p><a href=${dado.link} target="_blank">Mais informações</a></p>
    </div>
`
}

section.innerHTML = resultados
}


