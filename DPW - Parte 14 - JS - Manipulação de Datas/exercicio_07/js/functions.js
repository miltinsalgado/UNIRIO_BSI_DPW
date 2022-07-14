window.addEventListener("load", function criaConteudoDia(){
    const data = new Date();
    var diaSemana = data.getDay();
    
    if (verificaDiaSemana(diaSemana) == "Domingo"){
        document.getElementById("imagem-dia").src = "images/foto_domingo.jpg";
        document.getElementById("paragrafo-dia").innerHTML = "Lazer é essencial.";
    }

    else{
        document.getElementById("imagem-dia").src = "images/foto_outros_dias.jpg";
        document.getElementById("paragrafo-dia").innerHTML = "Trabalho é dignidade.";
    }
})

function verificaDiaSemana(diaSemana){
    switch (diaSemana)
    {
        case 0:
            return "Domingo";

        case 1:
            return "Segunda-Feira";

        case 2:
            return "Terça-Feira";

        case 3:
            return "Quarta-Feira";

        case 4:
            return "Quinta-Feira";

        case 5:
            return "Sexta-Feira";

        case 6:
            return "Sábado";

        default:
            return "Data Inválida";
    }
}

function mostraDiaSemana(){
    const DATA_SELECIONADA = new Date(document.getElementById("data").value);
    var diaSemana = DATA_SELECIONADA.getDay();
    document.getElementById("dia-semana").innerHTML = verificaDiaSemana(diaSemana);
}

function calculaDiasFaltantes(){
    const DATA_ATUAL = new Date();
    const DATA_FINAL = new Date(DATA_ATUAL.getFullYear(), 11, 31);
    var quantidadeMilisegundosDataFinal = DATA_FINAL.getTime();
    var quantidadeMilisegundosDataAtual = DATA_ATUAL.getTime();
    var diferencaMilisegundos = quantidadeMilisegundosDataFinal - quantidadeMilisegundosDataAtual;
    var quantidadeDiasFaltantes = Math.ceil(diferencaMilisegundos / (1000 * 60 * 60 * 24));
    return quantidadeDiasFaltantes;
}

window.addEventListener("load", function mostraDiasFaltantes(){
    var textoDiasFaltantes = "Faltam " + calculaDiasFaltantes() + " dia(s) para acabar o ano";
    this.document.getElementById("dias-faltantes").innerHTML = textoDiasFaltantes;
})