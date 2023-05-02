function numberSum(input) {
    let numAsText = input[0];
    let sum = 0;
    for (let i = 0; i < numAsText.length; i++) {
        let currentNum = Number(numAsText[i]);
        sum += currentNum;//1+2+3+4+5
    }
    console.log(`The sum of the digits is:${sum}`);
}
numberSum(["12345"])