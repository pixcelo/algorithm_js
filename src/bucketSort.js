function bucketSort(arr) {
    const bucket = [];

    for (let i = 0; i < arr.length; i++) {
      if (!bucket[arr[i]]) {
        bucket[arr[i]] = 1;
      } else {
        bucket[arr[i]]++;
      }
    }
    const res = [];
    for (let i = 0; i < bucket.length; i++) {
      if (!bucket[i]) {
        continue;
      }
      for (let j = 0; j < bucket[i]; j++) {
        res.push(i);
      }
    }
    return res;
}

console.log(bucketSort([8, 2, 5, 7, 1, 6, 9]));
