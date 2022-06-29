function studentInfo() {
    let obj = { name: 'Nicole', age: 23, grade: '6.00' };

    for (let key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`);
    }
};

studentInfo();

