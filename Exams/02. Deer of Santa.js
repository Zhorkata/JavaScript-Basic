function xMas2(input) {
    let days = Number(input[0]);
    let foodInKg = Number(input[1]);
    let foodForFirstDeerInKg = Number(input[2]);
    let foodForSecondDeerInKg = Number(input[3]);
    let foodForThirdDeerInKg = Number(input[4]);

    let foodFirstDeer = days * foodForFirstDeerInKg;
    let foodSecondDeer = days * foodForSecondDeerInKg;
    let foodThirdDeer = days * foodForThirdDeerInKg;

    let totalFoodNeeded = foodFirstDeer + foodSecondDeer + foodThirdDeer;
    if (totalFoodNeeded < foodInKg) {
        console.log(`${Math.floor(foodInKg - totalFoodNeeded)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalFoodNeeded - foodInKg)} more kilos of food are needed.`);
    }
}
xMas2([
    2,
    10,
    1,
    1,
    2

])