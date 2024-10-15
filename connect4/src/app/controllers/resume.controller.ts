import { Game } from '@models/game.model';

export class ResumeController {
  constructor(private readonly game: Game) {}

  public control() {
    this.game.restart();
    this.game.setInGame();
  }
}
