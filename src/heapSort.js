const heap = (heapSize, arr, cur) => {
    const left = 2 * cur;
    const right = 2 * cur + 1;
    let max;

    if (left <= heapSize && arr[left - 1] > arr[cur - 1]) {
      max = left;
    } else {
      max = cur;
    }

    if (right <= heapSize && arr[right - 1] > arr[max - 1]) {
      max = right;
    }

    if (max != cur) {
      const tmp = arr[cur - 1];
      arr[cur - 1] = arr[max - 1];
      arr[max - 1] = tmp;
      heap(heapSize, arr, max);
    }
}

const buildMaxHeap = (arr) => {
    const heapSize = arr.length;
    for (let cur = heapSize / 2; cur >= 1; cur--) {
        heap(heapSize, arr, cur);
    }
    return arr;
}

const heapSort = (arr) => {
    const arrCopy = arr.slice();
    buildMaxHeap(arr);
    const sortedArr = [];
    for (let i = 0; i < arrCopy.length; i++) {
        const tmp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = tmp;

        sortedArr.push(arr.pop());
        heap(arrCopy.length, arr, 1);
    }
    return sortedArr;
}

console.log(heapSort([4, 1, 3, 2, 16, 9, 10, 14, 8, 7]))
