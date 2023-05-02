function bills(input) {
    let monthCount = Number(input[0]);

    let electricityPrice = 0;
    let sum = 0;
    for (let month = 1; month < input.length; month++) {

        let electricity = Number(input[month]);
        electricityPrice += electricity;//447.15...

        sum += (electricity + 20 + 15) + 0.20 * (electricity + 20 + 15);//746.59 //2004.516
    }
    let waterPrice = monthCount * 20;//100
    let internetPrice = monthCount * 15;//75

    let avgPricePerMonth = (waterPrice + internetPrice + electricityPrice + sum)/monthCount

    console.log(`Electricity: ${electricityPrice.toFixed(2)} lv`);
    console.log(`Water: ${waterPrice.toFixed(2)} lv`);
    console.log(`Internet: ${internetPrice.toFixed(2)} lv`);
    console.log(`Other: ${sum.toFixed(2)} lv`);
    console.log(`Average: ${avgPricePerMonth.toFixed(2)} lv`);

}
bills([
    8,
123.54,
231.54,
140.23,
100,
122.4,
430,
178.52,
64.2
])