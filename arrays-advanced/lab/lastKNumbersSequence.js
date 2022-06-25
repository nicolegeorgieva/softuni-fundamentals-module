function lastKNumbersSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let nextElement = generateElement(previousNumbers(result, k));
        result.push(nextElement);
    }

    function previousNumbers(arr, k) {
        let arrCopy = arr.slice(0, arr.length)
        return arrCopy.slice(-k);
    }

    function generateElement(previousNumbersArr) {
        let sumOfPreviousKNumbers = 0;

        for (let i = 0; i < previousNumbersArr.length; i++) {

            let currentElement = previousNumbersArr[i];
            sumOfPreviousKNumbers += currentElement;
        }

        return sumOfPreviousKNumbers;
    }

    console.log(result.join(' '));
}

lastKNumbersSequence(6, 3);