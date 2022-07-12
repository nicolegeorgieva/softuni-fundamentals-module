function nxnMatrix(number) {

    createRowOfNumber(number);


    function createRowOfNumber(number) {
        let num = Number(number);
        let row = '';

        for (let i = 1; i <= num; i++) {
            row += num + ' ';
        }

        for (let j = 1; j <= num; j++) {
            print(row);
        }
    }

    function print(message) {
        console.log(message);
    }
}

nxnMatrix(3);
