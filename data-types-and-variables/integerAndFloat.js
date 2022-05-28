function integerAndFloat(num1, num2, num3) {
    let res = num1 + num2 + num3;
    let resToString = String(res);
    let isFloat = false;

    for (let i = 0; i < resToString.length; i++) {
        if (resToString[i] === '.') {
            isFloat = true;
        }
    }
    console.log(`${res} - ${isFloat ? 'Float' : 'Integer'}`);
}

integerAndFloat(9, 100, 1.1);