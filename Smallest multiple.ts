/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

const x10 = 2520;
const divs20 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];
const divs10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isDiv = divs10.every(d => x10 % d === 0); //?

let x20 = x10;
while (!divs20.every(d => x20 % d === 0)) {
  ++x20;
}
x20; //? 232792560
