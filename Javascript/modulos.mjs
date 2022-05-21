export class persona {
  constructor({ nombre, amigo, apellido, twitter = "No tiene", facebook }) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.amigo = amigo;
  }

  saludar() {
    console.log(`Hola ${this.amigo}`);
  }
}

let luis = new persona({ apellido: "Valdez", nombre: "Luis", amigo: "Fatima" });
luis.saludar();

console.log(Object.getOwnPropertyDescriptors(luis));

Object.defineProperty(luis, "altura", {
  value: "1.75",
  enumerable: true,
  writable: true,
  configurable: false,
});

if (luis instanceof persona) {
  console.log("Es una persona");
} else {
  console.log("Es de tipo " + typeof luis);
}

console.log(Object.entries(luis));
