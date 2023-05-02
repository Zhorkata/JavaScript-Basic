function shopping(input) {
    //if gpuCount > cpuCount = 0.15 discount from final price
    //1gpu - 250lv
    //1cpu = 0.35 * gpu price
    //1ram = 0.1 * gpu price
    let budget = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let gpuPrice = gpuCount * 250;//500
    let cpuPrice = 0.35 * gpuPrice * cpuCount;//175
    let ramPrice = 0.1 * gpuPrice * ramCount;//150
    let totalPrice = gpuPrice + cpuPrice + ramPrice;//825
    if (gpuCount > cpuCount) {
        totalPrice = 0.85 * totalPrice;//701.25
    }
    if (totalPrice <= budget) {
        let restCash = budget - totalPrice;
        console.log(`You have ${restCash.toFixed(2)} leva left!`);
    } else {
        let cashNeeded = totalPrice - budget;
        console.log(`Not enough money! You need ${cashNeeded.toFixed(2)} leva more!`);
    }
}
shopping(["920.45",
    "3",
    "1",
    "1"])


