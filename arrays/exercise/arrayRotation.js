function arrayRotation(arr, rotations) {

    for (let r = 1; r <= rotations; r++) {
        let res = [];

        for (let j = 1; j < arr.length; j++) {
            res.push(arr[j]);
        }

        res.push(arr[0]);

        arr = res;
    }

    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);