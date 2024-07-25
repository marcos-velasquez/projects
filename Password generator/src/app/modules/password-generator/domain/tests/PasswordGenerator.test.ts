import { PasswordConfigBuilder } from '../PasswordConfig';
import { PasswordGenerator } from '../PasswordGenerator';
import { ArrayUtil } from '../utils';

describe('PasswordGenerator', () => {
  it('should generate a password with default configuration', () => {
    const passwordGenerator = new PasswordGenerator();
    for (let i = 0; i < 1000; i++) {
      const password = passwordGenerator.generate();
      expect(password.length).toEqual(10);
      expect(password).toMatch(/[A-Z]/);
      expect(password).toMatch(/[0-9]/);
      expect(password).toMatch(/[!@#$%^&*()_+\-=[\]{};':"\\|,`.<>/?~]/);
    }
  });

  it('should generate a password with custom (simple) configuration', () => {
    const customConfig = new PasswordConfigBuilder().simple().withLength(16).build();
    const passwordGenerator = new PasswordGenerator(customConfig);
    for (let i = 0; i < 1000; i++) {
      const password = passwordGenerator.generate();
      expect(password.length).toEqual(16);
      expect(password).not.toMatch(/[A-Z]/);
      expect(password).not.toMatch(/[0-9]/);
      expect(password).not.toMatch(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/);
    }
  });

  it('should generate a password with length customized', () => {
    const allowedLengths = ArrayUtil.fillFrom(PasswordConfigBuilder.MIN_LENGTH).to(PasswordConfigBuilder.MAX_LENGTH);
    for (const length of allowedLengths) {
      const config = new PasswordConfigBuilder().withLength(length).build();
      for (let i = 0; i < 10; i++) {
        const password = new PasswordGenerator(config).generate();
        expect(password.length).toEqual(length);
      }
    }
  });

  it('should return a error if the password length is less than 8 or greater than 16', () => {
    expect(() => new PasswordGenerator(new PasswordConfigBuilder().withLength(7).build())).toThrow();
    expect(() => new PasswordGenerator(new PasswordConfigBuilder().withLength(17).build())).toThrow();
  });
});
