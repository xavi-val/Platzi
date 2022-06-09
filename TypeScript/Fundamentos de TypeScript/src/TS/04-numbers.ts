(()=>{

    let productStock:number = 3;
    console.log("product", productStock);

    function algo(arr1:(number)[]){
        return arr1.map((item) =>{
            return item*2
        })
    }

    console.log(algo([1,2,3,4,5,6,7,8,9]))

})();