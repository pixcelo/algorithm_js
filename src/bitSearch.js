const main = (inputArry, ansNum) => {
    const n = inputArry.length;

    for (let i = 0; i < (1 << n); i++) {
      let sum = 0;

      for (let j = 0; j < n; j++) {
        console.log(i, j, !!((i >> j) & 1))
        if (!((i >> j) & 1)) continue;
        sum += inputArry[j];
      }

      if (sum === ansNum) {
        return true;
      }
    }

    return false;
}

main([2,5,10], 16);
