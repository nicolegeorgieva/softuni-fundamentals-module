function smallestOfThreeNumbers(a, b, c) {
    let smallestNumber;

    if (a < b && a < c) {
        smallestNumber = a;
    } else if (b < a && b < c) {
        smallestNumber = b;
    } else {
        smallestNumber = c;
    }

    return smallestNumber;
}

console.log(smallestOfThreeNumbers(2, 5, 3));