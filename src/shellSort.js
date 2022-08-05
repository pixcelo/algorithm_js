// Shell Sort
function ShellSort() {
    for (let step = parseInt(a.length/2); step > 0; step = parseInt(step/2)) {
        let j;
        for (let i = step; i < a.length; i++) {
            let tmp = a[i];
            for (j = i; j >= step; j -= step) {
                if (a[j-step] > tmp) {
                    a[j] = a[j - step];
                } else {
                    break;
                }
            }
            a[j] = tmp;
            }
        }
}

const a = [10,3,1,9,7,6,8,2,4,5];
ShellSort();
console.log(a);
