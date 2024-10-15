import { assert } from '@utils/assert.util';
import { Color } from './types/color.type';

export class Board {
  static readonly ROWS = 6;
  static readonly COLUMNS = 7;
  private readonly values: Array<Color>[];

  constructor() {
    this.values = new Array(Board.ROWS).fill(Color.NONE).map(() => new Array(Board.COLUMNS).fill(Color.NONE));
  }

  public isFull(column: number): boolean {
    return this.values[0][column] !== Color.NONE;
  }

  private isAvailable(column: number): boolean {
    return !this.isFull(column);
  }

  public is(row: number, column: number): IsBoard {
    assert(row < Board.ROWS && column < Board.COLUMNS, 'Row or column out of bounds');
    assert(row >= 0 && column >= 0, 'Row or column out of bounds');
    return {
      red: () => this.values[row][column] === Color.RED,
      yellow: () => this.values[row][column] === Color.YELLOW,
      none: () => this.values[row][column] === Color.NONE,
      color: (color: Color) => this.values[row][column] === color,
    };
  }

  public putToken(column: number, color: Color) {
    assert(this.isAvailable(column), 'Column is full');
    assert(column < Board.COLUMNS, 'Column is out of bounds');
    assert(column >= 0, 'Column is out of bounds');
    for (let row = Board.ROWS - 1; row >= 0; row--) {
      if (this.values[row][column] === Color.NONE) {
        this.values[row][column] = color;
        break;
      }
    }
  }
}

export type IsBoard = {
  red: () => boolean;
  yellow: () => boolean;
  none: () => boolean;
  color: (color: Color) => boolean;
};
