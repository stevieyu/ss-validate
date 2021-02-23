import Core from './core';
import Required from './Required';

export class Validate extends Core {
  rules: object = {
    required: Required(),
  };
}

export const validate = (
  data: object,
  rules: object = {},
  attributes: object = {},
  messages: object = {}
) => new Validate().check(data, rules, attributes, messages);

export default validate;
