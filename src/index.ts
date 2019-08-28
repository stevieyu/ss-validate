import Core from './Core'
import Required from 'Required';

export default class extends Core{
  rules: object = {
    required: new Required()
  }
}
