function minNums(input){
    let index = 0;

    let command = input[index];
    index++;
    let myMinNum = Number.MAX_SAFE_INTEGER;
    while (command !== 'Stop') {
        let num = Number(command);
        if(myMinNum > num){
            myMinNum = num;
        }
        command = input[index];
        index++
    }
console.log(myMinNum);
}
minNums(["-1",
"-2",
"Stop"])
