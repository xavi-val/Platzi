export class persona {
    constructor({nombre,amigo,apellido,twitter="No tiene",facebook }) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.amigo = amigo;
    }
  
    saludar() {
      console.log(`Hola ${this.amigo}`);
    }
  }
  
  let luis = new persona({ apellido: "Valdez", 
  nombre: "Luis", 
  amigo: "Fatima" });
  luis.saludar();