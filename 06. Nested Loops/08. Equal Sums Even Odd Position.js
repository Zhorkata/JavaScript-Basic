function equalSums(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = '';

    for (let curNum = startNum; curNum <= endNum; curNum++) {
        let oddSum = 0;
        let evenSum = 0;

        let curNumAsString = curNum.toString();

        for (let index = 0; index < curNumAsString.length; index++) {
            let curDigit = Number(curNumAsString[index]);
            let position = index + 1;
            
            if (index % 2 === 0) {
                evenSum += curDigit;
            } else {
                oddSum += curDigit;
            }
        }
    if(oddSum === evenSum){
        result += curNumAsString + ' ';
    }
}
console.log(result);
}
equalSums(["100000", "100050"])
