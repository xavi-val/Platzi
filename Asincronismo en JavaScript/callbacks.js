// function printAddition(num1,num2,callback){
//     return callback(num1,num2)
// }

// function sumar(a,b){
//     return a+b;
// }

// function restar(a,b){
//     return a-b;
// }

// function dividir(a,b){
//     return a/b;
// }

// function multiplicar(a,b){
//     return a*b;
// }

// console.log(printAddition(5,5,sumar));
// console.log(printAddition(5,5,restar));
// console.log(printAddition(5,5,dividir));
// console.log(printAddition(5,5,multiplicar));

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API="https://rickandmortyapi.com/api/character/"


function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true );
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const error = new Error("Error" + url_api);
                return callback(error,null);
            }
        }
    }

    xhttp.send();
}

// ESTO ES UN CALLBACK HELL 

fetchData(API, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2){
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })

})
