function trip(input) {
    // 	"room for one person" – 18.00 лв за нощувка
    // 	"apartment" – 25.00 лв за нощувка 
    // 	"president apartment" – 35.00 лв за нощувка
    let days = Number(input[0]);
    let type = input[1];
    let grade = input[2];

    let nights = days - 1;
    let price = 0;
    if (type === 'apartment') {
        if (grade === 'positive') {
            if (nights < 10) {
                price = (nights * 25) - (nights * 25 * 0.3);
                price += price * 0.25;
                console.log(price.toFixed(2));//ok
            } else if (nights >= 10 && nights <= 15) {
                price = (nights * 25) - (nights * 25 * 0.35);
                price += price * 0.25;
                console.log(price.toFixed(2));
            } else {
                price = (nights * 25) - (nights * 25 * 0.5);
                price += price * 0.25;
                console.log(price.toFixed(2));
            }
        } else {
            if (nights < 10) {
                price = (nights * 25) - (nights * 25 * 0.3);
                price -= price * 0.1;
                console.log(price.toFixed(2));
            } else if (nights >= 10 && nights <= 15) {
                price = (nights * 25) - (nights * 25 * 0.35);
                price -= price * 0.1;
                console.log(price.toFixed(2));
            } else {
                price = (nights * 25) - (nights * 25 * 0.5);
                price -= price * 0.1;
                console.log(price.toFixed(2));
            }
        }
    } else if (type === 'president apartment') {
        if (grade === 'positive') {
            if (nights < 10) {
                price = (nights * 35) - (nights * 35 * 0.1);
                price += price * 0.25;
                console.log(price.toFixed(2));
            } else if (nights >= 10 && nights <= 15) {
                price = (nights * 35) - (nights * 35 * 0.15);
                price += price * 0.25;
                console.log(price.toFixed(2));
            } else {
                price = (nights * 35) - (nights * 35 * 0.2);
                price += price * 0.25;
                console.log(price.toFixed(2));
            }
        } else {
            if (nights < 10) {
                price = (nights * 35) - (nights * 35 * 0.1);
                price -= price * 0.1;
                console.log(price.toFixed(2));
            } else if (nights >= 10 && nights <= 15) {
                price = (nights * 35) - (nights * 35 * 0.15);
                price -= price * 0.1;
                console.log(price.toFixed(2));
            } else {
                price = (nights * 35) - (nights * 35 * 0.2);//812
                price -= price * 0.1;//730.8
                console.log(price.toFixed(2));//ok
            }
        }
    } else if (type === 'room for one person'){
        if (grade === 'positive') {
            price = nights * 18;//198
            price += price * 0.25;//247.5
            console.log(price.toFixed(2));//ok
        } else {
            price = nights * 18;
            price -= price * 0.1;
            console.log(price.toFixed(2));
        }
    }
}
trip(["5",
    "apartment",
    "positive"])


