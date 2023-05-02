function bestPlayer(input){
    let goals = Number.MIN_VALUE;
    let bestPlayerName = '';
    let index = 0;
    let playerName = input[index];
    index++;
    let goalsScored = Number(input[index]);
    let command = input[index];
    let condition = true;
 
    while(command !== 'END'){
        if(goalsScored > goals){
            if(goalsScored >= 10){
                console.log(`${playerName} is the best player!`);
                console.log(`He has scored ${goalsScored} goals and made a hat-trick !!!`);
                condition = true;
                break;
            }else{
                condition = false;
                goals = goalsScored;
                bestPlayerName = playerName;
            }
        }
        index++;
 
        command = input[index];
        if(command === 'END'){
            break;
        }
        playerName = input[index];
        index++;
        goalsScored = Number(input[index]);
    }
 
     if(condition === false){
        if(goals >= 3){
            console.log(`${bestPlayerName} is the best player!`);
            console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
        }else{
            console.log(`${bestPlayerName} is the best player!`);
            console.log(`He has scored ${goals} goals.`);
        }
    }
}
bestPlayer(["Silva",
"5",
"Harry Kane",
"10"])
