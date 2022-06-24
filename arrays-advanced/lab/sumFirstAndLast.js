function sumFirstAndLast(arr) {
    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());
    let sum = firstElement + lastElement;

    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);