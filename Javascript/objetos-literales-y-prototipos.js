//Los objetos literales no tienen constructor creado por el programador 

let javier = {
    nombre:"Javier",
    numero:"4012",
    ropa:"amarillo",
    hablar(){
        console.log("Buenas");
    }
}

//Los objetos 

function persona(nombre,apellido,altura){
    this.nombre=nombre;
    this.apellido=apellido;
    this.altura=altura;

    this.hablar = (nombre_saludo) => {
        console.log(`Hola mundo soy ${nombre_saludo}`);
    };

}

let luis = new persona("Luis", "Valdez", "180");
