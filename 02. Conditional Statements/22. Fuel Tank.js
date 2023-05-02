function tank(input) {
    let fuel = input[0];
    let litres = Number(input[1]);

    if (fuel === "Diesel" || fuel === "Gasoline" || fuel === "Gas") {
        if (litres >= 25) {
            console.log(`You have enough ${fuel.toLowerCase()}.`);
        } else {
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
        }
    } else {
    console.log("Invalid fuel!");
}
}
tank(["Gas", "25"])