function coins(input) {
    let change = Number(input[0]);
    let cents = Math.trunc(change * 100);
    let coinsCount = 0;
    while(cents > 0){
        if(cents >= 200){
            cents -= 200;
        }else if(cents >= 100){
            cents -= 100;
        }else if(cents >= 50){
            cents -= 50;
        }else if(cents >= 20){
            cents -= 20;
        }else if(cents >= 10){
            cents -= 10;
        }else if(cents >= 5){
            cents -= 5;
        }else if(cents >= 2){
            cents -= 2;
        }else if(cents >= 1){
            cents -= 1;
        }
        coinsCount++;
    }
    console.log(coinsCount);
}
coins(["2.73"])













// if (sum >= 2) {
//     sum %= 2;
//     coinsCount++;
// }
// if (sum >= 1) {
//     sum %= 1;//0
//     coinsCount++;
// }
// if (sum >= 0.5) {
//     sum %= 0.5;
//     coinsCount++;
// }
// if (sum >= 0.2) {
//     sum %= 0.2;//0.03
//     coinsCount++;
// }
// if (sum >= 0.1) {
//     sum %= 0.1;
//     coinsCount++;
// }
// if (sum >= 0.05) {
//     sum %= 0.05;
//     coinsCount++;
// }
// if (sum >= 0.02) {
//     sum %= 0.02;//0.009
//     coinsCount++;
// }
// if (sum >= 0.01) {
//     sum %= 0.01;
//     coinsCount++;
// }