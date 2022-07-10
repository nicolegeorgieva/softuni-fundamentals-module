function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
        let currentDigit = arr[i].toString();
        let reversedNum = reverse(currentDigit);
        let isPalindrome = false;

        if (currentDigit === reversedNum) {
            isPalindrome = true;
            print(isPalindrome);
        } else {
            print(isPalindrome);
        }
    }

    function reverse(string) {
        return string.split('').reverse().join('');
    }

    function print(message) {
        console.log(message);
    }
}

palindromeIntegers([123, 323, 421, 121]);
//false
//true
//false
//true
