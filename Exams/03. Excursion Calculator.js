function tripCalc(input) {
    let peopleCount = Number(input[0]);
    let season = input[1];

    let sum = 0;

    if (peopleCount <= 5) {
        switch (season) {
            case 'spring':
                sum = 50;
                break;
            case 'summer':
                sum = 48.5;
                break;
            case 'autumn':
                sum = 60;
                break;
            case 'winter':
                sum = 86;
                break;
        }
    } else {
        switch (season) {
            case 'spring':
                sum = 48;
                break;
            case 'summer':
                sum = 45;
                break;
            case 'autumn':
                sum = 49.5;
                break;
            case 'winter':
                sum = 85;
                break;
        }
    }
    let price = peopleCount * sum;
    if (season === 'summer') {
        price -= price * 0.15;//11.25// 450 - (450 * 0.15)
    }
    if (season === 'winter') {
        price += price * 0.08;
    }
    console.log(`${price.toFixed(2)} leva.`);//1836.00 leva.

}
tripCalc(['20',
    'winter'
])