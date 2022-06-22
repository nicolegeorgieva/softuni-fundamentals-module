function addAndSubtract(a, b, c) {
    function sum(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }

    return subtract(sum(a, b), c);
}

console.log(addAndSubtract(23, 6, 10));