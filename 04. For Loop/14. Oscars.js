function oscars(input) {
    let actor = input[0];
    let points = Number(input[1]);
    let judgeCount = Number(input[2]);

    let judge = '';
    let judgePoints = 0;

    for (let i = 3; i < input.length; i+=2) {
        judge = input[i].length;
        judgePoints = Number(input[i+1]);
            points += (judge * judgePoints) / 2;//690 953.25 1268.45...
            if(points >= 1250){
                console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
            return;
            }    
    }
    if(points < 1250) {
        let pointsNeeded = 1250.5 - points;
        console.log(`Sorry, ${actor} you need ${pointsNeeded.toFixed(1)} more!`);
    } 
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])

