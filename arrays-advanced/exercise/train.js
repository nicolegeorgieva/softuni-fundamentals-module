function train(arr) {
    let passengersInTrainArr = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');

        if (command[0] === 'Add') {
            passengersInTrainArr.push(Number(command[1]));
        } else {
            for (let j = 0; j < passengersInTrainArr.length; j++) {
                if (Number(command[0]) + passengersInTrainArr[j] <= maxCapacity) {
                    passengersInTrainArr[j] += Number(command[0]);
                    break;
                }
            }
        }
    }

    print(passengersInTrainArr.join(' '));

    function print(message) {
        console.log(message);
    }
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);