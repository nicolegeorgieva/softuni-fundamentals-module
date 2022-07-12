function nxnMatrix(number) {

    createRowOfNumber(number);


    function createRowOfNumber(number) {
        let num = Number(number);

        for (let j = 1; j <= num; j++) {
            print(createRow(num));
        }
    }

    function createRow(num) {
        let row = '';

        for (let i = 1; i <= num; i++) {
            row += num + ' ';
        }

        return row;
    }

    function print(message) {
        console.log(message);
    }
}

nxnMatrix(3);
