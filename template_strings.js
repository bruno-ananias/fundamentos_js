const nome = "Bruno";
const idade = 2021-2000;
const naturalidade = "São Paulo."

//de um jeito normal
const apresentacao = "Meu nome é: " + nome + ", Tenho "+idade+ " anos e sou natural de: "+ naturalidade;

console.log(apresentacao)

//usando template-string
const apresentacao2 = `Meu nome é ${nome}, tenho ${idade} e sou natural de: ${naturalidade}`
console.log(apresentacao2)

const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: por favor, gostaria de pedir: ${idade >=18 ? bebidaMaior : bebidaMenor}`;
console.log(pedido)