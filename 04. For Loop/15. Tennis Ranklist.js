function ranklist(input) {
    let tournamentsCount = Number(input[0]);
    let beginPoints = Number(input[1]);

    let points = 0;
    let tournamentsWon = 0;
    for (let i = 2; i < input.length; i++) {
        let currentResult = input[i];

        switch (currentResult) {
            case 'W':
            points += 2000;
            tournamentsWon++;
                break;
            case 'F':
                points += 1200;
                break;
        case 'SF':
            points += 720;
        break;
        }
    }
    let totalPoints = beginPoints + points;
    console.log(`Final points: ${totalPoints}`);
    let avgPoints = Math.floor(points / tournamentsCount);
    console.log(`Average points: ${avgPoints}`);
    let wonPercent = (tournamentsWon / tournamentsCount) * 100;
    console.log(`${wonPercent.toFixed(2)}%`);
}
ranklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
