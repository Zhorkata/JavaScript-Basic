function journey(input){
    let budget = Number(input[0]);
    let season = input[1];

    
    let place = '';
    let location = '';
    if (budget <= 100) {
        switch (season) {
            case 'summer':
            budget *= 0.30;
            place = 'Camp';
            location = 'Bulgaria';
                break;
            case 'winter':
            budget *= 0.70;
            place = 'Hotel';
            location = 'Bulgaria';
                break;
        }
    } else if (budget <= 1000) {
        switch(season){
            case 'summer':
            budget *= 0.40;
            place = 'Camp';
            location = 'Balkans';
                break;
            case 'winter':
            budget *= 0.80;
            place = 'Hotel';
            location = 'Balkans';
                break;
        }
    } else {
        budget *= 0.9;
        place = 'Hotel';
        location = 'Europe';
    }
    console.log(`Somewhere in ${location}`);
    console.log(`${place} - ${budget.toFixed(2)}`);
}
journey(["500", "winter"])