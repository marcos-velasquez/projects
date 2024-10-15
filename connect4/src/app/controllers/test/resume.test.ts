import { Game } from '@models/game.model';
import { ResumeController } from '@controllers/resume.controller';
import { Board } from '@models/board.model';

describe('ResumeController', () => {
  it('should restart the game and set in game', () => {
    const game = new Game();
    game.setInGame();
    for (let i = 0; i < Board.ROWS; i++) {
      game.putToken(0);
      game.putToken(Board.ROWS - 1);
    }
    game.setGameOver();
    new ResumeController(game).control();
    expect(game.isState.inGame()).toBe(true);
    expect(game.isFull(0)).toBe(false);
    expect(game.isFull(Board.ROWS - 1)).toBe(false);
  });
});
