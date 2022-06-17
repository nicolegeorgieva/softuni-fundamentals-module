function addAndSubtract(arr) {
    let originalSumOfNumbers = 0;
    let newSumOfNumbers = 0;

    for (let i = 0; i < arr.length; i++) {

        originalSumOfNumbers += arr[i];

        if (arr[i] % 2 === 0) {
            arr[i] += i;
            newSumOfNumbers += arr[i];
        } else {
            arr[i] -= i;
            newSumOfNumbers += arr[i];
        }
    }

    console.log(arr);
    console.log(originalSumOfNumbers);
    console.log(newSumOfNumbers);
}

addAndSubtract([5, 15, 23, 56, 35]);