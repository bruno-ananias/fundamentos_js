let x = "";
x = "oi";

/*
    funções são trecho de código, que separamos em declaração e excecução.

*/
//declaração da função
function imprime_texto(texto){
    console.log(texto)
}

//execução da função
imprime_texto(x)
imprime_texto("Bruno")

// Três tipos diferentes de escritas de funções.
function soma(){
    //return faz com que o que aconteça dentro da função, seja exposto para fora do bloco.
    return 2 + 2;
}

console.log(soma());
imprime_texto("Resultado: "+soma())