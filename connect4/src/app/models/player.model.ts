import { Either, left, right } from '@sweet-monads/either';
import { ColumnFullError } from './errors/column-full.error';
import { Board } from './board.model';
import { Color } from './types/color.type';
import { Goal } from './goal.model';

export class Player {
  constructor(private readonly board: Board, private readonly color: Color) {}

  public putToken(column: number): Either<Error, void> {
    if (this.board.isFull(column)) {
      return left(new ColumnFullError());
    } else {
      return right(this.board.putToken(column, this.color));
    }
  }

  public isWinner(): boolean {
    return new Goal(this.board, this.color).isWinner();
  }

  public isRed(): boolean {
    return this.color === Color.RED;
  }

  public isYellow(): boolean {
    return this.color === Color.YELLOW;
  }

  public is(): IsPlayer {
    return { red: () => this.isRed(), yellow: () => this.isYellow(), isWinner: () => this.isWinner() };
  }
}

export type IsPlayer = { red: () => boolean; yellow: () => boolean; isWinner: () => boolean };
