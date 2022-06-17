function commonElements(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        let currentElement = arr1[i];

        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] === currentElement) {
                console.log(arr2[j]);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);