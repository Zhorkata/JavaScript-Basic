function worldSwummingRecord(input) {
    let recordTime = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let swimmingTime = distance * timePerMeter;
    let delaysCount = Math.floor(distance / 15);
    let delayTime = delaysCount * 12.5;
    let totalTime = swimmingTime + delayTime;

    if (totalTime < recordTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let insufficientSec = totalTime - recordTime;
        console.log(`No, he failed! He was ${insufficientSec.toFixed(2)} seconds slower.`);
    }
}
worldSwummingRecord(["10464",
    "1500",
    "20"])
