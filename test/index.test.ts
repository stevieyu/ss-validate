import validate from '../src';

describe('function', () => {
  it('required', () => {
    const res = validate(
      {
        a: null,
        b: undefined,
        c: NaN,
        d: '',
        e: 0,
      },
      {
        e: 'required',
      }
    );

    expect(res).toStrictEqual({ e: 0 });
  });
});
