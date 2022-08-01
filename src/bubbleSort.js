// bubble sort（バブルソート）
// Align adjacent elements by comparing their sizes
let data = [30, 10, 40, 90, 70, 20, 80];
console.log("before ", data);

for (let i = data.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        if(data[j] > data[j + 1]) {
            // Replace value of location
            let tmp = data[j + 1];
            data[j + 1] = data[j];
            data[j] = tmp;
        }
    }
}

console.log("after ", data);
