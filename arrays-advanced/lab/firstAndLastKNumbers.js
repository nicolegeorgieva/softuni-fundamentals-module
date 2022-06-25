function firstAndLastKNumbers(numbers) {
    let k = numbers.shift();

    let firstK = numbers.slice(0, k);
    let lastK = numbers.reverse().slice(0, k).reverse();

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);