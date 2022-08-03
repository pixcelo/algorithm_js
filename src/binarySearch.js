// Binary search
const data = [10, 30, 40, 60, 70, 90, 120];
console.log(data);

function Search(data, target) {
    let ret = -1;
    let left = 0;
    let right = data.length - 1;

    while (left <= right) {
        const mid = (left + right) / 2;
        console.log("mid:" + mid);
        if (data[mid] == target ) {
            return mid + 1;
        } else if (target < data[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ret;
}

console.log(Search(data, 70));
