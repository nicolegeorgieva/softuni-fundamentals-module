function sumFirstAndLastElements(numbers) {
    let firstNumber = numbers[0];
    let lastNumber = numbers[numbers.length - 1];

    let sum = firstNumber + lastNumber;

    console.log(sum);
}

sumFirstAndLastElements([20, 30, 40]);
sumFirstAndLastElements([10, 17, 22, 33]);