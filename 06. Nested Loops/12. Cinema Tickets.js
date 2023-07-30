// !!!!!!!NOT FINISH!!!!!

function tickets(input) {
    let index = 0;

    let command = input[index];//taxi[0]
    index++;//1

    let totalTickets = 0;

    //let totalStudentTickets = 0;

    let studentTickets = 0;

    while (command !== 'Finish') {
        let movieTitle = command;//taxi / scaryMovie

        let freeSpaces = Number(input[index]);//10 / 6
        index++;

        let command1 = input[index];//standart / student
        index++;

        let spacesTaken = 0;
        let standardTickets = 0;
        let kidsTickets = 0;

        while (command1 !== 'End') {
            let ticketType = command1;//student student student student student student

            if (ticketType === 'student') {
                studentTickets++;//8
            } else if (ticketType === 'standard') {
                standardTickets++;//3+
            } else {
                kidsTickets++;//1+
            }

            spacesTaken++;// 6 + 6
           // totalStudentTickets = studentTickets;//8

            if (spacesTaken === freeSpaces) {
                break;
            }

            command1 = input[index];
            index++;
        
        }
        let percentFull = (spacesTaken / freeSpaces) * 100;//60
        console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`);//Taxi - 60.00% full.

        command = input[index];
        index++;

        //totalTickets += standardTickets + studentTickets + kidsTickets;//6 /14/ shoud be 12

        // let standardTicketsPercent = (standardTickets / totalTickets) * 100;
        // let kidsTicketsPercent = (kidsTickets / totalTickets) * 100;
        if (command === 'Finish') {
            console.log(`Total tickets ${totalTickets}`);
    
        }
        if (command === 'Finish') {
            let studentTicketsPercent = (studentTickets / totalTickets) * 100;//8 / 12 * 100 = 66.67%
            console.log(`${studentTicketsPercent}% student tickets.`);

        }
    }
    
    // console.log(`${standardTicketsPercent}% standart tickets.`);
    // console.log(`${kidsTicketsPercent.toFixed(2)}% kids tickets.`);
}
tickets([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
])
