function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (fruit) {
            case "banana": sum = quantity * 2.5;
                console.log(sum.toFixed(2)); break;
            case "apple": sum = quantity * 1.2;
                console.log(sum.toFixed(2)); break;
            case "orange": sum = quantity * 0.85;
                console.log(sum.toFixed(2)); break;
            case "grapefruit": sum = quantity * 1.45;
                console.log(sum.toFixed(2)); break;
            case "kiwi": sum = quantity * 2.7;
                console.log(sum.toFixed(2)); break;
            case "pineapple": sum = quantity * 5.5;
                console.log(sum.toFixed(2)); break;
            case "grapes": sum = quantity * 3.85;
                console.log(sum.toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case "banana": sum = quantity * 2.7;
                console.log(sum.toFixed(2)); break;
            case "apple": sum = quantity * 1.25;
                console.log(sum.toFixed(2)); break;
            case "orange": sum = quantity * 0.9;
                console.log(sum.toFixed(2)); break;
            case "grapefruit": sum = quantity * 1.6;
                console.log(sum.toFixed(2)); break;
            case "kiwi": sum = quantity * 3;
                console.log(sum.toFixed(2)); break;
            case "pineapple": sum = quantity * 5.6;
                console.log(sum.toFixed(2)); break;
            case "grapes": sum = quantity * 4.2;
                console.log(sum.toFixed(2)); break;
            default: console.log("error");
        }
    } else {
        console.log("error");
    }
}
fruitShop(["grapes",
    "Tuesday",
    "1.200"])