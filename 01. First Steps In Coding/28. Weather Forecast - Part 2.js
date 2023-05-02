function weatherForecast2(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let d = Number(input[3]);
    let e = Number(input[4]);
    // 26.00 - 35.00	Hot
    // 20.1 - 25.9	    Warm
    // 15.00 - 20.00	Mild
    // 12.00 - 14.9	    Cool
    // 5.00 - 11.9	    Cold
    if (a < 5 && a < 35) {
        console.log("unknown");
    } else if (5 <= a, a <= 11.9) {
        console.log("Cold");
    } else if (12 <= a, a <= 14.9) {
        console.log("Cool");
    } else if (15 <= a, a <= 20.00) {
        console.log("Mild");
    } else if (20.1 <= a, a <= 25.9) {
        console.log("Warm");
    } else if (26 <= a, a <= 35.00) {
        console.log("Hot");
    }

    if (b < 5 && b < 35) {
        console.log("unknown");
    } else if (5 <= b, b <= 11.9) {
        console.log("Cold");
    } else if (12 <= b, b <= 14.9) {
        console.log("Cool");
    } else if (15 <= b, b <= 20.00) {
        console.log("Mild");
    } else if (20.1 <= b, b <= 25.9) {
        console.log("Warm");
    } else if (26 <= b, b <= 35.00) {
        console.log("Hot");
    }

    if (c < 5 && c < 35) {
        console.log("unknown");
    } else if (5 <= c, c <= 11.9) {
        console.log("Cold");
    } else if (12 <= c, c <= 14.9) {
        console.log("Cool");
    } else if (15 <= c, c <= 20.00) {
        console.log("Mild");
    } else if (20.1 <= c, c <= 25.9) {
        console.log("Warm");
    } else if (26 <= c, c <= 35.00) {
        console.log("Hot");
    }

    if (d < 5 && d < 35) {
        console.log("unknown");
    } else if (5 <= d, d <= 11.9) {
        console.log("Cold");
    } else if (12 <= d, d <= 14.9) {
        console.log("Cool");
    } else if (15 <= d, d <= 20.00) {
        console.log("Mild");
    } else if (20.1 <= d, d <= 25.9) {
        console.log("Warm");
    } else if (26 <= d, d <= 35.00) {
        console.log("Hot");
    }

    if (e < 5 && e < 35) {
        console.log("unknown")
    }
    else if (5 <= e, e <= 11.9) {
        console.log("Cold");
    } else if (12 <= e, e <= 14.9) {
        console.log("Cool");
    } else if (15 <= e, e <= 20.00) {
        console.log("Mild");
    } else if (20.1 <= e, e <= 25.9) {
        console.log("Warm");
    } else if (26 <= e, e <= 35.00) {
        console.log("Hot");
    }
}
weatherForecast2(["16.5", "8", "22.4", "26", "0"])

