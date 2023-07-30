// !!!NOT FINISHED!!!

function hospital(input) {
    let days = Number(input[0]);

    let treated = 0;
    let unTreated = 0;
    let doctors = 7
    let day = 0;

    let totalUntreated = 0;
    let totalTreated = 0;

    for (let i = 1; i <= days; i++) {
        day++;
        if (day === 3) {
            if (unTreated > treated) {
                doctors++;
                day = 0;

                unTreated = 0;
                treated = 0;
            }
        }
        let pacient = Number(input[i]);//7
        if (pacient >= doctors) {
            unTreated = pacient - doctors;//0/20/1/
            treated = pacient - unTreated;//7/7/8/

        } else {
            unTreated = 0;//0
            treated = pacient;//1
        }
        totalTreated += treated;//7->14->22->23
        totalUntreated += unTreated;//0->20->21->21

    }
    console.log(`Treated patients: ${totalTreated}.`);
    console.log(`Untreated patients: ${totalUntreated}.`);
}
hospital([
    3,
    2,
    3,
    4
])

//judge 80/100
