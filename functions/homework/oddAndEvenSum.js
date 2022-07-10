function oddAndEvenSum(number) {
    let string = number.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < string.length; i++) {
        let currentDigit = Number(string[i]);

        if (currentDigit % 2 !== 0) {
            oddSum += currentDigit;
        } else {
            evenSum += currentDigit;
        }
    }

    print(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function print(message) {
        console.log(message);
    }
}

oddAndEvenSum(1000435);