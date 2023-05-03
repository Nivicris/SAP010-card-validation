const validator = {

  maskify: function (numeroCartaoCredito) {
    const caracterExibidos = numeroCartaoCredito.slice(-4);
    const caracterMascarado = numeroCartaoCredito.slice(0, -4).replace(/./g, "#");
    const cartaoCreditoMascarado = caracterMascarado + caracterExibidos;

    console.log (cartaoCreditoMascarado, "cartao mascardo")
    return cartaoCreditoMascarado

    
  },


  // utilizei o slice para mostrar os 4 ultimos numeros do cartão a serem exibidos
  // depois tmb utilizei o slice para extrair a parte da string a ser substituida por * (replace)
  // concatenei dentro de uma contante o numero mascarado+exibido

  isValid: function (numeroCartaoCredito) {

    const cartaoCreditoArray = numeroCartaoCredito.split(" ");
    console.log(cartaoCreditoArray, "passando para array")
    
    const cartaoCreditoNum = cartaoCreditoArray[0].split("").map(Number).reverse();
    console.log (cartaoCreditoNum, "separando os elementos, passando para numeros e revertendo")
    
    for (let i = 0; i < cartaoCreditoNum.length; i++) {
      if (i % 2 === 1) {
        cartaoCreditoNum[i] *= 2;
      }
    }
    console.log (cartaoCreditoNum, "multiplica 2")
    

    const numerosMaiores = cartaoCreditoNum.filter(function (numero) {
      return numero >= 10;
    })
    console.log (numerosMaiores, "numeros maiores, separou")

    const numerosMaioresArray = numerosMaiores.flatMap(numero => numero.toString().split("")).map(Number);
    console.log (numerosMaioresArray, "separando os digitos")

    const numerosMenores = cartaoCreditoNum.filter(function (numero) {
      return numero < 10;
    })
    console.log (numerosMenores)

    const somaTotal = [...numerosMaioresArray, ...numerosMenores].reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    
    console.log (somaTotal)

    
    return somaTotal%10 === 0;
  }
}



export default validator;
