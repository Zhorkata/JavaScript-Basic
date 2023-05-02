function invalidNum(input) {
    let valid = Number(input[0]);
    let isValid = valid <= 200 && valid >= 100;
    if (!isValid && valid != 0) {
        console.log("invalid");
    }
}
invalidNum(["-1"])