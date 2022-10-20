function apresentar(nome){
    return `Meu nome é: ${nome}`
}

//Normalmente arrow só tem uma linha de código, caso contrário a formatação muda
const apresenta_arrow = nome => `Meu Nome é arrow_${nome}`
const soma = (a,b)=>a+b;

const soma_num = (c,d)=>{
    if(c > 10 || d > 10){
        return "Somente números menor que 10";
    }else{
        return c + d;
    }
}
//HOISTING: arrow function se comporta como expressão;