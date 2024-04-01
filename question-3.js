function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime
    if (num <= 3) return true; // 2 and 3 are prime

    if (num % 2 === 0 || num % 3 === 0) return false; // multiples of 2 and 3 are not prime

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false; // multiples of i and i+2 are not prime
    }

    return true; // all other numbers are prime
}

function filterPrimes(numbers) {
    return numbers.filter(isPrime);
}

// Test the function
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = filterPrimes(inputArray);
console.log(primeNumbers); // Output: [2, 3, 5, 7]
