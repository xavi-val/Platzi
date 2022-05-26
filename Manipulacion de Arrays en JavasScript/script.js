const letters = ["a", "b", "c", "d"];

let app = document.getElementById("mensaje");

letters.forEach((item) => (app.innerHTML += `<li> ${item} </li>`));

const numeros = [
  1, 3, 6, 8, 4, 6, 7, 9, 2, 6, 6, 7, 4, 1, 2, 3, 4, 6, 7, 8, 4, 1, 6, 6, 1, 0,
  2, 5, 4, 7, 9, 7, 4, 7, 8, 9, 4, 5, 6, 1, 2, 3, 5, 4, 6, 7,
];

let respuesta = numeros.reduce((obj,numero) =>{
    if(numero >=1 && numero<=5){
        obj["1-5"] += 1;
    }else if(numero >=6 && numero<=8){
        obj["6-8"] += 1;
    }
    else{
        obj["9-10"] += 1;
    }

    return obj
},{
    "1-5":0,
    "6-8":0,
    "9-10":0
});

console.log(respuesta);

let array = ['a', 'bb', 'ccc']; 
const array2 = ["d2","f2"];

const rta = array.map(item => item.length);
console.log(rta)

let nuevo = [...array,...array2]

nuevo[0]="luis"


console.log(array[0]);
console.log(nuevo[0]);

array3 = [
    {name:"Javier",price:1000,stock:5},
    {name:"luis",price:100,stock:5},
    {name:"pablo",price:10,stock:5}
]


function solution(array) {
	return array.map((item) => {                     
		return {
			...item,            
			taxes: item.price * 0.19,            
		}      
	})
}; 


function solution2(array){
    return array.map(item => ({
        ...item,
        taxes: Math.trunc(item.price * .19)
    }))
}; 

let res = solution(array3);
let res2 = solution2(array3);

console.log(`res1:`,res)
console.log(`res2:`,res2);
let prueba = {
    ...array3[0],
    saludo: array3[0].price * 2
};

console.log(array3);


function solution3(array){
    return array.filter(item => item.length >= 4);
}

let array4 =['amor', 'sol', 'piedra', 'día'];
console.log(solution3(array4));
