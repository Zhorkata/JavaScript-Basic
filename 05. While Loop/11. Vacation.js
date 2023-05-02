function trip(input) {
    let tripMoneyNeeded = Number(input[0]);
    let moneyIhave = Number(input[1]);

    index = 2;
    let spendOrSave = input[index];//spend
    index++;
    let moneySpendOrSave = Number(input[index]);//10
    index++;

    let dayCounter = 0;
    let spendDays = 0;
    while (index <= input.length) {//4 6 8 10 
        if (spendOrSave !== 'save') {
            moneyIhave -= moneySpendOrSave;//100
            spendDays++;//1 2 
        }
        else {
            moneyIhave += moneySpendOrSave;//150
            
            spendDays = 0;
        }
        dayCounter++;//4
        spendOrSave = input[index];
        index++
        moneySpendOrSave = Number(input[index]);
        index++;
        if (moneyIhave <= 0) {
            moneyIhave = 0;
        }
        if(spendDays >= 5){
            break;
        }
    }
    if (moneyIhave >= tripMoneyNeeded) {
        console.log(`You saved the money for ${dayCounter} days.`);
    } else {
        console.log("You can't save the money.");  
        console.log(dayCounter);
    }
}
trip(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
