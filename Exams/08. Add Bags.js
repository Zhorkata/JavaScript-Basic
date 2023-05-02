function luggage(input) {
    let above20KGPrice = Number(input[0]);
    let luggageKG = Number(input[1]);
    let daysToTravel = Number(input[2]);
    let luggageCount = Number(input[3]);

    if (luggageKG < 10) {
        above20KGPrice *= 0.2;
    } else if (luggageKG <= 20) {
        above20KGPrice *= 0.5;//15
    } else {
        above20KGPrice;
    }
    if (daysToTravel < 7) {
        above20KGPrice += above20KGPrice * 0.4;
    } else if (daysToTravel <= 30) {
        above20KGPrice += above20KGPrice * 0.15;//17.25
    } else {
        above20KGPrice += above20KGPrice * 0.1;
    }

    let luggagePrice = luggageCount * above20KGPrice;
    console.log(`The total price of bags is: ${luggagePrice.toFixed(2)} lv. `);
}
luggage(["63.80",
"23",
"3",
"1"])
