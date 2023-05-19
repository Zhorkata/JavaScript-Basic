function number(input) {
    let num = Number(input[0]);

    if (num < 100) {
        console.log("Less than 100");//100, 99, 98...
    }
    else if (num >= 100, num <= 200) { //101,..., 199
        console.log("Between 100 and 200")
    } else {
        console.log("Greater than 200")
    }
}
number(["2323"])
