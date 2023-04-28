import validator from './validator.js';

const msgBotao = document.getElementById("botaoValidar").addEventListener("click", validarCartao);
//criei uma variável para vincular o button 

function validarCartao() {
    const inputNumeroCartao = document.getElementById("numero-cartao").value;
    console.log (inputNumeroCartao)
    const numeroEscondido = validator.maskify(inputNumeroCartao);
    const validarNumeroCartao = validator.isValid(inputNumeroCartao); 
    
    if (validarNumeroCartao === true) {
        return document.getElementById("valido/invalido").innerText= "Sua compra foi Aprovada!!";
    }
    else {
        return "Infelizmente, seu cartão" + numeroEscondido + "é inválido!"
    }
}



{
    console.log(validator);
}



