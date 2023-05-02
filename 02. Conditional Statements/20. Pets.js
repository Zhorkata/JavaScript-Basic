function pets(input) {
    let days = Number(input[0]);
    let foodInKg = Number(input[1]);
    let dogFoodInKg = Number(input[2]);
    let catFoodInKg = Number(input[3]);
    let turtleFoodInG = Number(input[4]);

    let dogFood = days * dogFoodInKg;
    let catFood = days * catFoodInKg;
    let turtleFood = days * turtleFoodInG * 0.001;
    let totalFood = dogFood + catFood + turtleFood;

    if (totalFood < foodInKg) {
        let restFood = foodInKg - totalFood;
        console.log(`${Math.floor(restFood)} kilos of food left.`);
    } else {
        let neededFood = totalFood - foodInKg;
        console.log(`${Math.ceil(neededFood)} more kilos of food are needed.`);
    }
}
pets(["5", "10", "2.1", "0.8", "321"])