// Insertion sort
function insertionSort(arry) {
    for (let i = 1; i < arry.length; i++) {
        let tmp = arry[i];
        let j;

        for (j = i - 1; j >= 0; j--) {
            if (arry[j] > tmp) {
                arry[j + 1] = arry[j];
            } else {
                break;
            }
        }
        arry[j + 1] = tmp;
    }

    console.log(arry);
}

const a = [7,2,6,9,5];

insertionSort(a);
