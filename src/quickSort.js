// Quick sort
function quickSort(start, end){

    const pivot = data[Math.floor((start + end) / 2)];
    let left = start;
    let right = end;

    while (true) {

        while (data[left] < pivot) {
            left++;
        }

        while (pivot < data[right]) {
            right--;
        }

        if (right <= left) {
            break;
        }

        let tmp = data[left];
        data[left] = data[right];
        data[right] = tmp;
        left++;
        right--;
        console.log("並び替え: " + data + " ピボットの値: " + pivot);
    }

    if (start < left - 1) {
        quickSort(start, left-1);
    }

    if (right + 1 < end) {
        quickSort(right + 1, end);
    }
}

const data = [3,7,2,4,6,1,9,8,5];
console.log("整列前: " + data);

// execute
quickSort(0, data.length - 1);
console.log("整列後: " + data);
