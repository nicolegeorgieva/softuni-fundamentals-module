function sumDigits(number) {
    let numberAsString = number.toString();
    let sumOfAllDigits = 0;

    for (let index = 0; index < numberAsString.length; index++) {
        let currentDigit = Number(numberAsString[index]);
        sumOfAllDigits += currentDigit
    }

    console.log(sumOfAllDigits);
}

sumDigits(245678);