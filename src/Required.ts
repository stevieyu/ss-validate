import RuleInterface from 'RuleInterface';

export default class Required implements RuleInterface{
  passes(_attribute: string, value: any): boolean {
    return !!value
  }

  message(): string {
    return ':attribute 必须存在'
  }
}
