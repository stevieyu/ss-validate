
export default interface RuleInterface {

  passes(attribute: string, value: any): boolean

  message(): string
}
