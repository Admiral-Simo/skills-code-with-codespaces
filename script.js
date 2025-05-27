/**
 * Returns the nth Fibonacci number.
 * The Fibonacci sequence starts with 0 and 1, where each subsequent number
 * is the sum of the two preceding ones.
 * @param {number} n - A positive integer
 * @returns {number} The nth Fibonacci number
 */
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  
  let a = 0;
  let b = 1;
  let temp;
  
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}

/**
 * Creates a random array with the specified length.
 * Each element in the array will be a random number between 0 and 100.
 * @param {number} length - A non-negative integer specifying the length of the array
 * @returns {Array} An array of random numbers
 */
function createRandomArray(length) {
  if (!Number.isInteger(length) || length < 0) {
    throw new Error('Length must be a non-negative integer');
  }
  
  const result = [];
  for (let i = 0; i < length; i++) {
    // Generate random integers between 0 and 100
    result.push(Math.floor(Math.random() * 101));
  }
  
  return result;
}

// Export the function if we're in a Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { fibonacci, createRandomArray };
}
