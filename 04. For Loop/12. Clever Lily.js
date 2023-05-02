function lily(input){
    let age = Number(input[0]);
    let laundryPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let moneyEarnedInEvenBirthay = 10;

    let totalMoney = 0;
    for(let i = 1; i <= age; i++){
        if(i % 2 === 0){
            totalMoney += moneyEarnedInEvenBirthay;
            totalMoney -= 1;
            moneyEarnedInEvenBirthay += 10;
        }else{
            totalMoney += pricePerToy;
        } 
    }
   if(totalMoney >= laundryPrice){
    let moneyLeft = totalMoney - laundryPrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
   }else{
    let moneyNeeded = laundryPrice - totalMoney;
    console.log(`No! ${moneyNeeded.toFixed(2)}`);
   }
}
lily(["21",
"1570.98",
"3"])
