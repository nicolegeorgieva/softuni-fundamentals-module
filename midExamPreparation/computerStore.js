function computerStore(data) {
    let index = 0;
    let command = data(index);

    while (command !== 'regular') {
        if (command === 'special') {
            break;
        }

        let partPrice = Number(command);

        if (partPrice < 0) {
            //TO-DO
        }
    }
}

computerStore(1050, 200, 450, 2, 18.50, 16.86, 'special');

