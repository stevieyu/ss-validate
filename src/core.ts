// import {get} from 'lodash';

export default class {
  rules: object = {};
  messages: object = {};
  attributes: object = {};

  /** default var **/
  _rules: object | null = null;
  _messages: object | null = null;
  _attributes: object | null = null;

  constructor(
    rules: object = {},
    attributes: object = {},
    messages: object = {}
  ) {
    this.mergeMessages(messages);
    this.mergeAttributes(attributes);
    this.mergeRules(rules);
  }

  mergeRules(rules: object): this {
    Object.assign(this.rules, rules);
    if (!this._rules) {
      this._rules = this.rules;
    }
    return this;
  }

  mergeAttributes(attributes: object): this {
    Object.assign(this.attributes, attributes);
    if (!this._attributes) {
      this._attributes = this.attributes;
    }
    return this;
  }

  mergeMessages(messages: object): this {
    Object.assign(this.messages, messages);
    if (!this._messages) {
      this._messages = this.messages;
    }
    return this;
  }

  check(
    data: Object,
    rules: Object,
    attributes: Object = {},
    messages: Object = {}
  ) {
    // const errors = {};

    rules = { ...this.rules, rules };
    attributes = { ...this.attributes, attributes };
    messages = { ...this.messages, messages };

    // for (const key of Object.keys(data)) {
    //   const val = get(data, key);

    //   console.log(key, val);
    // }

    return data;
  }

  reset(): this {
    this.rules = { ...this._rules };
    this.attributes = { ...this._attributes };
    this.messages = { ...this.messages };
    return this;
  }
}
