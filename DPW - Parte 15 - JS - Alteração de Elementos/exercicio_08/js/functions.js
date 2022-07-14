window.addEventListener("load", function criaLinkDoDia(){
    const DATA = new Date();
    diaSemana = DATA.getDay();

    let link = {
        enderecoLink: "",
        conteudoLink: ""
    };

    const diasSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

    switch (diaSemana){
        case 0:
            link.conteudoLink = "Link de " + diasSemana[diaSemana];
            link.enderecoLink = "https://www.twitch.tv";
            break;
    
        case 1:
            link.conteudoLink = "Link de " + diasSemana[diaSemana];
            link.enderecoLink = "https://discord.com";
            break;

        case 2:
            link.conteudoLink = "Link de " + diasSemana[diaSemana];
            link.enderecoLink = "https://www.reddit.com";
            break;

        case 3:
            link.conteudoLink = "Link de " + diasSemana[diaSemana];
            link.enderecoLink = "https://www.youtube.com";
            break;

        case 4:
            link.conteudoLink = "Link de " + diasSemana[diaSemana];
            link.enderecoLink = "https://www.amazon.com.br";
            break;

        case 5:
            link.conteudoLink = "Link de " + diasSemana[diaSemana];
            link.enderecoLink = "https://www.booking.com";
            break;

        case 6:
            link.conteudoLink = "Link de " + diasSemana[diaSemana];
            link.enderecoLink = "https://best.aliexpress.com";
            break;
    }

    this.document.getElementById("link-do-dia").innerHTML = link.conteudoLink;
    this.document.getElementById("link-do-dia").href = link.enderecoLink;

})

function trocaPosicaoImagens(){
    let imagens = document.getElementsByClassName("imagem");
    let imagemTemp = {
        src: "",
        alt: "",
    };

    imagemTemp.src = imagens[0].src;
    imagemTemp.alt = imagens[0].alt;

    imagens[0].src = imagens[2].src;
    imagens[0].alt = imagens[2].alt;

    imagens[2].src = imagens[1].src;
    imagens[2].alt = imagens[1].alt;
    
    imagens[1].src = imagemTemp.src;
    imagens[1].alt = imagemTemp.alt;
}