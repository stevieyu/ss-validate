import validate, { Validate } from '../src';

describe('init', () => {
  it('function', () => {
    expect(validate().messages).toStrictEqual({});
  });
  it('class', () => {
    expect(new Validate().messages).toStrictEqual({});
  });
});
