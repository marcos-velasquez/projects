import { assert } from './utils/Assert';

export class Character {
  constructor(public readonly value: string) {
    assert(value.length === 1);
  }

  public isNumber(): boolean {
    return Number.isInteger(parseInt(this.value));
  }

  public isAlphabet(): boolean {
    return /^[a-zA-Z]$/.test(this.value);
  }

  public isSymbol(): boolean {
    return !this.isNumber() && !this.isAlphabet();
  }
}
