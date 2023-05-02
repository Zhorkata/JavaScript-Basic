function schoolThings(input) {
    let pensCount = Number(input[0]);
    let markersCount = Number(input[1]);
    let litres = Number(input[2]);
    let discountPercent = Number(input[3]) / 100;

    let pen = 5.8;
    let marker = 7.2;
    let cleaningDetergent = 1.2;

    let discount = (pensCount * pen + markersCount * marker + litres * cleaningDetergent) * discountPercent;
    let totalPrice = (pensCount * pen + markersCount * marker + litres * cleaningDetergent)
    let totalPriceWithDiscount = totalPrice - discount;
    console.log(totalPriceWithDiscount);
}
schoolThings(["4", "2", "5", "13"])