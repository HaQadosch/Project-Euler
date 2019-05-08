/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */
function isPalindrome(candidate) {
  const l = candidate.length;
  return (
    l === 0 ||
    l === 1 ||
    (candidate[0] === candidate[l - 1] && isPalindrome(candidate.slice(1, -1)))
  );
}
function allPalindromes() {
  let _1 = 999;
  let _2 = 999;
  let current = _1 * _2;
  const candidates = [];
  while (0 < _1) {
    if (isPalindrome([...current.toString()])) {
      candidates.push({ current, _1, _2 });
    }
    --_2;
    if (_2 === 0) {
      _2 = 999;
      --_1;
    }
    current = _1 * _2;
  }
  return candidates;
}
function largestPalindrome(allPal) {
  return allPal.reduce(
    ({ current: maxC, ...maxRest }, { current, ...rest }) => {
      return maxC < current
        ? { current, ...rest }
        : { current: maxC, ...maxRest };
    }
  );
}
largestPalindrome(allPalindromes()); /*?*/
// { current: 906609, _1: 993, _2: 913 }
//# sourceMappingURL=Largest palindrome product.js.map
