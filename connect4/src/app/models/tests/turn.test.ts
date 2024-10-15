import { Color } from '@models/types/color.type';
import { TurnBuilder } from './builders/turn.builder';
import { Board } from '@models/board.model';

describe('Turn', () => {
  it('should choice a random player', () => {
    expect(new TurnBuilder().withRedPlayer().build().isRed()).toBe(true);
  });

  it('should switch player', () => {
    const turn = new TurnBuilder().withYellowPlayer().build();
    turn.switch();
    expect(turn.isRed()).toBe(true);
    turn.switch();
    expect(turn.isYellow()).toBe(true);
  });

  it('should put token', () => {
    const board = new Board();
    const turn = new TurnBuilder().withRedPlayer().withBoard(board).build();
    turn.putToken(0);
    expect(board.is(Board.ROWS - 1, 0).color(Color.RED)).toBe(true);
    turn.switch();
    turn.putToken(0);
    expect(board.is(Board.ROWS - 2, 0).color(Color.YELLOW)).toBe(true);
  });

  it('should be a winner', () => {
    const board = new Board();
    const turn = new TurnBuilder().withRedPlayer().withBoard(board).build();
    turn.putToken(0);
    turn.putToken(0);
    turn.putToken(0);
    turn.putToken(0);
    expect(turn.isRed()).toBe(true);
    expect(turn.isWinner()).toBe(true);
  });

  it('should not be a winner', () => {
    const board = new Board();
    const turn = new TurnBuilder().withYellowPlayer().withBoard(board).build();
    turn.putToken(0);
    turn.putToken(0);
    turn.putToken(0);
    expect(turn.isWinner()).toBe(false);
  });
});

afterAll(() => {
  jest.restoreAllMocks();
});
