function price(input) {
    let dogfood = Number(input[0]);
    let catfood = Number(input[1]);
    let dog = 2.50;
    let cat = 4;
    console.log(dogfood * dog + catfood * cat);
}
price(["13", "9"])