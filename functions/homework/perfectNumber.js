function perfectNumber(number) {
    let num = Math.floor(number);
    let sum = 0;

    if (num < 0) {
        print("It's not so perfect.");
        return;
    }

    sumOfPositiveDivisors(num);



    function sumOfPositiveDivisors(num) {

        for (let i = 1; i < num; i++) {
            let currentDivisor = i;
            let division = num / currentDivisor;

            if (division % 1 === 0) {
                sum += currentDivisor;
            }
        }

        if (sum === num) {
            print("We have a perfect number!");
        } else {
            print("It's not so perfect.");
        }
    }

    function print(message) {
        console.log(message);
    }
}

perfectNumber(6);