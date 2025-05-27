const { expect } = require('chai');
const { fibonacci } = require('../script');

describe('Fibonacci Function', () => {
  it('should return 0 for n = 0', () => {
    expect(fibonacci(0)).to.equal(0);
  });

  it('should return 1 for n = 1', () => {
    expect(fibonacci(1)).to.equal(1);
  });

  it('should return 1 for n = 2', () => {
    expect(fibonacci(2)).to.equal(1);
  });

  it('should return 2 for n = 3', () => {
    expect(fibonacci(3)).to.equal(2);
  });

  it('should return 3 for n = 4', () => {
    expect(fibonacci(4)).to.equal(3);
  });

  it('should return 5 for n = 5', () => {
    expect(fibonacci(5)).to.equal(5);
  });

  it('should return 8 for n = 6', () => {
    expect(fibonacci(6)).to.equal(8);
  });

  it('should return 13 for n = 7', () => {
    expect(fibonacci(7)).to.equal(13);
  });

  it('should handle larger values correctly', () => {
    expect(fibonacci(10)).to.equal(55);
    expect(fibonacci(15)).to.equal(610);
  });

  it('should return 0 for negative inputs', () => {
    expect(fibonacci(-1)).to.equal(0);
    expect(fibonacci(-5)).to.equal(0);
  });
});
