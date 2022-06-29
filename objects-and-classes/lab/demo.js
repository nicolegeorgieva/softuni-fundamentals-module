function demo() {
    let myObj = {
        'name': 'Nicole',
        'age': 23,
        sayHello: function () {
            console.log('Hello');
        }
    }

    myObj.town = 'Sofia';

    console.log(myObj);
}

demo();