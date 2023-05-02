function foodDel(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let chickenPrice = 10.35;
    let fishPrice = 12.4;
    let veganPrice = 8.15;

    let totalPrice = chickenPrice * chickenMenu + fishPrice * fishMenu + veganPrice * veganMenu;
    let dessertPrice = totalPrice * 0.2;

    let delPrice = 2.5;
    let finalPrice = totalPrice + dessertPrice + delPrice
    console.log(finalPrice)
}
foodDel(["9", "2", "6"])