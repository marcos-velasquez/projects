import { Either, left, right } from '@sweet-monads/either';
import { Game } from '@models/game.model';
import { ColumnFullError } from '@app/models/errors/column-full.error';

export class PutTokenController {
  constructor(private readonly game: Game) {}

  public control(column: number): Either<Error, void> {
    if (this.game.isFull(column)) return left(new ColumnFullError());

    this.game.putToken(column);

    if (this.game.isWinner()) {
      this.game.setGameOver();
    } else {
      this.game.changeTurn();
    }

    return right(undefined);
  }
}
