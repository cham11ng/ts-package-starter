// eslint-disable-next-line import/no-unresolved
import { describe, expect, it } from 'bun:test';

import { multiply } from '../src/index';

describe('multiply()', () => {
  it('should return multiple of given arguments', () => {
    expect(multiply(1, 2)).toBe(2);
  });
});
