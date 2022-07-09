function equalSums(input) {
    let foundIndex = 'no';

    for (let i = 0; i < input.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let l = 0; l < i; l++) {
            leftSum += input[l];
        }

        for (let r = i + 1; r < input.length; r++) {
            rightSum += input[r];
        }

        if (leftSum === rightSum) {
            foundIndex = i;
        }
    }

    print(foundIndex);

    function print(message) {
        console.log(message);
    }
}

equalSums([1, 2, 3, 3]);

//1. i=0 -> leftSum = 0; rightSum = 8
//2. i=1 -> leftSum = 1; rightSum = 8
//3. i=2 -> leftSum = 3; rightSum = 3
