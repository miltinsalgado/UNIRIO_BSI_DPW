function deletaImagem (elementoSelecionado) {
    const ELEMENTO_PAI = document.getElementById("imagens");
    ELEMENTO_PAI.removeChild(elementoSelecionado);
}

function trocaCorParagrafos () {
    const TEXTO = document.getElementById("texto");
    const PARAGRAFOS = TEXTO.getElementsByTagName("p");

    for (let i = 0; i < PARAGRAFOS.length; i += 2)
        PARAGRAFOS[i].style.color = "blue";
}