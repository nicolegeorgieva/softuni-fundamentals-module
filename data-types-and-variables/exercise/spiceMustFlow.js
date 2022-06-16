function spiceMustFlow(currentYield) {
    let daysCounter = 0;
    let spicesExtracted = 0;

    const MIN_YIELD_REQUIRED = 100;
    const DAILY_SPICES_CONSUMPTION = 26;
    const DAILY_YIELD_DROP = 10;

    while (currentYield >= MIN_YIELD_REQUIRED) {
        daysCounter++;
        spicesExtracted += currentYield - DAILY_SPICES_CONSUMPTION;
        currentYield -= DAILY_YIELD_DROP;
    }

    console.log(daysCounter);

    if (daysCounter !== 0) {
        console.log(spicesExtracted - DAILY_SPICES_CONSUMPTION);
    } else {
        console.log(spicesExtracted);
    }
}

spiceMustFlow(111);