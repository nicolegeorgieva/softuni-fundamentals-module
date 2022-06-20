function simpleCalculator(x, y, operation) {
    let res;

    switch (operation) {
        case 'multiply': res = (x, y) => x * y; break;
        case 'divide': res = (x, y) => x / y; break;
        case 'add': res = (x, y) => x + y; break;
        case 'subtract': res = (x, y) => x - y; break;
    }

    console.log(res(x, y));
}


simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(50, 13, 'subtract');