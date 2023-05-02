function avg(input) {
    let index = 0;
    let sum = Number(input[index]);//4
    index++;
    let sumOfNums = 0;

    while (index <= sum) {
        let nextNum = Number(input[index]);//3 + 2 + 4 + 2
        sumOfNums += nextNum;

        nextNum = Number(input[index]);
        index++
    }
    console.log((sumOfNums/sum).toFixed(2));
}
avg([
    4,
    95,
    23,
    76,
    23

])