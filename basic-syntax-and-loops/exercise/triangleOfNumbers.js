function triangleOfNumbers(n) {
    for (let num = 1; num <= n; num++) {
        let rowText = '';

        for (let col = 1; col <= num; col++) {
            rowText += `${num} `;
        }

        console.log(rowText);
    }
}

triangleOfNumbers(3);