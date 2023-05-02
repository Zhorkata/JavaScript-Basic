function balls(input) {
    let index = 0;

    let ballsCount = Number(input[index]);
    index++;

    let redPoints = 5;
    let orangePoints = 10;
    let yellowPoints = 15;
    let whitePoints = 20;

    let points = 0;

    let redBallsCount = 0;
    let orangeBallsCount = 0;
    let yellowBallsCount = 0;
    let whiteBallsCount = 0;
    let blackBallsCount = 0;

    let anotherColorBallsCount = 0;

    while (index < input.length) {
        let color = input[index];
        index++;

        if (color === 'red') {
            points += redPoints;
            redBallsCount++;
        } else if (color === 'orange') {
            points += orangePoints;
            orangeBallsCount++;
        } else if (color === 'yellow') {
            points += yellowPoints;
            yellowBallsCount++;
        } else if (color === 'white') {
            points += whitePoints;
            whiteBallsCount++;
        } else if (color === 'black') {
            points = Math.floor(points / 2);
            blackBallsCount++;
        } else {
            points;
            anotherColorBallsCount++;
        }
    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redBallsCount}`);
    console.log(`Orange balls: ${orangeBallsCount}`);
    console.log(`Yellow balls: ${yellowBallsCount}`);
    console.log(`White balls: ${whiteBallsCount}`);
    console.log(`Other colors picked: ${anotherColorBallsCount}`);
    console.log(`Divides from black balls: ${blackBallsCount}`);
}
balls
    (["3",
        "white",
        "black",
        "pink"])
