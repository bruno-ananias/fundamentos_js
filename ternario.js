const idade_minima = 18;
const idade_cliente = 19;

//if normal
if(idade_cliente >= idade_minima){
    console.log("Bebida Liberada!")
}else{
    console.log("Não liberar Bebidas.")
}

//Usando condicional ternario
//Usar para consdicionais pequenas. quando tiver mais de uma verificação a condição, usar o if normal


console.log(idade_cliente >= idade_minima ? "Liberar Bebidas":"Não liberar bebidas;")