(()=>{

    type NuevoTipo = string | number | boolean
    let algo:NuevoTipo;

    const algoFuncion = ():void =>{
        
    }

    console.log(algoFuncion())

    type nuevo = {
        nombre:string,
        apellido?:string
    }
    
    let nuevaVar:(string | null) = null;

    let producto = 100;
    let myVar: number | string;
    myVar = "10s";
    myVar = 10;

    const rta = 1 + '1';

    const obj = (data:nuevo) => {
        console.log(data.nombre)
        console.log(data.apellido)
    }    

})();