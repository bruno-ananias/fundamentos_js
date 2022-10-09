const usuario_logado = true;
const conta_paga = false;

//truthy ou falsy

/*
    0 => false
    1 => true

    null
    undefined

    == compara o valor
    === compara o valor e o tipo
*/

console.log(0 == false); //true
console.log("" == false); //true
console.log(1 == true); //true

let minha_var;
let var_null = null;

//Deve imprimir nada (undefined, tipo indefinido)
console.log(minha_var);
//DEve imprimir null, null é um tipo de dado
console.log(var_null);


let numero = 3;
let texto = "Alura";

console.log(typeof numero);
console.log(typeof texto);

console.log(typeof minha_var);
console.log(typeof var_null);
