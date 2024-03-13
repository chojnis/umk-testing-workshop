import { describe, expect, it } from 'vitest';
import { sumOfNumbers } from './sumOfNumbers';

// /* TODO Zadanie 4
// Podejście TDD (ang. test driven development) - najpierw piszemy testy, dopiero potem implementację rozwiązania
//
// Należy napisać rozwiązanie, która będzie spełniać wszystkie założenia z testów.
//  */
//
// żeby testy się wykonywały, usuń .skip
describe.skip('sumOfNumbers ', () => {
  it('should be a function', () => {
    // when
    const elementType = typeof sumOfNumbers;

    // then
    expect(elementType).toBe('function');
  });

  it('should return sum of numbers', () => {
    // when
    const result = sumOfNumbers([2, 4, 6]);

    // then
    expect(result).toBe(12);
  });

  it('should return 0 when no parameters are given', () => {
    // when
    const result = sumOfNumbers();

    // then
    expect(result).toBe(0);
  });

  it('should return 0 when parameter is not an array instance', () => {
    // when
    const result = sumOfNumbers({ foo: 'bar' });

    // then
    expect(result).toBe(0);
  });
});
