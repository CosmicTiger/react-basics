import { sum, minus, multiply, divide, getRandomNum } from './numbers';

describe('Testing mathematical functions', () => {

    test('Testing Sum function', () => {
        expect(sum(5, 5)).toBe(10)
    });

    test('Testing minus function', () => {
        expect(minus(5, 5)).toBe(0)
    });


    test('Testing getRandomNum function', () => {
        expect(getRandomNum(5, 10)).toBeGreaterThanOrEqual(5);
        expect(getRandomNum(5, 10)).toBeLessThan(11);
        expect(getRandomNum(5, 10)).toBeLessThanOrEqual(10);
    });

});