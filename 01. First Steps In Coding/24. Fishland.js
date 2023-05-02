function fishland(input) {
    let mackerel = Number(input[0]);
    let sprat = Number(input[1]);
    let bonito = Number(input[2]);
    let safrid = Number(input[3]);
    let mussels = Number(input[4]);
    //bonito 60% > mackarel
    //safrid 80% > sprat
    //mussels = 7.5lv per KG
    let bonitoPricePerKg = mackerel + mackerel * 0.6;//11.04
    let bonitoPrice = bonito * bonitoPricePerKg;//16.56
    let safridPricePerKg = sprat + sprat * 0.8;//7.5600000000000005
    let safridPrice = safrid * safridPricePerKg;//18.900000000000002
    let musselsPrice = mussels * 7.5;
    let price = bonitoPrice + safridPrice + musselsPrice;
    console.log(price.toFixed(2));
}
fishland(["6.9", "4.20", "1.5", "2.5", "1"])