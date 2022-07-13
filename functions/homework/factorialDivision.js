function factorialDivision(a, b) {

    print(division(a, b).toFixed(2));


    function factorial(a) {
        multiplicatedA = 1;

        for (let i = a; i > 0; i--) { //5, 4, 3, 2, 1
            multiplicatedA *= i;
        }

        return multiplicatedA;
    }

    function division(a, b) {
        return factorial(a) / factorial(b);
    }

    function print(message) {
        console.log(message);
    }
}

factorialDivision(5, 2);
//60.00