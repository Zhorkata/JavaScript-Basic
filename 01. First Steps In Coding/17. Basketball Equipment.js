function basketballEquipment(input) {
    let annualTrainingFee = Number(input[0]);
    let priceDiffFeeSneakers = 0.4 * annualTrainingFee;
    let sneakersPrice = annualTrainingFee - priceDiffFeeSneakers;
    let priceDiffFeeSneakersOutfit = 0.2 * sneakersPrice;
    let outfitPrice = sneakersPrice - priceDiffFeeSneakersOutfit;
    let ballPrice = (1 / 4) * outfitPrice;
    let accessoriesPrice = (1 / 5) * ballPrice;
    let totalPrice = annualTrainingFee + sneakersPrice + outfitPrice + ballPrice + accessoriesPrice;
    console.log(totalPrice);
}
basketballEquipment(["365"])