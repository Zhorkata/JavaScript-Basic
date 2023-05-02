function walking(input) {
    let index = 0;
    let command = input[index];
    index++;
    let totalSteps = 0;
    while (index <= input.length) {
        if(command !== 'Going home'){
        steps = Number(command);//1500 
        
        totalSteps += steps;//7300
        command = input[index];
        index++;
        
        }
        else{
        command = input[index];
        index++;
        }
        
    }
    if(totalSteps >= 10000){
        let moreSteps = totalSteps - 10000;
        console.log("Goal reached! Good job!");
        console.log(`${moreSteps} steps over the goal!`);
    } else{
        let stepsNeeded = 10000 - totalSteps;
        console.log(`${stepsNeeded} more steps to reach goal.`);
    }
}
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])
