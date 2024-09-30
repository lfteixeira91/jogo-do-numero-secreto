let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag,texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    //falar o texto
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});

}

function exibirMensagemInicial(){

    exibirTexto('h1','Jogo do número secreto');
    exibirTexto('p','Escolha um número entre 1 e 10');

}

exibirMensagemInicial();

function verificarChute(){

    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){

        exibirTexto('h1','Acertou !!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa} !`;
        exibirTexto('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {

        if(chute > numeroSecreto){
            exibirTexto('p','O número secreto é menor que o chute.');
        } else {
            exibirTexto('p','O número secreto é maior que o chute.');
        }

    }

    tentativas++;
    limparCampo();

}

function gerarNumeroAleatorio(){

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdeElementosNaLista = listaNumerosSorteados.length;

    if(qtdeElementosNaLista == numeroLimite){
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)){

        return gerarNumeroAleatorio();

    } else {

        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;

    }

}

function limparCampo(){

    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo(){

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}

