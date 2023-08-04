import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("array map test", () => {
  test('should return array list divided by 2', () => {
    //GIVEN
    const numList = [2, 3, 40, 5, 16];
    const success = [1, 1.5, 20, 2.5, 8];

    //WHEN
    const result = halfNumbers(numList);

    //THEN
    expect(result).toEqual(success);
  })

  test('should add Hello before names', () => {
    //GIVEN
    const names = ['Christoper', 'Helena', 'Nicholas'];
    const success = ['Hello Christoper', 'Hello Helena', 'Hello Nicholas'];

    //WHEN
    const result = spliceNames(names);

    //THEN
    expect(result).toEqual(success);
  })

  test('should fail due to incorrect spelling of names', () => {
    //GIVEN
    const names = ['Christoper', 'Helena', 'Nicholas'];
    const success = ['Hello Christopher', 'Hello Helen', 'Hello Nicolas'];

    //WHEN
    const result = spliceNames(names);

    //THEN
    expect(result).not.toEqual(success);
  })

  test('should add serial number to fruit list', () => {
    //GIVEN
    const fruits = ['apple', 'orange', 'banana'];
    const success = ['1. apple', '2. orange', '3. banana'];

    //WHEN
    const result = addSerialNumber(fruits);

    //THEN
    expect(result).toEqual(success);
  })
});
