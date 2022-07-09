function maxSequenceOfEqualElements(input) {
    if (input.length === 0) {
        return;
    }

    let maxLength = 0;
    let maxNumber = null;

    for (let i = 0; i < input.length; i++) {
        let currentNumber = input[i];
        let currentLength = seqLen(currentNumber, input);

        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxNumber = currentNumber;
        }
    }

    print(formatResult(maxLength, maxNumber));

    function formatResult(maxLength, maxNumber) {
        let res = '';

        for (let i = 1; i <= maxLength; i++) {
            res += maxNumber + ' ';
        }

        return res
    }

    function seqLen(targetNumber, input) {
        let currentLen = 0;
        let maxLen = 0;

        let seqStarted = false;

        for (let i = 0; i < input.length; i++) {
            let currentNumber = input[i];

            if (!seqStarted && currentNumber == targetNumber) {
                //we just start a sequence
                seqStarted = true;
                currentLen = 1;
                continue
            }

            if (seqStarted && currentNumber === targetNumber) {
                //seq continues
                currentLen++; //+1
            } else {
                //current seq is broken
                if (currentLen > maxLen) {
                    maxLen = currentLen;
                }

                seqStarted = false;
                currentLen = 0;
            }
        }

        return maxLen;
    }

    function print(message) {
        console.log(message);
    }
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);