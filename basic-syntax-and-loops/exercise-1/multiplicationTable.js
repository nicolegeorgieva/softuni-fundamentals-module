function multiplicationTable(num) {
    for (let currentNumber = 1; currentNumber <= 10; currentNumber++) {
        console.log(`${num} X ${currentNumber} = ${num * currentNumber}`);
    }
}

multiplicationTable(5);