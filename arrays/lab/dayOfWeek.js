function dayOfWeek(number) {
    if (number < 1 || number > 7) {
        console.log('Invalid day!');
    } else {
        let dayNameArr = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ]

        console.log(dayNameArr[number - 1]);
    }
}

dayOfWeek([1]);
dayOfWeek([3]);
dayOfWeek([6]);
dayOfWeek([-12]);