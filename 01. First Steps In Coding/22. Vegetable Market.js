function vegetableMarket(input) {
    let vegetablePrice = Number(input[0]);
    let fruitPrice = Number(input[1]);
    let totalVegetableKg = Number(input[2]);
    let totalFruitKg = Number(input[3]);

    let totalVegPrice = vegetablePrice * totalVegetableKg;
    let totalFruitPrice = fruitPrice * totalFruitKg;
    let totalPrice = totalFruitPrice + totalVegPrice;
    let totalPriceInEuro = totalPrice / 1.94;
    console.log(totalPriceInEuro.toFixed(2));
}
vegetableMarket(["1.5", "2.5", "10", "10"])