export class ColumnFullError extends Error {
  constructor() {
    super('Column is full');
  }
}
