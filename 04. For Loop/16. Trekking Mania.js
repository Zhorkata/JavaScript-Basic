function trekkingMania(input) {
    let groupsCount = Number(input[0]);

    let peopleInEachGroup = 0;

    let musala = 0;
    let monblan = 0;
    let kilimandzharo = 0;
    let k1 = 0;
    let everest = 0;

    for (let i = 1; i < input.length; i++) {
        peopleInEachGroup = Number(input[i]);
        if (peopleInEachGroup <= 5) {
            musala += peopleInEachGroup;//6
        } else if (peopleInEachGroup <= 12) {
            monblan += peopleInEachGroup;//22
        } else if (peopleInEachGroup <= 25) {
            kilimandzharo += peopleInEachGroup;//17
        } else if (peopleInEachGroup <= 40) {
            k1 += peopleInEachGroup;//103
        } else {
            everest += peopleInEachGroup;//178
        }
    }
    let totalPeople = musala + monblan + kilimandzharo + k1 + everest;//326
    let musalaPercent = musala / totalPeople * 100;
    let monblanPercent = monblan / totalPeople * 100;
    let kilimandzharoPercent = kilimandzharo / totalPeople * 100;
    let k1Percent = k1 / totalPeople * 100;
    let everestPercent = everest / totalPeople * 100;
    console.log(musalaPercent.toFixed(2) +'%');
    console.log(monblanPercent.toFixed(2) +'%');
    console.log(kilimandzharoPercent.toFixed(2) +'%');
    console.log(k1Percent.toFixed(2) +'%');
    console.log(everestPercent.toFixed(2) +'%');
}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
