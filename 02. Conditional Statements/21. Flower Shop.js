function shop(input) {
    let magnolias = Number(input[0]);
    let hyacinths = Number(input[1]);
    let roses = Number(input[2]);
    let cacti = Number(input[3]);
    let presentPrice = Number(input[4]);

    let sum = magnolias * 3.25 + hyacinths * 4 + roses * 3.5 + cacti * 8;
    let taxes = 0.05 * sum;//2.2
    let sum2 = sum - taxes;
    if (sum2 < presentPrice) {
        let neededCash = presentPrice - sum2;
        console.log(`She will have to borrow ${Math.ceil(neededCash.toFixed(2))} leva.`)
    } else {
        let restCash = sum2 - presentPrice;
        console.log(`She is left with ${Math.floor(restCash.toFixed(2))} leva.`)
    }
}
shop(["15", "7", "5", "10", "100"])
