function game(input) {
    let moves = Number(input[0]);

    let result = 0;

    let counter = 0;
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    let counter5 = 0;
    for (let move = 1; move < input.length; move++) {
        let curMove = Number(input[move]);

        if (curMove < 10 && curMove >= 0) {
            result += 0.2 * curMove;
            counter++;
        } else if (curMove < 20 && curMove >= 10) {
            result += 0.3 * curMove;
            counter1++;
        } else if (curMove < 30 && curMove >= 20) {
            result += 0.4 * curMove;
            counter2++;
        } else if (curMove < 40 && curMove >= 30) {
            result += 50;
            counter3++;
        } else if (curMove < 51 && curMove >= 40) {
            result += 100;
            counter4++;
        } else {
            result /= 2;//50/25
            counter5++;
        }
    }
    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${(counter / moves * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(counter1 / moves * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(counter2 / moves * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(counter3 / moves * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(counter4 / moves * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(counter5 / moves * 100).toFixed(2)}%`);

}

game([10,
    43,
    57,
    -12,
    23,
    12,
    0,
    50,
    40,
    30,
    20
])