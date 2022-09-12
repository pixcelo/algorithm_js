// Sieve of Eratosthenes
function getPrimeNumber(limit) {
    let n;
    let i;

    for (n = 2; n <= limit; n++) {
        for(i = 2; i < n; i++) {
            if (n % i == 0) break;
        }
        if (n == i) console.log(n);
    }
}

getPrimeNumber(100);
