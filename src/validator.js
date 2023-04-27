const validator = {

  maskify: function (numeroCartaoCredito) {
    const caracterExibidos = numeroCartaoCredito.slice(-4);
    const caracterMascarado = numeroCartaoCredito.slice(0, -4).replace(/./g, "*");
    const cartaoCreditoMascarado = caracterMascarado + caracterExibidos;

    return cartaoCreditoMascarado

  },
  // utilizei o slice para mostrar os 4 ultimos numeros do cartão a serem exibidos
  // depois tmb utilizei o slice para extrair a parte da string a ser substituida por * (replace)
  // concatenei dentro de uma contante o numero mascarado+exibido

  isValid: function (numeroCartaoCredito) {

      const cartaoDoClienteStr = [];
    //criei uma array que irá armazendar a string do cartão de credito do usuário
    
    const cartaoDoclienteNmb = parseInt(cartaoDoClienteStr);
    //mudei de string para números inteiros 

    const InvertidoArray = cartaoDoclienteNmb.reverse;
    // inverti a ordem do meu array

    for (let i = 0; i < InvertidoArray; i++) {
      if (i % 2 === 0) {
        InvertidoArray[i] *= 2;
      }
    }
    // Multipliquei por 2 os numeros nas casas pares

    for (let j = 0; j < InvertidoArray; j++) {
      if (j >= 10) {
        InvertidoArray[j].split(",")
      }
    }
    //os numeros >= 10 foram separados por ","

    function somaArray (){
    const soma = InvertidoArray.reduce(function (total, value) { return total + value });
    if (soma % 10 === 0){
      return true} else{
        return false 
      }
      }
    
    }
  }
























export default validator;
