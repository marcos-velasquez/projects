import { Board } from '@models/board.model';
import { Color } from '@models/types/color.type';
import { Player } from '@models/player.model';

let board: Board;

beforeEach(() => {
  board = new Board();
});

describe('Player', () => {
  it('should return color', () => {
    expect(new Player(board, Color.RED).isRed()).toBe(true);
    expect(new Player(board, Color.YELLOW).isYellow()).toBe(true);
  });

  it('should return is winner false', () => {
    expect(new Player(board, Color.RED).isWinner()).toBe(false);
    expect(new Player(board, Color.YELLOW).isWinner()).toBe(false);
  });

  it('should return is winner true', () => {
    const player = new Player(board, Color.RED);
    player.putToken(0);
    player.putToken(0);
    player.putToken(0);
    player.putToken(0);
    expect(player.isWinner()).toBe(true);
    expect(player.isRed()).toBe(true);
  });

  it('should put token', () => {
    const board = new Board();
    const player = new Player(board, Color.RED);
    player.putToken(0);
    expect(board.is(Board.ROWS - 1, 0).color(Color.RED)).toBe(true);
    player.putToken(0);
    expect(board.is(Board.ROWS - 2, 0).color(Color.RED)).toBe(true);
    player.putToken(1);
    expect(board.is(Board.ROWS - 1, 1).color(Color.RED)).toBe(true);
    player.putToken(1);
    expect(board.is(Board.ROWS - 2, 1).color(Color.RED)).toBe(true);
  });
});
