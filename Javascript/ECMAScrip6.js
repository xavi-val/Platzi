//Antes de ECMAS6
function newFunction(name, age, country) {
  var name = name || "default";
  var country = country || "default";
  var country = country || "default";
  console.log(name, age, country);
}

//Despues de ECMAS6
function newFunction2(name = "default", age = "default", country = "default") {
  console.log(name, age, country);
}

//Antes
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//Despues
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//---------clase 3

//Anterior
let lorem =
  "Qui consequatur.Commodi.Ipsum vel duis yet minima\n" +
  "otra frase epica que necesitamos.";

//Nueva
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`;

let person = {
  name: "oscar",
  age: 32,
  country: "MX",
};

//Antes
console.log(person.name, person.age);

//Despues
let { name, age } = person;
console.log(age);

//--Spread operator
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];
let education = ["David", ...team1, ...team2];
console.log(education);

//-------------Arrow functions

//Antes
let list0fNames = names.map(function (item) {
  console.log(item.name);
});

//Despues
let listOfNames2 = names.map((item) => console.log(item.name));

//Multiples parametros
const listOfNames3 = (name, age, country) => {};

//Un parametro
const listOfNames4 = (name) => {};

//----------Asíncrono Promesas

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hey!");
    } else {
      reject("Ups !!");
    }
  });
};

helloPromise()
  .then((Response) => console.log(Response))
  .catch((error) => console.log(error));

//-------Clase 5

//Funciones Generadoras

function* helloWorld(a) {
  if (true) {
    console.log(a);
    b= yield (a*2) ;
    console.log(b);
  }
//   if (true) {
//     console.log(a);
//     yield a + " World";
//     console.log(a);
//   }
}

const generatorHello = helloWorld(2);

console.log(generatorHello.next(3));
console.log(generatorHello.next(4));
console.log(generatorHello.next());

