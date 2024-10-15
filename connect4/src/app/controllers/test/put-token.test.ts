import { left, right } from '@sweet-monads/either';
import { Game } from '@models/game.model';
import { PutTokenController } from '@controllers/put-token.controller';
import { Board } from '@models/board.model';
import { Random } from '@utils/random.util';

jest.mock('@utils/random.util', () => ({ Random: { number: jest.fn() } }));

beforeAll(() => {
  (Random.number as jest.Mock).mockReturnValue(1);
});

describe('PutTokenController', () => {
  it('should put token and set winner and game over', () => {
    const game = new Game();
    game.setInGame();
    const controller = new PutTokenController(game);
    controller.control(0);
    controller.control(1);
    controller.control(0);
    controller.control(1);
    controller.control(0);
    controller.control(1);
    controller.control(0);
    expect(game.isWinner()).toBe(true);
    expect(game.isState.gameOver()).toBe(true);
  });

  it('should return a left when column is full', () => {
    const game = new Game();
    game.setInGame();
    const controller = new PutTokenController(game);
    for (let i = 0; i < Board.ROWS; i++) {
      controller.control(0);
    }
    expect(controller.control(0)).toEqual(left(new Error('Column is full')));
  });

  it('should put token and change turn and return right', () => {
    const game = new Game();
    game.setInGame();
    const controller = new PutTokenController(game);
    expect(game.isTurn.yellow()).toBe(true);
    expect(controller.control(1)).toEqual(right(undefined));
    expect(game.isTurn.red()).toBe(true);
    expect(controller.control(0)).toEqual(right(undefined));
    expect(game.isTurn.yellow()).toBe(true);
    expect(controller.control(1)).toEqual(right(undefined));
    expect(game.isTurn.red()).toBe(true);
    expect(controller.control(0)).toEqual(right(undefined));
    expect(game.isTurn.yellow()).toBe(true);
  });
});
