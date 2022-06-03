function amazingNumbers(num) {
    let numToString = String(num);
    let res = 0;

    for (let i = 0; i < numToString.length; i++) {
        let num = Number(numToString[i]);
        res += num;
    }

    let resToString = String(res);
    let isAmazing = false;

    for (let i = 0; i < resToString.length; i++) {
        if (Number(resToString[i]) === 9) {
            isAmazing = true;
            break;
        }
    }
    let amazing = isAmazing ? 'True' : 'False';
    console.log(`${num} Amazing? ${amazing}`);
}

amazingNumbers(1233);
amazingNumbers(15);