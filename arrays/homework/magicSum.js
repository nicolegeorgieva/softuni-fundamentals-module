function magicSum(arr, number) {
    let sum = 0;
    let magicPair = '';

    for (let i = 0; i < arr.length; i++) {
        let currentChar = arr[i]; //1

        for (let j = i + 1; j < arr.length; j++) {
            let comparisonChar = arr[j]; //7
            sum = currentChar + comparisonChar;

            if (sum === number) {
                magicPair += `${currentChar} ${comparisonChar}\n`;
            }
        }
    }

    print(magicPair);


    function print(message) {
        console.log(message);
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
//1 7
//6 2