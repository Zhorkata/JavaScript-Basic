function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let toysPrice = puzzleCount * 2.6 + dollsCount * 3 + bearsCount * 4.1 + minionsCount * 8.2 + trucksCount * 2
    let toysCount = puzzleCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if (toysCount >= 50) {
        toysPrice = 0.75 * toysPrice;
    }
    let cashEarn = toysPrice;
    cashEarn = 0.9 * cashEarn;
    if (cashEarn >= tripPrice) {
        let cashLeft = cashEarn - tripPrice;
        console.log(`Yes! ${cashLeft.toFixed(2)} lv left.`);
    } else {
        let cashNeeded = tripPrice - cashEarn;
        console.log(`Not enough money! ${cashNeeded.toFixed(2)} lv needed.`);
    }
}
toyShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])


