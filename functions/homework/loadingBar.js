function loadingBar(number) {

    if (number !== 100) {
        let arr = [];
        let final = [];

        for (let i = 10; i <= number; i += 10) {
            arr += '%';
        }

        for (let j = number; j < 100; j += 10) {
            final += '.';
        }

        print(`${number}% [${arr}${final}]`);
        print('Still loading...');

    } else {
        print('100% Complete!');
    }


    function print(message) {
        console.log(message);
    }
}

loadingBar(30); //(0, 10, 20, 30...)

//30% [%%%.......]
//Still loading...

//100% Complete!
