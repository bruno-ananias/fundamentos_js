//Serve para atualizar uma lista.
const lista_chamada = ['João','Juliana','Ana','Caio','Lara','Marjorie','Leo']

console.log(lista_chamada);
/*
    Primeiro Parametro - Em qual indice vai ocorrer o corte.
    Segundo Parametro - Mais quantos elementos serão cortados
    Terceiro Parametro - Se quiser adcionar um novo elemento.
*/
lista_chamada.splice(1,2,'Rodrigo');
console.log(lista_chamada);

/*
    Podemos usar o splice, para adcionar um novo elemento na lista, na posição 
    que a gente precisar. Basta passar a posição que precisamos e 0 no segundo parametro
    para que ninguém seja removido. 
*/

lista_chamada.splice(5,0,'Bruno');
console.log(lista_chamada);