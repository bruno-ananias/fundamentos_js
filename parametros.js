function soma(num_1, num_2){
    return num_1 + num_2;
}

function nome_idade(txt_1, txt_2){
    return `Nome: ${txt_1} \nSobrenome: ${txt_2}`
}


//Os parametros dessa funciton, estão recebendo um valor padrão, para nesse caso, a multiplicação não dar errado.
function multiplica(a = 1, b = 1){
    return a * b;
}


console.log(soma(50,50))
console.log(nome_idade("BRUNO","ANANIAS"))
console.log(multiplica(soma(2,3), soma(4,5)))

console.log(multiplica(soma(2,3)))

/*
    Diferença entre parametro e argumento

*/


function comParametro(param) {
    console.log(param)
}
comParametro()