window.addEventListener("load", function criaConteudoDia(){
    const data = new Date();
    var dia_semana = data.getDay();
    
    if (verificaDiaSemana(dia_semana) == "Domingo"){
        document.getElementById("imagem-dia").src = "images/foto_domingo.jpg";
        document.getElementById("paragrafo-dia").innerHTML = "Lazer é essencial.";
    }

    else{
        document.getElementById("imagem-dia").src = "images/foto_outros_dias.jpg";
        document.getElementById("paragrafo-dia").innerHTML = "Trabalho é dignidade.";
    }
})

function verificaDiaSemana(dia_semana){
    switch (dia_semana)
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
    const data_selecionada = new Date(document.getElementById("data").value);
    var dia_semana = data_selecionada.getDay();
    document.getElementById("dia-semana").innerHTML = verificaDiaSemana(dia_semana);
}

function calculaDiasFaltantes(){
    const data_atual = new Date();
    const data_final = new Date(data_atual.getFullYear(), 11, 31);
    var quantidade_milisegundos_data_final = data_final.getTime();
    var quantidade_milisegundos_data_atual = data_atual.getTime();
    var diferenca_milisegundos = quantidade_milisegundos_data_final - quantidade_milisegundos_data_atual;
    var quantidade_dias_faltantes = Math.ceil(diferenca_milisegundos / (1000 * 60 * 60 * 24));
    return quantidade_dias_faltantes;
}

window.addEventListener("load", function mostraDiasFaltantes(){
    var texto_dias_faltantes = "Faltam " + calculaDiasFaltantes() + " dia(s) para acabar o ano";
    this.document.getElementById("dias-faltantes").innerHTML = texto_dias_faltantes;
})