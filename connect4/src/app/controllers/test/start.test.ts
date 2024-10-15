import { Game } from '@models/game.model';
import { StartController } from '@controllers/start.controller';
describe('StartController', () => {
  it('should set in game', () => {
    const game = new Game();
    new StartController(game).control();
    expect(game.isState.inGame()).toBe(true);
  });
});
