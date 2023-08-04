import { firstGrownUp, firstOrange, firstLengthOver5Name } from "../src/find";

describe("array find test", () => {
  test('should show first occurrence of old age', () => {
    //GIVEN
    const ages = [11, 17, 54, 65, 11, 12, 14, 51, 102];
    const success = 54;
    //WHEN
    const result = firstGrownUp(ages);

    //THEN
    expect(result).toBe(success);
  })

  test('should fail getting first occurrence of old age', () => {
    //GIVEN
    const ages = [11, 18, 54, 65, 11, 12, 14, 51, 102];
    const success = 102;
    //WHEN
    const result = firstGrownUp(ages);

    //THEN
    expect(result).not.toBe(success);
  })

  test('should show orange from fruit list', () => {
    //GIVEN
    const fruits = ['apple', 'banana', 'orange'];
    const success = 'orange';

    //WHEN
    const result = firstOrange(fruits);

    //THEN
    expect(result).toBe(success);
  })

  test('should fail to show orange from fruit list', () => {
    //GIVEN
    const fruits = ['apple', 'banana', 'orange'];
    const success = 'apple';

    //WHEN
    const result = firstOrange(fruits);

    //THEN
    expect(result).not.toBe(success);
  })

  test('should show names with over 5 characters', () => {
    //GIVEN
    const names = ['Apple', 'James', 'Christine', 'Joanna', 'Jennifer'];
    const success = ['Christine', 'Joanna', 'Jennifer'];

    //WHEN
    const result = firstLengthOver5Name(names);

    //THEN
    expect(result).not.toEqual(success);
  })

  test('should not show names with over 5 characters', () => {
    //GIVEN
    const names = ['Apple', 'James', 'Christine', 'Joanna', 'Jennifer'];
    const success = ['Christine', 'Joanna', 'Jennifer'];

    //WHEN
    const result = firstLengthOver5Name(names);

    //THEN
    expect(result).not.toEqual(success);
  })

});
