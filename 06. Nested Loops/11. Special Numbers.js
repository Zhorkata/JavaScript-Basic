function specialNums(input) {
    let num = Number(input[0]);
    let result = '';

    let itDivide = false;

    for (let i = 1111; i <= 9999; i++) {
        let numAsString = i.toString();// '1111'
        let dividers = 0;
        for (let index = 0; index < numAsString.length; index++) {

            let curDigit = Number(numAsString[index]);//1111, 1112
            let position = index + 1;//1..4
            if (num % curDigit === 0) {
                dividers++;
            }
            if (dividers === 4) {
                itDivide = true;//11/1
                let myNum = Number(numAsString);
                result += myNum + ' ';// must be 1111 1113...
            }
        }
    }
    console.log(result);
}
specialNums(["3"])