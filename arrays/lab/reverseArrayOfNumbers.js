function reverseArrayOfNumbers(n, numbers) {
    let result = [];

    for (let r = n - 1; r >= 0; r--) {
        result.push(numbers[r]);
    }

    console.log(result.join(' '));
}


reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);
console.log('-------------------------------');
reverseArrayOfNumbers(4, [-1, 20, 99, 5]);
console.log('-------------------------------');
reverseArrayOfNumbers(2, [66, 43, 75, 89, 47]);