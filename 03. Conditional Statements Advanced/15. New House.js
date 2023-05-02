function home(input){
    let flower = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;
    switch (flower) {
        case 'Roses':  
            sum = flowerCount * 5;
            if(flowerCount > 80){
                sum *= 0.9;
            }
        break;
        case 'Dahlias':
            sum = flowerCount * 3.8;
            if(flowerCount > 90){
                sum *= 0.85;
            }
        break;
        case 'Tulips':
            sum = flowerCount * 2.8;//246.39...
            if(flowerCount > 80){
                sum *= 0.85;
            }
        break;
        case 'Narcissus':
            sum = flowerCount * 3;
            if(flowerCount < 120){
                sum *= 1.15;
            }
        break;
        case 'Gladiolus':
            sum = flowerCount * 2.5;
            if(flowerCount < 80){
                sum *= 1.2;
            }
        break;
    }
    if(budget >= sum){ //sum expected 209.44 
        let cashLeft = budget - sum;
        console.log(`Hey, you have a great garden with ${flowerCount} ${flower} and ${cashLeft.toFixed(2)} leva left.`);
    } else {
        let cashNeeded = sum - budget;
        console.log(`Not enough money, you need ${cashNeeded.toFixed(2)} leva more.`);
    } 
}
home(["Roses",
"55",
"250"])
