import Core from './core';
import Required from './Required';

export class Validate extends Core {
  rules: object = {
    required: new Required(),
  };
}

export const validate = (
  messages: object = {},
  attributes: object = {},
  rules: object = {}
) => {
  return new Validate(messages, attributes, rules);
};

export default validate;
