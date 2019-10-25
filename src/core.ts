export default class {
  rules: object = {};
  messages: object = {};
  attributes: object = {};

  constructor(
    messages: object = {},
    attributes: object = {},
    rules: object = {}
  ) {
    this.mergeMessages(messages);
    this.mergeAttributes(attributes);
    this.mergeRules(rules);
  }

  mergeRules(rules: object): this {
    Object.assign(this.rules, rules);
    return this;
  }

  mergeMessages(messages: object): this {
    Object.assign(this.messages, messages);
    return this;
  }

  mergeAttributes(attributes: object): this {
    Object.assign(this.attributes, attributes);
    return this;
  }

  reset(): this {
    this.rules = {};
    this.messages = {};
    this.attributes = {};
    return this;
  }
}
