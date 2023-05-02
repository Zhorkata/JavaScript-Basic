function exercise(input) {
    let x1 = Number(input[0]);//2
    let y1 = Number(input[1]);//-3

    let x2 = Number(input[2]);//12
    let y2 = Number(input[3]);//3

    let x = Number(input[4]);//2
    let y = Number(input[5]);//4

    let condition1 = x1 < x2;
    let condition2 = y1 < y2;


    if (x === x1 || x === x2 && y >= y1 && y < y2) {
        console.log("Border");
    } else if (y === y1 || y === y2 && x > x1 && x < x2) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}
exercise([2,
    -3,
    12,
    3,
    2,
    4])
//inside/outside