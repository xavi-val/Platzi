const moneyBox = (coins) => {
    var saveCoins = coins;
    const countCoins=(coins)=>{
        saveCoins+=coins;
        console.log(`Q${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox(5);


myMoneyBox(10); //salida Q10
myMoneyBox(10); //salida Q20
myMoneyBox(10); //salida Q30