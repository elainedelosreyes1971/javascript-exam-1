import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('array filter test', () => {
    test('should filter even numbers', () => {
        // GIVEN
        const number = [2, 5, 4, 6, 8];
        const success = [2, 4, 6, 8];

        // WHEN
        const result = filterEvenNumbers(number);

        // THEN
        expect(result).toEqual(success);
    })

    test('should filter odd numbers', () => {
        // GIVEN
        const number = [2, 5, 4, 6, 8];
        const success = [2, 4, 6, 8];

        // WHEN
        const result = filterEvenNumbers(number);

        // THEN
        expect(result).not.toBe(success);
    })

    test('should filter words with 4 characters', () => {
        //GIVEN
        const words = ['pear', 'year', 'hear', 'cat', 'stop', 'tip'];
        const success = ['pear', 'year', 'hear', 'stop'];

        //WHEN
        const result = filterLengthWith4(words);

        //THEN
        expect(result).toEqual(success);
    })

    test('should filter words with more than or less than 4 chars', () => {
        //GIVEN
        const words = ['pear', 'year', 'hear', 'cat', 'stop', 'tip', 'blast', 'hat'];
        const fail = ['cat', 'tip', 'hat'];

        //WHEN
        const result = filterLengthWith4(words);

        //THEN
        expect(result).not.toEqual(fail);
    })

    test('should filter words that start with A', () => {
        //GIVEN
        const words = ['animal', 'ancestor', 'analyze', 'ask', 'buy', 'stop', 'feet'];
        const success = ['animal', 'ancestor', 'analyze', 'ask'];

        //WHEN
        const result = filterStartWithA(words);

        //THEN
        expect(result).toEqual(success);
    })

    test('should filter words that does not start with A', () => {
        //GIVEN
        const words = ['animal', 'ancestor', 'analyze', 'ask', 'buy', 'stop', 'feet'];
        const fail = ['buy', 'stop', 'feet'];

        //WHEN
        const result = filterStartWithA(words);

        //THEN
        expect(result).not.toEqual(fail);
    })

});