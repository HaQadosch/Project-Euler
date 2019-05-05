/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

function* nextPrime(): Iterator<number> {
  let actual = 3;
  const primes = [2];
  const isPrime = (candidate: number): boolean =>
    primes.every(p => {
      const x = candidate / p;
      return Math.floor(x) !== Math.ceil(x);
    });

  while (true) {
    do {
      actual = actual + 2;
    } while (!isPrime(actual));
    primes.push(actual);
    yield actual;
  }
}

function largest(target: number): number {
  const andThen = nextPrime();
  let candidate = 0;
  let currentPrime = andThen.next().value;
  let div = target / currentPrime;

  while (div > currentPrime) {
    if (Math.floor(div) === Math.ceil(div)) {
      candidate = currentPrime;
    }
    currentPrime = andThen.next().value;
    div = target / currentPrime;
  }
  return candidate;
}

console.log(largest(600851475143));
