import Core from '../src/core';

const core = new Core();

describe('set', () => {
  it('merge', () => {
    let rules = {
      name: 'required',
    };
    core.mergeRules(rules);
    expect(core.rules).toStrictEqual(rules);

    const attributes = {
      name: '名字'
    };
    core.mergeAttributes(attributes);
    expect(core.attributes).toStrictEqual(attributes);

    const messages = {
      'name.required': '缺少:attribute'
    };
    core.mergeMessages(messages);
    expect(core.messages).toStrictEqual(messages);
  });
});
