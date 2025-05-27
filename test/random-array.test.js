const { expect } = require('chai');
const { createRandomArray } = require('../script');

describe('createRandomArray Function', () => {
  it('should create an array of the specified length', () => {
    const length = 5;
    const array = createRandomArray(length);
    expect(array).to.be.an('array');
    expect(array).to.have.lengthOf(length);
  });

  it('should create an array with random numbers between 0 and 100', () => {
    const array = createRandomArray(100);
    array.forEach(num => {
      expect(num).to.be.a('number');
      expect(num).to.be.at.least(0);
      expect(num).to.be.at.most(100);
      expect(Number.isInteger(num)).to.be.true;
    });
  });

  it('should create an empty array when length is 0', () => {
    const array = createRandomArray(0);
    expect(array).to.be.an('array');
    expect(array).to.be.empty;
  });

  it('should throw an error for negative lengths', () => {
    expect(() => createRandomArray(-1)).to.throw('Length must be a non-negative integer');
  });

  it('should throw an error for non-integer lengths', () => {
    expect(() => createRandomArray(3.5)).to.throw('Length must be a non-negative integer');
    expect(() => createRandomArray('5')).to.throw('Length must be a non-negative integer');
  });
});
