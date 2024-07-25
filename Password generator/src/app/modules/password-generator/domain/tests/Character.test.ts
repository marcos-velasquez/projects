import { Character } from '../Character';

describe('Character', () => {
  it('should evaluate if a character is an alphabet', () => {
    ['a', 'x', 'z', 'A', 'X', 'Z'].forEach((value) => {
      expect(new Character(value).isAlphabet()).toBe(true);
    });
  });

  it('should evaluate if a character is an digit', () => {
    [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((value) => {
      expect(new Character(String(value)).isNumber()).toBe(true);
    });
  });

  it('should evaluate if a character is an symbol', () => {
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'].forEach((value) => {
      expect(new Character(String(value)).isSymbol()).toBe(true);
    });
  });

  it('should return a error if the character is not valid', () => {
    expect(() => new Character('ab')).toThrow();
    expect(() => new Character('12')).toThrow();
    expect(() => new Character('$$')).toThrow();
  });
});
