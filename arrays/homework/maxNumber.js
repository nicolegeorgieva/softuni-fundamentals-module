function maxNumber(input) {
    
    let res = topIntegers(input);
 
    print(formatResult(res));



    function topIntegers(input) {

        return input.filter((_, i) => biggerNumbers(i, input));

    }

    function biggerNumbers(currentNumberIndex, input) {  
        let currentNumber = input[currentNumberIndex]; //1

        for (let i = currentNumberIndex + 1; i < input.length; i++) {
    
            if (currentNumber <= input[i]) {
                return false;
            }
        }

        return true;
    }

    function formatResult(res) {
        return res.join(' ');
    }

    function print(message) {
        console.log(message);
    }
}

maxNumber([1, 4, 3, 2]);