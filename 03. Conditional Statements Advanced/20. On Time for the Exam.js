function exam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMinute = Number(input[3]);

    let difference = 0;
    let delayTime = 0;
    let hours = 0;
    let mins = 0;
    if (examHour === 24) {
        examHour = 0;
    }
    let totalExamMins = examHour * 60 + examMinute;//
    let totalArriveMins = arriveHour * 60 + arriveMinute;//
    if (totalExamMins < totalArriveMins) {
        difference = totalArriveMins - totalExamMins;//660
        hours = Math.floor(difference / 60);//11
        mins = difference % 60;//20
        if (difference !== 0) {
            if (difference > 0) {
                if (hours < 1) {
                    console.log(`Late`);
                    console.log(`${mins} minutes after the start`);//ok
                }
                else {
                    if (mins < 10) {
                        console.log(`Late`);
                        console.log(`${hours} : 0${mins} hours after the start`);
                    } else {
                        console.log('Late');
                        console.log(`${hours} : ${mins} hours after the start`);
                    }
                }
            }
        }
    } else {
        delayTime = totalExamMins - totalArriveMins;//30
        hours = Math.floor(delayTime / 60);//0
        mins = delayTime % 60;//30
        if (delayTime <= 30 && delayTime !== 0) {
            if (mins < 10) {
                console.log(`On time`);
                console.log(`${mins} minutes before the start`);
            } else {
                console.log(`On time`);
                console.log(`${mins} minutes before the start`);
            }
        } else if (hours === 0 && mins === 0) {
            console.log(`On time`);
        }
        if (delayTime > 30) {
            if (hours < 1) {
                console.log(`Early`);
                console.log(`${mins} minutes before the start`);
            } else {
                if (mins < 10) {
                    console.log(`Early`);
                    console.log(`${hours} : 0${mins} hours before the start`);
                } else {
                    console.log(`Early`);
                    console.log(`${hours} : ${mins} hours before the start`)
                }
            }
        }
    }
}
exam(["10",
    "00",
    "10",
    "00"])

