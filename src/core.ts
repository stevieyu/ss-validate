
export default class {
  rules: object = {};
  messages: object = {};
  attributes: object = {};

  constructor(messages: object = {}, attributes: object = {}, rules: object = {}){
    this.mergeMessages(messages);
    this.mergeAttributes(attributes);
    this.mergeRules(rules);
  }

  mergeRules(rules: object){
    Object.assign(this.rules, rules)
  }

  mergeMessages(messages: object){
    Object.assign(this.messages, messages)
  }

  mergeAttributes(attributes: object){
    Object.assign(this.attributes, attributes)
  }
}
