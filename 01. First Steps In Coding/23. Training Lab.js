function trainingLab(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);
    //seatPlace (70x120cm)
    // ! workSpace (70x120cm) = table (70x40cm) + walkPlace(70x80cm)
    //corridorWidth (100cm)
    //door (160cm)
    //console(160x120cm)
    let corridorAndDoorPlace = 3;
    let workSpaceL = 120;
    let workSpaceW = 70;

    let hallWidth = h * 100; //890cm
    let cmForCorridor = 100;

    let restCmForDesks = hallWidth - cmForCorridor;//790
    let restCm = restCmForDesks % workSpaceW; //20
    let numberOfDesksInRow = (restCmForDesks - restCm) / workSpaceW;//11

    let hallLength = w * 100;//1500cm
    let restCm2 = hallLength % workSpaceL;//60
    let rows = (hallLength - restCm2) / workSpaceL;//12

    let numberOfSeats = numberOfDesksInRow * rows - corridorAndDoorPlace;
    console.log(numberOfSeats);
}
trainingLab(["8.4", "5.2"])

