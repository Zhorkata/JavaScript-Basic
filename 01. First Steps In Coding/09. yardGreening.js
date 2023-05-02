function area(input) {
    let meters = Number(input[0]);
    let meter = 7.61;
    let discount = 0.18;
    console.log(`The final price is: ${(meters * meter - (meters * meter * discount))}` + " lv.");
    console.log(`The discount is: ${(meters * meter * discount)}` + " lv.");
}
area(["550"])