function xMas(input) {
    let paperRolls = Number(input[0]);
    let clothRolls = Number(input[1]);
    let litresOfGlue = Number(input[2]);
    let discountPercent = Number(input[3]);

    let paperRollsPrice = paperRolls * 5.80;
    let clothRollsPrice = clothRolls * 7.20;
    let gluePrice = litresOfGlue * 1.20;
    let totalPrice = paperRollsPrice + clothRollsPrice + gluePrice;
    totalPrice -= totalPrice * (discountPercent / 100);

    console.log(totalPrice.toFixed(3));
}
xMas([4,
    2,
    5,
    13
])