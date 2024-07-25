import { PasswordConfigBuilder } from '../../domain/PasswordConfig';
import { PasswordGenerator } from '../../domain/PasswordGenerator';
import { GeneratePasswordInput } from './GeneratePassword.input';

export class GeneratePasswordUseCase {
  public execute(input: GeneratePasswordInput): string {
    const config = new PasswordConfigBuilder()
      .withLength(input.length)
      .withNumbers(input.withNumbers)
      .withUpperCase(input.withUpperCase)
      .withSymbols(input.withSymbols)
      .build();
    return new PasswordGenerator(config).generate();
  }
}
