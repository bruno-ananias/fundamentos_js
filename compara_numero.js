var lista = [10,1,5,9,12,15]

console.log(lista.sort())

function compara_numero(a,b){
    if(a == b){
        return 0
    }
    if(a < b){
        return -1;
    }
    if(a > b) {
        return 1;
    }
}

console.log(lista.sort(compara_numero))