const notas =[];
/* Push adcionar um elemento ao final do array*/
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(3);
notas.push(6.5);

let mensagem = `Tamanho da Lista ${notas.length}, notas do aluno: ${notas}`

//Removendo o ultimo elemento da lista.
//Essa função não precisa parametro, pois ela vai remover o ultimo elemento do array de qualquer maneira.
notas.pop();

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
let mensagem_lista = `Notas do aluno: ${notas}, média do aluno: ${media}, situação: ${media > 7 ? "Aprovado":"Reprovado"}`;

console.log(mensagem_lista)


const arrayVazia = ["","",,];
console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)