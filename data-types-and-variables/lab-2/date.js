function solve(year, month, day) {
    let date = new Date(year, month - 1, day + 2);
    console.log(date.toISOString().split('T')[0]);
}

solve(1960, 9, 30);