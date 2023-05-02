function godzilaVsKong(input) {
    let movieBudget = Number(input[0]);
    let numberExtras = Number(input[1]);
    let outfitPrice = Number(input[2]);

    let decorPrice = movieBudget * 0.1;//2000
    let totalOutfitPrice = outfitPrice * numberExtras;//5994
    let discount = 0;

    if (numberExtras > 150) {
        discount = totalOutfitPrice * 0.1;
    }
    totalOutfitPrice = totalOutfitPrice - discount;
    let cashNeeded = decorPrice + totalOutfitPrice
    let cashLeft = cashNeeded - movieBudget

    if (cashNeeded > movieBudget) {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${Math.abs(cashLeft).toFixed(2)} leva more.`);
    } else if (cashNeeded <= movieBudget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${Math.abs(cashLeft).toFixed(2)} leva left.`);
    }
}
godzilaVsKong(["9587.88",
    "222",
    "55.68"])



