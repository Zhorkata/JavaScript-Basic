function shop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let sum = 0;
    switch (city) {
        case "Sofia":
            switch (product) {
                case "coffee":
                    sum = quantity * 0.5;
                    console.log(sum); break;
                case "water":
                    sum = quantity * 0.8;
                    console.log(sum); break;
                case "beer":
                    sum = quantity * 1.2;
                    console.log(sum); break;
                case "sweets":
                    sum = quantity * 1.45;
                    console.log(sum); break;
                case "peanuts":
                    sum = quantity * 1.6;
                    console.log(sum); break;
            }break;
        case "Plovdiv":
            switch (product) {
                case "coffee":
                    sum = quantity * 0.4;
                    console.log(sum); break;
                case "water":
                    sum = quantity * 0.7;
                    console.log(sum); break;
                case "beer":
                    sum = quantity * 1.15;
                    console.log(sum); break;
                case "sweets":
                    sum = quantity * 1.3;
                    console.log(sum); break;
                case "peanuts":
                    sum = quantity * 1.5;
                    console.log(sum); break;
            }break;
        case "Varna":
            switch (product) {
                case "coffee":
                    sum = quantity * 0.45;
                    console.log(sum); break;
                case "water":
                    sum = quantity * 0.7;
                    console.log(sum); break;
                case "beer":
                    sum = quantity * 1.1;
                    console.log(sum); break;
                case "sweets":
                    sum = quantity * 1.35;
                    console.log(sum); break;
                case "peanuts":
                    sum = quantity * 1.55;
                    console.log(sum); break;
            }
    }
}
shop(["beer",
    "Varna",
    "24"])