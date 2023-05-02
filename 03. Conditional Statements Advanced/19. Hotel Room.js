function hotelRoom(input) {
    let month = input[0];
    let overnightStayCount = Number(input[1]);

    let studioPricePerNight = 0;
    let apartmentPricePerNight = 0;
    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month === 'May' || month === 'October') {
        studioPricePerNight = 50;
        apartmentPricePerNight = 65;
        if (overnightStayCount <= 7) {
            studioPrice = overnightStayCount * studioPricePerNight;
            apartmentPrice = overnightStayCount * apartmentPricePerNight;
        }
        else if (overnightStayCount <= 14) {
            studioPrice = studioPricePerNight * overnightStayCount * 0.95;
            apartmentPrice = overnightStayCount * apartmentPricePerNight;
        }
        else {
            studioPrice = studioPricePerNight * overnightStayCount * 0.7;//okey
            apartmentPrice = apartmentPricePerNight * overnightStayCount * 0.9;//okey
        }
    } else if (month === 'June' || month === 'September') {
        studioPricePerNight = 75.2;
        apartmentPricePerNight = 68.7;
        if (overnightStayCount > 14) {
            studioPrice = overnightStayCount * studioPricePerNight * 0.8;
            apartmentPrice = overnightStayCount * apartmentPricePerNight * 0.9;
        }
        else {
            studioPrice = studioPricePerNight * overnightStayCount;
            apartmentPrice = overnightStayCount * apartmentPricePerNight;
        }
    } else if (month === 'July' || month === 'August') {
        studioPricePerNight = 76;
        apartmentPricePerNight = 77;
        if (overnightStayCount <= 14) {
            studioPrice = overnightStayCount * studioPricePerNight;
            apartmentPrice = overnightStayCount * apartmentPricePerNight;
        }
        else {
            studioPrice = overnightStayCount * studioPricePerNight;
            apartmentPrice = overnightStayCount * apartmentPricePerNight * 0.9;
        }
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom(["July",
    "5"])





