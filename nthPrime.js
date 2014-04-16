var nthPrime = function(n) {
    if (n <= 0 || n > 100000)
        throw new Error("Positive number < 100000");
    var primes = new Array(n+1);
    primes[1] = 2;
    
    Search:
    for (var i = 2, num = 3; i <= n; num++) {
        for (var j = 1; j < i; j++) {
            if (num % primes[j] === 0) {
                continue Search;
            }
        }
        primes[i] = num;
        i++
    }
    
    return primes[n];
}


// TESTS

console.log(nthPrime(1) == 2);
console.log(nthPrime(2) == 3);
console.log(nthPrime(3) == 5);
console.log(nthPrime(4) == 7);
console.log(nthPrime(5) == 11);
console.log(nthPrime(6) == 13);
console.log(nthPrime(10) == 29);
console.log(nthPrime(100) == 541);
//console.log(nthPrime(100000) == 1299709);