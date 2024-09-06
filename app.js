    // Função para fazer o botão de pesquisa ficar funcional.
    function pesquisar(){
        let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você não buscou por nada.<p>"
        return 
    };

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    //para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    ${dado.titulo}
                </h2>
                <p class="descricao-meta">
                    ${dado.descricao}
                </p>
                <p>
                    <a href=${dado.link} target="_blank">
                    Mais informações
                    </a>
                </p>
            </div>
            `;
        }       
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }

    section.innerHTML = resultados
    }