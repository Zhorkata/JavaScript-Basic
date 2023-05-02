function bikeRace(input) {
    let juniorsCount = Number(input[0]);
    let seniorsCount = Number(input[1]);
    let type = input[2];

    let fee = 0;

    if (type === 'trail') {
        fee = juniorsCount * 5.5 + seniorsCount * 7;
        fee *= 0.95;
        console.log(fee.toFixed(2));
    } else if (type === 'cross-country') {
        if ((juniorsCount + seniorsCount) >= 50) {
            fee = juniorsCount * 8 + seniorsCount * 9.5;
            fee *= 0.75;
            fee *= 0.95;
            console.log(fee.toFixed(2));
        } else {
            fee = juniorsCount * 8 + seniorsCount * 9.5;
            fee *= 0.95;
            console.log(fee.toFixed(2));
        }
    } else if (type === 'downhill') {
        fee = juniorsCount * 12.25 + seniorsCount * 13.75;
        fee *= 0.95;
        console.log(fee.toFixed(2));
    } else {
        fee = juniorsCount * 20 + seniorsCount * 21.5;
        fee *= 0.95;
        console.log(fee.toFixed(2));
    }
}
bikeRace(['3', '40', 'road'])