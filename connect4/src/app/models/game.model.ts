import { Either } from '@sweet-monads/either';
import { assert } from '@utils/assert.util';
import { Color } from './types/color.type';
import { State, IsState } from './state.model';
import { IsTurn, Turn } from './turn.model';
import { Board, IsBoard } from './board.model';
import { Player } from './player.model';

export class Game {
  private turn: Turn;
  private board: Board;
  private players: Player[];
  private state: State;

  constructor() {
    this.board = new Board();
    this.players = [new Player(this.board, Color.RED), new Player(this.board, Color.YELLOW)];
    this.turn = new Turn(this.players[0], this.players[1]);
    this.state = new State();
  }

  public putToken(column: number): Either<Error, void> {
    return this.turn.putToken(column);
  }

  public isWinner(): boolean {
    return this.turn.is.winner();
  }

  public isFull(column: number): boolean {
    return this.board.isFull(column);
  }

  public changeTurn() {
    this.turn.switch();
  }

  public isBoard(row: number, column: number): IsBoard {
    return this.board.is(row, column);
  }

  public get isTurn(): IsTurn {
    return this.turn.is;
  }

  public get isState(): IsState {
    return this.state.is;
  }

  public setInGame(): void {
    this.state.setInGame();
  }

  public setGameOver(): void {
    assert(this.isWinner(), 'Game is not over');
    this.state.setGameOver();
  }

  public restart() {
    this.board = new Board();
    this.players = [new Player(this.board, Color.RED), new Player(this.board, Color.YELLOW)];
    this.turn = new Turn(this.players[0], this.players[1]);
    this.state = new State();
  }
}
