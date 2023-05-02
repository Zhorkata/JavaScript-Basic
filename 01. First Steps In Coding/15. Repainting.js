function repainting(input) {
    let nylonQuantity = Number(input[0]);
    let paintQuantity = Number(input[1]);
    let thinnerQuantity = Number(input[2]);
    let workTime = Number(input[3]);
    let additionalPaintQuantity = 0.1 * paintQuantity;
    let totalPaintQuantity = paintQuantity + additionalPaintQuantity;
    let totalNylonQuantity = nylonQuantity + 2;
    let nylonPrice = totalNylonQuantity * 1.5;
    let paintPrice = totalPaintQuantity * 14.5;
    let thinnerPrice = thinnerQuantity * 5;
    let totalMaterialPrice = nylonPrice + paintPrice + thinnerPrice + 0.4;
    let workPricePerHour = 0.3 * totalMaterialPrice;
    let totalWorkPrice = workTime * workPricePerHour;
    let totalPrice = totalMaterialPrice + totalWorkPrice;
    console.log(totalPrice);
}
repainting(["10", "11", "4", "8"]);