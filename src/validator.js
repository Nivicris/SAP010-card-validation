const validator = {

  maskify: function (numeroCartaoCredito) {
    const caracterExibidos = numeroCartaoCredito.slice(-4);
    const caracterMascarado = numeroCartaoCredito.slice(0, -4).replace(/./g, "#");
    const cartaoCreditoMascarado = caracterMascarado + caracterExibidos;
    console.log(cartaoCreditoMascarado, "cartaocreditomascarado")

    return cartaoCreditoMascarado


  },


  // utilizei o slice para mostrar os 4 ultimos numeros do cartão a serem exibidos
  // depois tmb utilizei o slice para extrair a parte da string a ser substituida por * (replace)
  // concatenei dentro de uma contante o numero mascarado+exibido

  isValid: function (numeroCartaoCredito) {

    const cartaoCreditoArray = numeroCartaoCredito.split(" ");
    console.log(cartaoCreditoArray, "string array")
    //mudei a string cartão para array 
    const cartaoCreditoNum = cartaoCreditoArray[0].split("").map(Number).reverse();
    console.log(cartaoCreditoNum, "array number")
    //dividi a string em elementos individuais, transformei em numeros e fiz o reverse

    for (let i = 0; i < cartaoCreditoNum.length; i++) {
      if (i % 2 === 0) {
        cartaoCreditoNum[i] *= 2;
      }
    }
    console.log(cartaoCreditoNum, "x2 pares")
    // Multipliquei por 2 os numeros nas casas pares

    const numerosMaiores = cartaoCreditoNum.filter(function (numero) {
      return numero >= 10;
    })
    const numerosMaioresArray = numerosMaiores.flatMap(numero => numero.toString().split("")).map(Number);

    console.log(numerosMaioresArray, "maior que 10")

    //  const soma1 = numerosMaioresArray.reduce((acumulador, numero) => acumulador + numero);
    //       console.log (soma1, "soma 1")

    const numerosMenores = cartaoCreditoNum.filter(function (numero) {
      return numero < 10;
    })
    console.log(numerosMenores, "menores 10")

    const somaTotal = [...numerosMaioresArray, ...numerosMenores].reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    console.log(somaTotal, "soma de todos os numeros")

    
    somaTotal%10 === 0
}
}




export default validator;
