function printAddition(num1,num2,callback){
    return callback(num1,num2)
}

function sumar(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

function dividir(a,b){
    return a/b;
}

function multiplicar(a,b){
    return a*b;
}

console.log(printAddition(5,5,sumar));
console.log(printAddition(5,5,restar));
console.log(printAddition(5,5,dividir));
console.log(printAddition(5,5,multiplicar));