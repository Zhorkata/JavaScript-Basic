function multiplyTable(input) {

    let number = Number(input[0]);

    let numAsString = String(number);// '324'

    for (let i = 0; i <= numAsString; i++) {
        let num1 = numAsString[i];//'3'
        i++;
        let num2 = numAsString[i];//'2'
        i++
        let num3 = numAsString[i];//'4'
        i++;

        for (let a = 1; a <= num3; a++) {
            for (let b = 1; b <= num2; b++) {
                for (let c = 1; c <= num1; c++) {
                    console.log((`${a} * ${b} * ${c} = ${a * b * c};`));
                }
            }
        }
    }

}
multiplyTable(["999"])