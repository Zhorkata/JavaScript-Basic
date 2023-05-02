function lunchBreak(input) {
    let movieName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = (1 / 8) * breakDuration;
    let restTime = (1 / 4) * breakDuration;

    let totalBusyTime = lunchTime + restTime;
    let movieTime = breakDuration - totalBusyTime;

    if (movieTime >= episodeDuration) {
        let timeLeft = Math.ceil(movieTime - episodeDuration);
        console.log(`You have enough time to watch ${movieName} and left with ${timeLeft} minutes free time.`);
    } else {
        let timeNeeded = Math.ceil(episodeDuration - movieTime);
        console.log(`You don't have enough time to watch ${movieName}, you need ${timeNeeded} more minutes.`);
    }
}
lunchBreak(["Game of Thrones",
    "60",
    "96"])

