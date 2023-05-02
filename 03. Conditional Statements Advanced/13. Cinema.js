function cinema (input){
    let movieType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let sum = 0;
    let places = rows * columns;
    if(movieType === 'Premiere'){
        sum += places * 12;
    }else if(movieType === 'Normal') {
        sum += places * 7.5;
    } else {
        sum += places * 5;
    }
    console.log(`${sum.toFixed(2)} leva`);
}
cinema(["Discount",
"12",
"30"])

