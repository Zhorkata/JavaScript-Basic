function football(input) {
    let stadionCapacity = Number(input[0]);
    let fens = Number(input[1]);

    let sectorAfens = 0;//2
    let sectorBfens = 0;//3
    let sectorVfens = 0;//4
    let sectorGfens = 0;//1


    for (let sector = 2; sector < input.length; sector++) {
        let curSector = input[sector];

        if (curSector === 'A') {
            sectorAfens++;
        } else if (curSector === 'B') {
            sectorBfens++;
        } else if (curSector === 'V') {
            sectorVfens++;
        } else if (curSector === 'G') {
            sectorGfens++;
        }
    }
    let sectorAPercent = sectorAfens / fens * 100;
    let sectorBPercent = sectorBfens / fens * 100;
    let sectorVPercent = sectorVfens / fens * 100;
    let sectorGPercent = sectorGfens / fens * 100;

    let totalFensPercent = fens/stadionCapacity * 100;

    console.log(`${sectorAPercent.toFixed(2)}%`);
    console.log(`${sectorBPercent.toFixed(2)}%`);
    console.log(`${sectorVPercent.toFixed(2)}%`);
    console.log(`${sectorGPercent.toFixed(2)}%`);
    console.log(`${totalFensPercent.toFixed(2)}%`);
}
football
    ([
        76,
        10,
        'A',
        'V',
        'V',
        'V',
        'G',
        'B',
        'A',
        'V',
        'B',
        'B'
    ])