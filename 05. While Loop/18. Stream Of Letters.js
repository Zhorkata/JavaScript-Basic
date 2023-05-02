function stream(input) {
    let index = 0;
    let letter = input[index];
    index++;

    let cCount = 0;
    let oCount = 0;
    let nCount = 0;

    let mySentence = '';

    while (letter !== 'End') {
        if (letter === 'n') {
            nCount++;
            if(nCount === 1){
                continue;
            }else{
                letter = input[index];
                index++;
            }
        }
        if (letter === 'c') {
            cCount++;
            if(cCount === 1){
                continue;
            }else{
                letter = input[index];
                index++;
            }
        }
        if (letter === 'o') {
            oCount++;
            if (oCount === 1) {
                continue;
            } else {
                letter = input[index];
                index++;
            }


        }
        if (nCount >= 0 || oCount >= 0 || nCount >= 0) {
            mySentence += letter + '';

        }
        letter = input[index];
        index++;
       
    }
    console.log(mySentence);
}
stream([
    'H',
    'n',
    'e',
    'l',
    'l',
    'o',
    'o',
    'c',
    't',
    'c',
    'h',
    'o',
    'e',
    'r',
    'e',
    'n',
    'e',
    'End'
])