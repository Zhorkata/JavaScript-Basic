// •	"Facebook" -> 150 лв.
// •	"Instagram" -> 100 лв.
// •	"Reddit" -> 50 лв.

function salary(input) {
    let openTabsCount = Number(input[0]);
    let salary = Number(input[1]);
    let sum = 0;
    for (let n = 2; n < input.length; n++) {
        let currentTab = input[n];
        switch (currentTab) {

            case 'Facebook':
                sum += 150;
                break;
            case 'Instagram':
                sum += 100;
                break;
            case 'Reddit':
                sum += 50;
                break;
            default:
                sum += 0;
                break;
        }
    }
    if (sum >= salary) {
        console.log('You have lost your salary.');
    } else {
        console.log(salary - sum);
    }
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])



//150