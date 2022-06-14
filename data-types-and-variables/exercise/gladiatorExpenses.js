function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBrokeCounter = 0;

    for (let currentFight = 1; currentFight <= lostFights; currentFight++) {

        if (currentFight % 2 === 0) {
            expenses += helmetPrice;
        }

        if (currentFight % 3 === 0) {
            expenses += swordPrice;
        }

        if (currentFight % 6 === 0) {
            expenses += shieldPrice;
            shieldBrokeCounter++;

            if (shieldBrokeCounter % 2 === 0) {
                expenses += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);