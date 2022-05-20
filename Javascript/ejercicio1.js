// var sumar = function(a,b){
//     return a+b;
// }

// function restar(a,b){
//     return a-b;
// }

// let multiplicar = (a,b) => a*b;

// console.log(sumar(5,8));

// console.log(restar(5,8));

// console.log(multiplicar(5,5))

function calcular() {
  let text_a = document.getElementById("numero_a");
  let text_b = document.getElementById("numero_b");

  let a = parseInt(text_a.value);
  let b = parseInt(text_b.value);

  let resp = document.getElementById("respuesta");
  // resp.innerText = "Respuesta: " + (a+b);
  resp.innerHTML = "<h1>Buenas 😎 </h1>";
}

function media(matriz) {
  let suma = 0;

  for (let dato of matriz) {
    suma += dato;
  }

  return suma / matriz.length;
}

function mediana(matriz) {
  matriz.sort((a, b) => {
    if (a == b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
    return 1;
  });

  let indice_medio = Math.round(matriz.length / 2);

  return (matriz[indice_medio - 1] + matriz[indice_medio]) / 2;
}

function moda(matriz) {
  let auxiliar = [];
  let respuesta;

  for (let dato of matriz) {
    
    let filtro = matriz.filter((numeros) => numeros === dato);    

    if (auxiliar.length < filtro.length) {
      auxiliar = filtro;
      respuesta = auxiliar[0];
    }
        

  }

  return respuesta;
}

let variable = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
console.log("Media: " + media(variable));
console.log("Mediana: " + mediana(variable));
console.log("Moda: " + moda(variable));
