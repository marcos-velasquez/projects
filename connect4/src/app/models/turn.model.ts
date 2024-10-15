import { Either } from '@sweet-monads/either';
import { Random } from '../utils/random.util';
import { Player } from './player.model';

export class Turn {
  private take: Player;

  constructor(private readonly player: Player, private readonly opponent: Player) {
    this.take = [player, opponent][Random.number(0, 1)];
  }

  public isRed(): boolean {
    return this.take.isRed();
  }

  public isYellow(): boolean {
    return this.take.isYellow();
  }

  public switch(): void {
    this.take = this.take === this.player ? this.opponent : this.player;
  }

  public putToken(column: number): Either<Error, void> {
    return this.take.putToken(column);
  }

  public isWinner(): boolean {
    return this.take.isWinner();
  }

  public get is(): IsTurn {
    return { red: () => this.isRed(), yellow: () => this.isYellow(), winner: () => this.isWinner() };
  }
}

export type IsTurn = { red: () => boolean; yellow: () => boolean; winner: () => boolean };
