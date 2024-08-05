export const assert = (condition: boolean | string, message: string) => {
  console.log('condition', condition);
  console.log('condition', !condition);
  if (!condition) {
    throw new Error(message);
  }
};
