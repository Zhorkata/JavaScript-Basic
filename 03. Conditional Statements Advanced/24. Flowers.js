function flower(input) {
    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let yesNo = input[4];

    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    let flowersPrice = 0;

    let flowerCount = chrysanthemums + roses + tulips;//14
    if (season === 'Spring') {
        chrysanthemumsPrice = 2 * chrysanthemums;//4
        rosesPrice = 4.1 * roses;//16.4
        tulipsPrice = 2.5 * tulips;//20
        flowersPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice;//40.4
        if (yesNo === 'Y') {
            flowersPrice += flowersPrice * 0.15;//46.46
        } if (tulips > 7) {
            flowersPrice *= 0.95;//44.137
        } if (flowerCount > 20) {
            flowersPrice *= 0.8;
        }
    }
    else if (season === 'Winter') {
        chrysanthemumsPrice = 3.75 * chrysanthemums;//11.25
        rosesPrice = 4.5 * roses;//45
        tulipsPrice = 4.15 * tulips;//37.35
        flowersPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice;//93.6
        if (yesNo === 'Y') {
            flowersPrice += flowersPrice * 0.15;
        } if (roses >= 10) {
            flowersPrice *= 0.9;
        } if (flowerCount > 20) {
            flowersPrice *= 0.8;
        }
    }

    else if (season === 'Summer') {
        chrysanthemumsPrice = 2 * chrysanthemums;//4
        rosesPrice = 4.1 * roses;//16.4
        tulipsPrice = 2.5 * tulips;//20
        flowersPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice;//40.4
        if (yesNo === 'Y') {
            flowersPrice += flowersPrice * 0.15;
        }if (flowerCount > 20) {
            flowersPrice *= 0.8;
        }
    }
    else if (season === 'Autumn') {
        chrysanthemumsPrice = 3.75 * chrysanthemums;//37.5
        rosesPrice = 4.5 * roses;//45
        tulipsPrice = 4.15 * tulips;//41.5
        flowersPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice;//124
        if (yesNo === 'Y') {
            flowersPrice += flowersPrice * 0.15;
        }if (flowerCount > 20) {
            flowersPrice *= 0.8;
        }
    }
    flowersPrice += 2;
    console.log(flowersPrice.toFixed(2))
}
flower(['10', '10', '10', 'Autumn', 'N'])