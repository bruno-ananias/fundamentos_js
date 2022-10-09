//tipo de dados
//conversão implicita

const numero = 456;
const num_string = "456"

/*
    == compara somente o valor
    === compara valor e tipo
*/

//compara valor e tipo, deve ser false
console.log(numero === num_string)

//compara somente o valor, deve ser true
console.log(numero == num_string)

//Operador de soma com dois tipos de dados diferentes
console.log(numero + num_string) // Vai concatenar as variaveis e não somar os valores

//Conversão explicita
console.log(numero + Number(num_string)) 