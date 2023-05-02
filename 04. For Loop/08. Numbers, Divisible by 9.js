function numDivBy9(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let buff = '';
    let sum = 0;
    for (let i = startNum; i <= endNum; i++) {
        if (i % 9 == 0) { //divide by...
            sum += i;//add i to sum
            buff += i + '\n';//new line
        }
    }
    console.log('The sum: ' + sum);
    console.log(buff);
}
numDivBy9(["100", "200"])