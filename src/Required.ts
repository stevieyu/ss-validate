import RuleInterface from 'RuleInterface';

export class Required implements RuleInterface {
  constructor(...param: any[]) {
    Object.assign(this, param);
  }

  passes(_attribute: string, value: any): boolean {
    return !!value;
  }

  message(): string {
    return ':attribute 必须存在';
  }
}

export default (...args: any[]) => new Required(...args);
