function linearSearch(key, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === key) console.log(`${key} exists`);
    }
}

const array = [1, 1, 2, 3, 5, 8, 13, 21, 34];
linearSearch(2, array);
