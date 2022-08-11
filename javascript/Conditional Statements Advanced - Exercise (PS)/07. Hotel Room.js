function a(month,numOfNights){
    let studioDiscount=0;
    let apartmentDiscount=0;
    let studioPrice=0;
    let apartmentPrice=0;
    switch (month){
                case "May":
                case "October":

                    if (numOfNights > 14){
                        studioDiscount = 50 * 0.30;
                        apartmentDiscount = 65 * 0.10;
                    }
                    else if (numOfNights > 7){
                        studioDiscount = 50 * 0.05;
                    }
                    studioPrice = numOfNights * (50 - studioDiscount);
                    apartmentPrice = numOfNights * (65 - apartmentDiscount);
                    break;
                case "June":
                case "September":

                    if (numOfNights > 14){
                        studioDiscount = 75.20 * 0.20;
                        apartmentDiscount = 68.70 * 0.10;
                    }
                    studioPrice = numOfNights * (75.20 - studioDiscount);
                    apartmentPrice = numOfNights * (68.70 - apartmentDiscount);
                    break;
                case "July":
                case "August":
                    studioPrice = numOfNights * 76;
                    if (numOfNights > 14){
                        apartmentDiscount = 77 * 0.10;
                    }
                    apartmentPrice = numOfNights * (77 - apartmentDiscount);
                    break;
    }
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} USD.`);
            console.log(`Studio: ${studioPrice.toFixed(2)} USD.`);
}