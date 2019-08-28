import Validate from '../src';

const validate = new Validate();

describe('blah', () => {
  it('works', () => {
    expect(validate.messages).toStrictEqual({});
  });
});
