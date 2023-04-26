import validator from './validator.js';

// function uppercase() {
//     let texto = document.getElementById("nome").value;
//     let textoMaiusculo = texto.toUpperCase();
//     alert(textoMaiusculo);
//   }

//const validarCartao = validator.maskify
// validator.isValid(creditCardNumber): creditCardNumber

// function meubotao(){
//     var cartao = document.getElementById("numero-cartao").value
//     console.log(cartao)
    
//  }
 



const inputNumeroCartao = document.getElementById ("numero-cartao")
//criei uma variável para armazenar o numero do cartão
const numeroEscondido = validator.maskify (inputNumeroCartao)
const validarNumeroCartao = validator.isValid (inputNumeroCartao)






{
console.log(validator);}



