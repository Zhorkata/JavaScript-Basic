function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let place = '';
    let location = '';
    if (budget <= 1000) {
        place = 'Camp';
        if (season === 'Summer') {
            budget *= 0.65;
        } else {
            budget *= 0.45;
        }
    }else if (budget <= 3000){
        place = 'Hut';
        if (season === 'Summer') {
            budget *= 0.8;
        } else {
            budget *= 0.6;
        }
    }else {
        place = 'Hotel';
        budget *= 0.9
    }
if(season === 'Summer'){
    location = 'Alaska'
} else{
    location = 'Morocco'
}
console.log(`${location} - ${place} - ${budget.toFixed(2)}`);
}
vacation(['799.5', 'Winter'])