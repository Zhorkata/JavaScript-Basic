function work(input) {
    let architectName = input[0];
    let projectnum = Number(input[1]);
    let hours = Number(input[1]) * 3;
    console.log(`The architect ${architectName} will need ${hours} hours to complete ${projectnum} project/s.`);
}
work(["George", "4"])