import MessageProvider from './MessageProvider';

export default interface Validator extends MessageProvider {
  /**
   * Run the validator's rules against its data.
   */
  validate(): any[];

  /**
   * Get the attributes and values that were validated.
   */
  validated(): any[];

  /**
   * Determine if the data fails the validation rules.
   */
  fails(): boolean;

  /**
   * Get the failed validation rules.
   */
  failed(): any[];

  /**
   * Add conditions to a given field based on a Closure.
   */
  sometimes(
    $attribute: string | any[],
    $rules: string | any[],
    $callback?: void
  ): this;

  /**
   * Add an after validation callback.
   */
  after($callback?: string | void): this;

  /**
   * Get all of the validation error messages.
   *
   * @return \Illuminate\Support\MessageBag
   */
  errors(): MessageProvider;
}
