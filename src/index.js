import validator from "./validator.js";

document
  .getElementById("botaoValidar")
  .addEventListener("click", validarCartao);

function validarCartao() {
  const inputNumeroCartao = document.getElementById("numero-cartao").value;
  console.log(inputNumeroCartao);
  const numeroEscondido = validator.maskify(inputNumeroCartao);
  const validarNumeroCartao = validator.isValid(inputNumeroCartao);

  if (validarNumeroCartao === true) {
    return (document.getElementById("valido/invalido").innerText =
      "Sua compra foi Aprovada!!");
  } else {
    return "Infelizmente, seu cartão" + numeroEscondido + "é inválido!";
  }
}

//iniciando campo obrigatorio do meu projeto

document
  .querySelector("#meu-Botao")
  .addEventListener("click", function (evento) {
    const campoObrigatorio1 = document.querySelector("#numero-cartao");
    const campoObrigatorio2 = document.querySelector("#validade-cartao");
    const campoObrigatorio3 = document.querySelector("#codigo-seguranca");
    const campoObrigatorio4 = document.querySelector("#nome");

    const numeroCartaoCompleto = campoObrigatorio1.value.replace(/\s/g, "");
    if (!numeroCartaoCompleto.match(/^\d{16}$/)) {
      alert(
        "Por favor, digite um número de cartão de crédito válido com 16 dígitos."
      );
      evento.preventDefault();
    }
    if (campoObrigatorio1.value.trim() === "") {
      document.getElementById("valido/invalido").innerText =
        "Para finalizar a compra, preencha os dados do seu cartão de crédito!";
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
{
  console.log(validator);
}
