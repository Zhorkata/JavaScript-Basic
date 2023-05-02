function logistics(input){
    let tovarCount = Number(input[0]);

    let tonePrice = 0;
    let totalTones = 0;
    
    let microbusTones = 0;
    let truckTones = 0;
    let trainTones = 0;
    for(let i = 1;i < input.length;i++){
        let tone = Number(input[i]);


        totalTones += tone;//25
        if(tone <= 3){
            tonePrice = 200;//microbus
            microbusTones += tone;//4
        }else if(tone >= 4 && tone <= 11){
            tonePrice = 175;//truck
            truckTones += tone;//5
        }else if(tone >= 12){
            tonePrice = 120;//train
            trainTones += tone;//16
        } 
    }
let avgTones = (microbusTones * 200 + truckTones * 175 + trainTones * 120)/totalTones;
let microbusPercent = microbusTones/totalTones * 100;
let truckPercent = truckTones/totalTones * 100;
let trainPercent = trainTones/totalTones * 100;
console.log(avgTones.toFixed(2));
console.log(`${microbusPercent.toFixed(2)}%`);
console.log(`${truckPercent.toFixed(2)}%`);
console.log(`${trainPercent.toFixed(2)}%`);

}
logistics([4,
    1,
    5,
    16,
    3
    ])