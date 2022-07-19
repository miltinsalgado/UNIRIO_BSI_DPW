window.addEventListener("load", function geraResposta3() {
    const numH2 = document.getElementsByTagName("h2").length;
    const numP = document.getElementsByTagName("p").length;
    const numPInfo = document.getElementsByClassName("info").length;
    const numPSI = document.getElementsByClassName("SI").length;

    var resposta1 = "Há " + numP + " parágrafo(s) e " + numH2 + " cabeçalho(s) H2 na página (não contando com os adicionados por JavaScript).";
    const paragrafoResposta1 = document.createElement("p");
    paragrafoResposta1.innerHTML = resposta1;
    document.body.appendChild(paragrafoResposta1);
})

window.addEventListener("load", function geraResposta2() {
    var resposta2 = "Há " + numPInfo + " parágrafo(s) da classe \"info\" e " + numPSI + " parágrafo(s) da classe \"SI\".";
    const paragrafoResposta2 = document.createElement("p");
    paragrafoResposta2.innerHTML = resposta2;
    document.body.appendChild(paragrafoResposta2);

    const segundoH2 = document.createElement("h2");
    const cabecalhos = document.getElementsByTagName("h2");
    segundoH2.innerHTML = cabecalhos[1].innerHTML;
    document.body.appendChild(segundoH2);
})

window.addEventListener("load", function geraResposta3() {
    const terceiroP = document.createElement("p");
    const paragrafos = document.getElementsByTagName("p");
    terceiroP.innerHTML = paragrafos[2].innerHTML;
    document.body.appendChild(terceiroP);
})

window.addEventListener("load", function mudaaCores() {
    document.getElementsByTagName("h2")[0].style.color = "red";
    document.getElementsByTagName("h2")[0].style.backgroundColor = "yellow";
})