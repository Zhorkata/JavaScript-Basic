// •	IP – 499.99 лева.
// •	Normal – 249.99 лева

//      От 1 до 4 – 75% от бюджета.
// •	От 5 до 9 – 60% от бюджета.
// •	От 10 до 24 – 50% от бюджета.
// •	От 25 до 49 – 40% от бюджета.
// •	50 или повече – 25% от бюджета.

function ticket(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let peopleCount = Number(input[2]);

    let pricePerTicket = 0;
    if(peopleCount <= 4){
        budget *= 0.25;
    }else if(peopleCount <= 9){
        budget *= 0.4;
    }else if(peopleCount <= 24){
        budget *= 0.5;
    }else if(peopleCount <= 49){
        budget *= 0.6;
    }else{
        budget *= 0.75;//35k
    }
    switch(category){
        case 'VIP':
            pricePerTicket = 499.99;break;
        case 'Normal':
            pricePerTicket = 249.99;break;
    }
    if(budget >= peopleCount * pricePerTicket){
        let leftMoney = budget - peopleCount * pricePerTicket;
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);

    }else { // 22502
        let moneyNeeded = peopleCount * pricePerTicket - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);// 12498.00
    }
}
ticket(["50000",'Normal', '200'])
