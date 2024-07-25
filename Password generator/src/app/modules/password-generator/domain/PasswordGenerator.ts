import { PasswordConfig, PasswordConfigBuilder } from './PasswordConfig';
import { assert, ArrayUtil, Random } from './utils';

export class PasswordGenerator {
  public static readonly alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  public static readonly numbers = '0123456789';
  public static readonly symbols = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
  private config: PasswordConfig;

  constructor(config: Partial<PasswordConfig> = {}) {
    this.config = { ...new PasswordConfigBuilder().build(), ...config };
    assert(this.config.length >= PasswordConfigBuilder.MIN_LENGTH);
    assert(this.config.length <= PasswordConfigBuilder.MAX_LENGTH);
  }

  public generate(): string {
    const characters = this.getCharacters();

    let password = '';

    if (this.config.withUpperCase) {
      password += PasswordGenerator.alphabet.charAt(Random.number(0, PasswordGenerator.alphabet.length - 1));
    }

    if (this.config.withNumbers) {
      password += PasswordGenerator.numbers.charAt(Random.number(0, PasswordGenerator.numbers.length - 1));
    }

    if (this.config.withSymbols) {
      password += PasswordGenerator.symbols.charAt(Random.number(0, PasswordGenerator.symbols.length - 1));
    }

    for (let i = password.length; i < this.config.length; i++) {
      password += characters.charAt(Random.number(0, characters.length - 1));
    }

    return ArrayUtil.shuffle(password.split('')).join('');
  }

  private getCharacters(): string {
    let characters = PasswordGenerator.alphabet.toLowerCase();
    if (this.config.withUpperCase) characters += PasswordGenerator.alphabet;
    if (this.config.withNumbers) characters += PasswordGenerator.numbers;
    if (this.config.withSymbols) characters += PasswordGenerator.symbols;
    return characters;
  }
}
