function camp(input) {
    let season = input[0];
    let groupType = input[1];
    let studentCount = Number(input[2]);
    let nights = Number(input[3]);

    let sport = '';
    let pricePerNight = 0;
    if (season === 'Winter') {
        if (groupType === 'girls') {
            sport = 'Gymnastics';
            pricePerNight = 9.6;
        } else if (groupType === 'boys') {
            sport = 'Judo';
            pricePerNight = 9.6;
        }
        else {
            sport = 'Ski'
            pricePerNight = 10;
        }
    } else if (season === 'Spring') {
        if (groupType === 'girls') {
            sport = 'Athletics';
            pricePerNight = 7.2;
        } else if (groupType === 'boys') {
            sport = 'Tennis';
            pricePerNight = 7.2;
        } else {
            sport = 'Cycling'
            pricePerNight = 9.5;//
        }
    } else {
        if (groupType === 'girls') {
            sport = 'Volleyball';
            pricePerNight = 15;
        } else if (groupType === 'boys') {
            sport = 'Football';
            pricePerNight = 15;
        } else {
            sport = 'Swimming';
            pricePerNight = 20;
        }
    }
    if (studentCount >= 50) {
        pricePerNight *= studentCount * 0.5 * nights;
    } else if (studentCount >= 20) {
        pricePerNight *= studentCount * 0.85 * nights;
    } else if (studentCount >= 10) {
        pricePerNight *= studentCount * nights * 0.95;
    } else {
        pricePerNight *= nights * studentCount;
    }
    console.log(`${sport} ${pricePerNight.toFixed(2)} lv.`);
}
camp(['Spring', 'girls', '20', '7'])