function tom(input) {
    let restDays = Number(input[0]);

    let restMins = restDays * 127;//14351
    let totalDaysForPlay = 365 - restDays;//252
    let workMins = totalDaysForPlay * 63;//15876
    let realPlayTime = totalDaysForPlay * 63 + restDays * 127;//30227
    let playMins = 30000 - realPlayTime;//-227
    playMins = Math.abs(playMins);//227
    let hours = Math.floor(playMins / 60);//3
    let mins = playMins % 60;//47
    if (30000 > realPlayTime) {
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${mins} minutes less for play`)
    } else {

        console.log("Tom will run away");
        console.log(`${hours} hours and ${mins} minutes more for play`)
    }
}
tom(["113"])