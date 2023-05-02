function truckDriver(input) {
    let season = input[0];
    let kmPerMonth = Number(input[1]);
    
    let km = 0;
    if (season === 'Spring' || season === 'Autumn') {
        if(kmPerMonth <= 5000){
            km = 0.75;
        }else if(kmPerMonth <= 10000){
            km = 0.95;
        }
    } else if (season === 'Summer') {
        if(kmPerMonth <= 5000){
            km = 0.9;
        }else if(kmPerMonth <= 10000){
            km = 1.1;
        }
    } else {
        if(kmPerMonth <= 5000){
            km = 1.05;
        }else if(kmPerMonth <= 10000){
            km = 1.25;
        }
    }
    if(kmPerMonth > 10000 && kmPerMonth <= 20000){
        km = 1.45;
    }
let salary = kmPerMonth * km * 4 * 0.9
    console.log(salary.toFixed(2));
}
truckDriver(['Winter', '4350'])