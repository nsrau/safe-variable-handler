// safe.test.js
const safe = require('./safe');

describe('safe.array', () => {
  test('returns the array if input is an array', () => {
    const input = [1, 2, 3];
    expect(safe.array(input)).toBe(input);
  });

  test('returns an empty array if input is not an array', () => {
    const input = 'not an array';
    expect(safe.array(input)).toEqual([]);
  });
});

describe('safe.object', () => {
  test('returns the object if input is an object', () => {
    const input = { key: 'value' };
    expect(safe.object(input)).toBe(input);
  });

  test('returns an empty object if input is not an object', () => {
    const input = 'not an object';
    expect(safe.object(input)).toEqual({});
  });
});

describe('safe.func', () => {
  test('returns the function if input is a function', () => {
    const input = () => {};
    expect(safe.func(input)).toBe(input);
  });

  test('returns a dummy function if input is not a function', () => {
    const input = 'not a function';
    expect(typeof safe.func(input)).toBe('function');
  });
});
