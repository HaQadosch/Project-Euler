const assert = require("assert").strict;
/**
 *  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
function multiples(limit) {
  function inner(actual = 1, limit = 0, total = 0) {
    if (limit <= actual) {
      return total;
    }
    if (actual % 3 === 0 || actual % 5 === 0) {
      return inner(actual + 1, limit, total + actual);
    }
    return inner(actual + 1, limit, total);
  }
  return inner(0, limit, 0);
}
assert.deepStrictEqual(multiples(1000), 233168);
//# sourceMappingURL=Multiples of 3 and 5.js.map
