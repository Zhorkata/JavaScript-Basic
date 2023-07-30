// !!!NOT FINISHED!!!

function equalPairs(input) {
    let doubleNums = Number(input[0]);

    let doubles1 = 0;
    let doubles2 = 0;
    let doubles3 = 0;
    let doubles4 = 0;


    for (let i = 1; i < input.length; i++) {

        let curNum = Number(input[i]);//
        i++;
        let curNum2 = Number(input[i]);//

        if (i === 2) {
            doubles1 = curNum + curNum2;//2
        }
        if (i === 4) {
            doubles2 = curNum + curNum2;//4
        }
        if (i === 6) {
            doubles3 = curNum + curNum2;//4
        }
        if (i === 8) {
            doubles4 = curNum + curNum2;//0
        }

        if (doubles1 === doubles2 || doubles2 === doubles3) {
            console.log(`Yes, value = ${doubles1}`);
        }
        // if(i % 2 === 0){
        //    // let firstDouble = doubles
        //     doubles = 0;
        // }
    }
    //console.log(`No, maxdiff=${Difference}`);
}
equalPairs([
    2,
    -1,
    0,
    0,
    -1

])
