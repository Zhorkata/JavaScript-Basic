function stavri(input) {
    let days = Number(input[0]);

    let liter = 0;
    let totalDegLiter1 = 0;

    for (let day = 1; day < input.length; day++) {
        let curAmount = Number(input[day]);//100 50 
        day++;
        liter += curAmount;//300
        let curDegrees = Number(input[day]);//45 55

        totalDegLiter1 += curAmount * curDegrees;//4500 7250
    }
    let avg = totalDegLiter1 / liter;
    console.log(`Liter: ${liter.toFixed(2)}`);
    console.log(`Degrees: ${avg.toFixed(2)}`);
    if (avg > 42) {
        console.log(`Dilution with distilled water!`);
    }else if (avg < 42 && avg > 38){
        console.log(`Super!`);
   }else{
    console.log(`Not good, you should baking!`);
   }
}
stavri([
    3,
    100,
    45,
    50,
    55,
    150,
    36
])