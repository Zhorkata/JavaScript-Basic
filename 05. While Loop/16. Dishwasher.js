function dishwasher(input) {

    let index = 0;
    let command = input[index];//2
    index++;//1

    let totalPlates = 0;
    let totalPots = 0;

    let detergentInMl = command * 750;//750

    while (command !== 'End') {
        if (index >= input.length) {
            break;
        }
        let platesPots = Number(input[index]);//10 15 12 13 30
        //let restMl = detergentInMl;//1500
        let position = index
        if (position % 3 === 0) {

            detergentInMl -= platesPots * 15;//475 -100

            totalPots += platesPots;//10
        } else {
            detergentInMl -= platesPots * 5;//700 625 475 415 350
            totalPlates += platesPots;//25
        }

        command = input[index+1];
        index++;
    }
    if (detergentInMl >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${totalPlates} dishes and ${totalPots} pots were washed.`);
        console.log(`Leftover detergent ${detergentInMl} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(detergentInMl)} ml. more necessary!`);
    }
}
dishwasher([
    2,
    53,
    65,
    55,
    'End'
])