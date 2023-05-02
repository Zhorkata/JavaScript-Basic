function pool(input) {
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let pipe1 = h * p1;//250
    let pipe2 = h * p2;//250
    let totalLiters = pipe1 + pipe2;//500
    let totalPercent = totalLiters / v * 100;//66.00 
    let firstPipe = pipe1 / totalLiters * 100;//45.45
    let secondPipe = pipe2 / totalLiters * 100;//54.55

    if (totalLiters > v) {
        let waterOverFlow = totalLiters - v;
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${waterOverFlow.toFixed(2)} liters.`);
    } else {
        console.log(`The pool is ${totalPercent.toFixed(2)}% full. Pipe 1: ${firstPipe.toFixed(2)}%. Pipe 2: ${secondPipe.toFixed(2)}%.`);
    }
}
//pool(["100", "100", "100", "2.5"])

pool(["1000", "100", "120", "3"])