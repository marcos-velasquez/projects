import { Either } from '@sweet-monads/either';
import { PutTokenController, ResumeController, StartController } from '@controllers/index';
import { Game, IsState, IsTurn, IsBoard } from '@models/index';

export class Connect4 {
  private readonly game: Game;

  constructor() {
    this.game = new Game();
  }

  public get isState(): IsState {
    return this.game.isState;
  }

  public get isTurn(): IsTurn {
    return this.game.isTurn;
  }

  public isBoard(row: number, column: number): IsBoard {
    return this.game.isBoard(row, column);
  }

  public start(): void {
    new StartController(this.game).control();
  }

  public putToken(column: number): Either<Error, void> {
    return new PutTokenController(this.game).control(column);
  }

  public resume(): void {
    new ResumeController(this.game).control();
  }
}
