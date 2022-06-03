function vacation(people, groupType, day) {
    let price = 0;

    switch (groupType) {
        case 'Students':
            if (day === 'Friday') {
                price += 8.45;
            } else if (day === 'Saturday') {
                price += 9.80;
            } else if (day === 'Sunday') {
                price += 10.46;
            } break;
        case 'Business':
            if (day === 'Friday') {
                price += 10.90;
            } else if (day === 'Saturday') {
                price += 15.60;
            } else if (day === 'Sunday') {
                price += 16;
            } break;
        case 'Regular':
            if (day === 'Friday') {
                price += 15;
            } else if (day === 'Saturday') {
                price += 20;
            } else if (day === 'Sunday') {
                price += 22.50;
            } break;
    }

    if (groupType === 'Students' && people >= 30) {
        price *= 0.85;
    } else if (groupType === 'Business' && people >= 100) {
        people -= 10;
    } else if (groupType === 'Regular' && people >= 10 && people <= 20) {
        price *= 0.95;
    }

    let totalPrice = price * people;

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, 'Students', 'Sunday');