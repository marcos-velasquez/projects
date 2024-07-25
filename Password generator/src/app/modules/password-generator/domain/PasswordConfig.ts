import { assert } from './utils/Assert';

export interface PasswordConfig {
  length: number;
  withUpperCase: boolean;
  withNumbers: boolean;
  withSymbols: boolean;
}

export class PasswordConfigBuilder {
  public static readonly MIN_LENGTH = 8;
  public static readonly MAX_LENGTH = 16;
  public static readonly default: PasswordConfig = { length: 10, withUpperCase: true, withNumbers: true, withSymbols: true };
  private readonly config: PasswordConfig = { ...PasswordConfigBuilder.default };

  public withLength(value: number): this {
    assert(value >= PasswordConfigBuilder.MIN_LENGTH);
    assert(value <= PasswordConfigBuilder.MAX_LENGTH);
    this.config.length = value;
    return this;
  }

  public withUpperCase(value = true): this {
    this.config.withUpperCase = value;
    return this;
  }

  public withNumbers(value = true): this {
    this.config.withNumbers = value;
    return this;
  }

  public withSymbols(value = true): this {
    this.config.withSymbols = value;
    return this;
  }

  public simple(): this {
    return this.withNumbers(false).withSymbols(false).withUpperCase(false);
  }

  public build(): PasswordConfig {
    return this.config;
  }
}
