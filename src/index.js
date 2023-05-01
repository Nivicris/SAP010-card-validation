import validator from "./validator.js";

document
  .getElementById("botaoValidar")
  .addEventListener("click", validarCartao);

function validarCartao() {
  const inputNumeroCartao = document.getElementById("numero-cartao").value;
  const numeroEscondido = validator.maskify(inputNumeroCartao);
  const validarNumeroCartao = validator.isValid(inputNumeroCartao);

  if (validarNumeroCartao === true) {
    return (document.getElementById("valido/invalido").innerText =
      "Sua compra com o cartão" + numeroEscondido + "foi Aprovada!!");
  } else {
    return (document.getElementById("valido/invalido").innerText =
      "Infelizmente, seu cartão" + numeroEscondido + "é inválido!");
  }
}

//iniciando campo obrigatorio do meu projeto

document
  .querySelector("#meu-Botao")
  .addEventListener("click", function () {
    const campoObrigatorio1 = document.querySelector("#numero-cartao");
    const campoObrigatorio2 = document.querySelector("#validade-cartao");
    const campoObrigatorio3 = document.querySelector("#codigo-seguranca");
    const campoObrigatorio4 = document.querySelector("#nome");

    if (!/^\d{16}$/.test(campoObrigatorio1.value)) {
      document.getElementById("valido/invalido").innerText =
        "Preencha corretamente o número do seu cartão de crédito (16 dígitos, sem espaços).";
      return;
    }
    if (campoObrigatorio1.value.length < 16) {
      document.getElementById("valido/invalido").innerText =
        "O campo deve conter os 16 números do seu cartão de crédito.";
      return;
    }
    if (campoObrigatorio2.value.trim() === "") {
      document.getElementById("valido/invalido").innerText =
        "Por favor, preencha mês e ano de validade do seu cartão";
      return;
    }
    if (campoObrigatorio3.value.trim() === "") {
      document.getElementById("valido/invalido").innerText =
        "Por favor, preencha o código de segurança que consta no verso do seu cartão com 3 digitos.";
      return;
    }

    if (campoObrigatorio4.value.trim() === "") {
      document.getElementById("valido/invalido").innerText =
        "Por favor, preencha o nome do titular do cartão.";
      return;
    }
  });

// Colocando todas as letras maíusculas do campo nome
onkeyup = function myFunction() {
  const x = document.getElementById("nome");
  x.value = x.value.toUpperCase();
};

{
  console.log(validator);
}
