function system(input) {
    let index = 0;
    let expectedAmount = input[index];
    index++;

    let cash = 0;
    let card = 0;
    let sellSum = expectedAmount;//500

    let allCash = 0;
    let allCard = 0;

    let cashCount = 0;
    let cardCount = 0;

    while (expectedAmount !== 'End') {

        cash = Number(input[index]);//86 98
        card = Number(input[index+1]);//150 227
        //141+573 = 714 totalMoney cash and card
        //141/2 = 70.5 average cash
        //573/2 = 286.5 average cash
        //if 714 >= 500 collected!!

        if (cash >= 100) {
            console.log(`Error in transaction!`);
        } else {
            console.log(`Product sold!`);
            allCash += cash;//
            cashCount++;//2
        }

        if (card <= 10) {
            console.log(`Error in transaction!`);
        } else {
            console.log(`Product sold!`);
            allCard += card;//573
            cardCount++;//2

        }

        expectedAmount = input[index];
        index += 2;

        if (index >= input.length - 1) {
            break;
        }
    }

    let totalMoney = allCard + allCash;//714
    if (totalMoney >= sellSum) {
        console.log(`Average CS: ${(allCash / cashCount).toFixed(2)} `);
        console.log(`Average CC: ${(allCard / cardCount).toFixed(2)} `);
    } else {
        console.log(`Failed to collect required money for charity.`);
    }
}
system([
    500,
120,
8,
63,
256,
78,
317

])