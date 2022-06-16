function contar(n){
    for(let i =0; i < n ; i++){
        console.log(i)
    }    
}

let inicio = performance.now()
contar(5);
let final = performance.now()
console.log(`El algoritmo duro ${final-inicio} ms`)