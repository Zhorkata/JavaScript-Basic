function depCal(input) {
    let depSum = Number(input[0]);
    let depPer = Number(input[1]);
    let annualIncrPer = Number(input[2]);
    let annualIncrDec = annualIncrPer / 100;
    let finalSum = depSum + depPer * ((depSum * annualIncrDec) / 12);
    console.log(finalSum);
}
depCal(["200 ", "3 ", "5.7 "])
