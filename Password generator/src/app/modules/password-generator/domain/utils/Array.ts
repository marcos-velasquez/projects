export class ArrayUtil {
  public static shuffle<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  public static fillFrom(origin: number) {
    return {
      to: (target: number) => {
        return Array.from({ length: target - origin + 1 }, (_, i) => i + origin);
      },
    };
  }
}
