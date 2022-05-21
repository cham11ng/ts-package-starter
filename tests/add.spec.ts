import { multiply } from '../src/index';

describe('add', () => {
  test('should return multiple of given arguments', () => {
    expect(multiply(1, 2)).toBe(2);
  });
});
