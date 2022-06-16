function falsy() {
    let testVar = 0;

    if (testVar) {
        console.log('Not falsy');
    } else {
        console.log('Falsy');
    }
}

falsy();