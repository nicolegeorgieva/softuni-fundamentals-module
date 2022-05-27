function rounding(number, precision) {

    if (precision > 15) {
        precision = 15;
    }

    let roundedNumber = number.toFixed(precision);
    console.log(parseFloat(roundedNumber));
}

rounding(10.5, 3);