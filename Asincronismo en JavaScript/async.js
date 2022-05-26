const doSomethingAsync = () => {
    return new Promise((resolve,reject) =>{
        if(false){
            setTimeout(() => {
                resolve("Do something Async");
            }, 3000);
        }else{
            let err = new Error("Algo salio mal 1");
            reject(err);
        }        
    })
}




async function doSomething(){    
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.log(error);
    }    
}

console.log("Antes");
doSomething();
console.log("Después");
