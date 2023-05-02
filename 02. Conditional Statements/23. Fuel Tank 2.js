function reservoir(input) {
    let fuel = input[0];
    let litres = Number(input[1]);
    let card = input[2];

    let gasoline = 2.22;
    let diesel = 2.33;
    let gas = 0.93;

    if (card === "Yes") {
        let discountForGasoline = gasoline - 0.18;
        let discountForDiesel = diesel - 0.12;
        let discountForGas = gas - 0.08;
        if (litres >= 20 && litres <= 25) {
            if (fuel === "Gas") {
                console.log(((discountForGas * litres) - (discountForGas * litres) * 0.08).toFixed(2) + " lv.");
            } else if (fuel === "Gasoline") {
                console.log(((discountForGasoline * litres) - (discountForGasoline * litres) * 0.08).toFixed(2) + " lv.");
            } else {
                console.log(((discountForDiesel * litres) - (discountForDiesel * litres) * 0.08).toFixed(2) + " lv.");
            }
        } else if (litres > 25) {
            if (fuel === "Gas") {
                console.log(((discountForGas * litres) - (discountForGas * litres) * 0.1).toFixed(2) + " lv.");
            } else if (fuel === "Gasoline") {
                console.log(((discountForGasoline * litres) - (discountForGasoline * litres) * 0.1).toFixed(2) + " lv.");
            } else {
                console.log(((discountForDiesel * litres) - (discountForDiesel * litres) * 0.1).toFixed(2) + " lv.");
            }
        } else {
            if (fuel === "Gas") {
                console.log((litres * discountForGas).toFixed(2) + " lv.");
            } else if (fuel === "Gasoline") {
                console.log((litres * discountForGasoline).toFixed(2) + " lv.");
            } else {
                console.log((litres * discountForDiesel).toFixed(2) + " lv.");
            }
        }
    } else {
        if (litres >= 20 && litres <= 25) {
            if (fuel === "Gas") {
                console.log((gas * litres - gas * litres * 0.08).toFixed(2) + " lv.");
            } else if (fuel === "Gasoline") {
                console.log((gasoline * litres - gasoline * litres * 0.08).toFixed(2) + " lv.");
            } else {
                console.log((diesel * litres - diesel * litres * 0.08).toFixed(2) + " lv.");
            }
        } else if (litres > 25) {
            if (fuel === "Gas") {
                console.log(((gas * litres - gas * litres) * 0.1).toFixed(2) + " lv.");
            } else if (fuel === "Gasoline") {
                console.log((gasoline * litres - gasoline * litres * 0.1).toFixed(2) + " lv.");
            } else {
                console.log((diesel * litres - diesel * litres * 0.1).toFixed(2) + " lv.");
            }
        } else {
            if (fuel === "Gas") {
                console.log((litres * gas).toFixed(2) + " lv.");
            } else if (fuel === "Gasoline") {
                console.log((litres * gasoline).toFixed(2) + " lv.");
            } else {
                console.log((litres * diesel).toFixed(2) + " lv.");
            }
        }
    }
}
reservoir(["Diesel", "19", "No"])//19 *2.32 = 44.27