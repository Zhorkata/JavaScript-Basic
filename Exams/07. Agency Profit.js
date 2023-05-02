function tickets(input) {
    let companyName = input[0];
    let adultTicketCount = Number(input[1]);
    let kidTicketCount = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let fee = Number(input[4]);
    
    let kidTicketPrice = adultTicketPrice * 0.3;//36
    let adultTicketWithFee = adultTicketPrice + fee;//160
    let kidTicketWithFee = kidTicketPrice + fee;//76
    
    let totalPrice = kidTicketCount * kidTicketWithFee + adultTicketCount * adultTicketWithFee;

    let profit = totalPrice * 0.2;
    console.log(`The profit of your agency from ${companyName} tickets is ${profit.toFixed(2)} lv.`);
}
tickets([
    'WizzAir',
    '15',
    '5',
    '120',
    '40'
])