function sumNumbers(input) {
    let sum = Number(input[0]);

    let index = 1;

    let nextNum = Number(input[index]);//10
    index++;

    let sumOfNums = 0;

    while (index <= input.length) {
        sumOfNums += nextNum;//60..

        nextNum = Number(input[index]);
        index++
    }
    console.log(sumOfNums);
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
