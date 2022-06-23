window.onload = function gerarRespostas(){
    const num_h2 = document.getElementsByTagName("h2").length;
    const num_p = document.getElementsByTagName("p").length;
    const num_p_info = document.getElementsByClassName("info").length;
    const num_p_SI = document.getElementsByClassName("SI").length;
    
    var resposta_1 = "Há " + num_p + " parágrafo(s) e " + num_h2 + " cabeçalho(s) H2 na página (não contando com os adicionados por JavaScript).";
    const paragrafo_resposta_1 = document.createElement("p");
    paragrafo_resposta_1.innerHTML = resposta_1;
    document.body.appendChild(paragrafo_resposta_1);

    var resposta_2 = "Há " + num_p_info + " parágrafo(s) da classe \"info\" e " + num_p_SI + " parágrafo(s) da classe \"SI\".";
    const paragrafo_resposta_2 = document.createElement("p");
    paragrafo_resposta_2.innerHTML = resposta_2;
    document.body.appendChild(paragrafo_resposta_2);

    const segundo_h2 = document.createElement("h2");
    const cabecalhos = document.getElementsByTagName("h2");
    segundo_h2.innerHTML = cabecalhos[1].innerHTML;
    document.body.appendChild(segundo_h2);

    const terceiro_p = document.createElement("p");
    const paragrafos = document.getElementsByTagName("p");
    terceiro_p.innerHTML = paragrafos[2].innerHTML;
    document.body.appendChild(terceiro_p);
}
