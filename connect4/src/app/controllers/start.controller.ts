import { Game } from '@models/game.model';

export class StartController {
  constructor(private readonly game: Game) {}

  public control() {
    this.game.setInGame();
  }
}
