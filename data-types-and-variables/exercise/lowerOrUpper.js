function lowerOrUpper(character) {
    let resultCase = '';

    if (character === character.toUpperCase()) {
        resultCase = 'upper-case';
    } else {
        resultCase = 'lower-case';
    }

    console.log(resultCase);
}

lowerOrUpper('L');