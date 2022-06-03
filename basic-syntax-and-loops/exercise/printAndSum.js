function printAndSum(num1, num2) {
    let sum = 0;
    let result = '';

    for (let i = num1; i <= num2; i++) {
        result += i + ' ';
        sum += i;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);