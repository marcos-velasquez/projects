import { Board } from './board.model';
import { Color } from './types/color.type';

export class Goal {
  constructor(private readonly board: Board, private readonly color: Color) {}

  public isWinner(): boolean {
    return this.checkHorizontal() || this.checkVertical() || this.checkDiagonal() || this.checkDiagonalReverse();
  }

  private checkVertical(): boolean {
    for (let column = 0; column < Board.COLUMNS; column++) {
      for (let row = 0; row < Board.ROWS - 3; row++) {
        const isColor = this.board.is(row, column).color(this.color);
        const isNextColor = this.board.is(row + 1, column).color(this.color);
        const isNextNextColor = this.board.is(row + 2, column).color(this.color);
        const isNextNextNextColor = this.board.is(row + 3, column).color(this.color);
        if (isColor && isNextColor && isNextNextColor && isNextNextNextColor) {
          return true;
        }
      }
    }
    return false;
  }

  private checkHorizontal(): boolean {
    for (let row = 0; row < Board.ROWS; row++) {
      for (let column = 0; column < Board.COLUMNS - 3; column++) {
        const isColor = this.board.is(row, column).color(this.color);
        const isNextColor = this.board.is(row, column + 1).color(this.color);
        const isNextNextColor = this.board.is(row, column + 2).color(this.color);
        const isNextNextNextColor = this.board.is(row, column + 3).color(this.color);
        if (isColor && isNextColor && isNextNextColor && isNextNextNextColor) {
          return true;
        }
      }
    }
    return false;
  }

  private checkDiagonal(): boolean {
    for (let row = 0; row < Board.ROWS - 3; row++) {
      for (let column = 0; column < Board.COLUMNS - 3; column++) {
        const isColor = this.board.is(row, column).color(this.color);
        const isNextColor = this.board.is(row + 1, column + 1).color(this.color);
        const isNextNextColor = this.board.is(row + 2, column + 2).color(this.color);
        const isNextNextNextColor = this.board.is(row + 3, column + 3).color(this.color);
        if (isColor && isNextColor && isNextNextColor && isNextNextNextColor) {
          return true;
        }
      }
    }
    return false;
  }

  public checkDiagonalReverse(): boolean {
    for (let row = 0; row < Board.ROWS - 3; row++) {
      for (let column = 3; column < Board.COLUMNS; column++) {
        const isColor = this.board.is(row, column).color(this.color);
        const isNextColor = this.board.is(row + 1, column - 1).color(this.color);
        const isNextNextColor = this.board.is(row + 2, column - 2).color(this.color);
        const isNextNextNextColor = this.board.is(row + 3, column - 3).color(this.color);
        if (isColor && isNextColor && isNextNextColor && isNextNextNextColor) {
          return true;
        }
      }
    }
    return false;
  }
}
