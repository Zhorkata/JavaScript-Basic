function harvest(input) {
    let area = Number(input[0]);
    let grapesPerMeter = Number(input[1]);
    let litresOfWine = Number(input[2]);
    let workersCount = Number(input[3]);

    let totalGrapes = area * grapesPerMeter;//1530
    let wine = 0.40 * totalGrapes / 2.5;//244.8
    if (wine >= litresOfWine) {
        let restLitres = wine - litresOfWine;//33
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(restLitres)} liters left -> ${Math.ceil(restLitres / workersCount)} liters per person.`);
    } else {
        let neededLitres = litresOfWine - wine;
        console.log(`It will be a tough winter! More ${Math.floor(neededLitres)} liters wine needed.`);

    }
}
harvest(["1020", "1.5", "425", "4"])