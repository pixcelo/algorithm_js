// Euclidean algorithm
// Find the greatest common divisor of two natural numbers
function euc(x, y) {
    if (y == 0) {
        return x;
    } else {
        return euc(y, x%y);
    }
}

console.log(euc(12, 18));
