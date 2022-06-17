function mergeArrays(arr1, arr2) {

    let stringToNumber = arr1.map(e => Number(e));
    let stringToNumber2 = arr2.map(e => Number(e));

    let res = [];

    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            //sum
            let sum = stringToNumber[i] + stringToNumber2[i];
            res.push(sum);
        } else {
            //concatenate
            let concatenation = arr1[i] + arr2[i];
            res.push(concatenation);
        }
    }

    console.log(res.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);