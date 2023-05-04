import validator from "./validator.js";

document
  .getElementById("botaoValidar")
  .addEventListener("click", validarCartao);

function validarCartao() {
  const inputNumeroCartao = document.getElementById("numero-cartao").value; //puxando o id do numero do cartão de credito 
  const numeroEscondido = validator.maskify(inputNumeroCartao); //puxando os maskify para o index.js 
  const validarNumeroCartao = validator.isValid(inputNumeroCartao); //puxando os isValid para o index.js 

  if (validarNumeroCartao === true) {
    return (document.getElementById("validoInvalido").innerText =
      "Sua compra com o cartão " + numeroEscondido + " foi Aprovada!!");
  } else {
    return (document.getElementById("validoInvalido").innerText =
      "Infelizmente, seu cartão " + numeroEscondido + " é inválido!");
  }
}

//iniciando campo obrigatorio do meu projeto

document.querySelector("#meu-Botao").addEventListener("click", function () {
  const campoObrigatorio1 = document.querySelector("#numero-cartao");
  const campoObrigatorio2 = document.querySelector("#validade-cartao");
  const campoObrigatorio3 = document.querySelector("#codigo-seguranca");
  const campoObrigatorio4 = document.querySelector("#nome");

  if (!/^\d{16}$/.test(campoObrigatorio1.value)) {
    document.getElementById("validoInvalido").innerText =
      "Preencha corretamente o número do seu cartão de crédito (16 dígitos, sem espaços).";
    return;
  }

  // esse primeiro if informa que no campo dos numeros do cartão, aceita somente 16 digitos numéricos. Qualquer outra informação
  // recebe a msg para preencher corretamente

  if (campoObrigatorio2.value.trim() === "") {
    document.getElementById("validoInvalido").innerText =
      "Por favor, preencha mês e ano de validade do seu cartão.";
    return;
  }
  if (campoObrigatorio3.value.trim() === "") {
    document.getElementById("validoInvalido").innerText =
      "Por favor, preencha o código de segurança que consta no verso do seu cartão com 3 digitos.";
    return;
  }

  if (campoObrigatorio4.value.trim() === "") {
    document.getElementById("validoInvalido").innerText =
      "Por favor, preencha o nome do titular do cartão.";
    return;
  }
  // os demais if verifica o valor do campo de entrada se está vazio ou não, após a remoção dos espacos em branco trim()
  // retorna se não foi preenchido com a msg innertext
});

// Colocando todas as letras maíusculas do campo nome
onkeyup = function myFunction() {
  const x = document.getElementById("nome");
  x.value = x.value.toUpperCase();
};

{
  console.log(validator);
}
