const validator = {
 
maskify: function (numeroCartao) {
  const caracterExibidos = numeroCartao.slice(-4);
  const caracterMascarado = numeroCartao.slice (0, -4).replace(/./g, "*");
  const cartaoCreditoMascarado = caracterMascara + caracterExibidos;

return cartaoCreditoMascarado

};
// utilizei o slice para mostrar os 4 ultimos numeros do cartão a serem exibidos
// depois tmb utilizei o slice para extrair a parte da string a ser substituida por * (replace)
// concatenei dentro de uma contante o numero mascarado+exibido

isValid: function (numeroCartao)







};


export default validator;
