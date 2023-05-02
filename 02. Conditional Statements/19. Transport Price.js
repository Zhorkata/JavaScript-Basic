function transportPrice(input) {
    let kilometers = Number(input[0]);
    let partOfTheDay = input[1];

    let taxiPrice = 0.7;
    let busPrice = 0.09;//>=20km
    let trainPrice = 0.06;//>=100km
    let dayTaxiPrice = 0.79
    let nightTaxiPrice = 0.9

    if (partOfTheDay === "day") {
        if (kilometers < 20) {
            console.log((taxiPrice + kilometers * dayTaxiPrice).toFixed(2));
        } else if (kilometers < 100) {
            console.log((kilometers * busPrice).toFixed(2));
        } else if (100 <= kilometers) {
            console.log((kilometers * trainPrice).toFixed(2));
        }
    } else {
        if (kilometers < 20) {
            console.log((taxiPrice + kilometers * nightTaxiPrice).toFixed(2));
        } else if (kilometers < 100) {
            console.log((kilometers * busPrice).toFixed(2));
        } else if (100 <= kilometers) {
            console.log((kilometers * trainPrice).toFixed(2));
        }
    }
}
transportPrice(["180", "night"])