import { Board } from '@models/board.model';
import { Color } from '@models/types/color.type';
import { Goal } from '@models/goal.model';

describe('Goal', () => {
  it('should return is winner false', () => {
    const board = new Board();
    expect(new Goal(board, Color.RED).isWinner()).toBe(false);
    expect(new Goal(board, Color.YELLOW).isWinner()).toBe(false);
  });

  it.each([{ columns: [0, 0, 0, 0] }, { columns: [Board.ROWS - 1, Board.ROWS - 1, Board.ROWS - 1, Board.ROWS - 1] }])(
    'should return is winner when put token vertically',
    ({ columns }) => {
      const board = new Board();
      const goal = new Goal(board, Color.RED);
      columns.forEach((column) => board.putToken(column, Color.RED));
      expect(goal.isWinner()).toBe(true);
    }
  );

  it.each([
    { rows: [0, 1, 2, 3] },
    { rows: [Board.COLUMNS - 1, Board.COLUMNS - 2, Board.COLUMNS - 3, Board.COLUMNS - 4] },
  ])('should return is winner when put token horizontally', ({ rows }) => {
    const board = new Board();
    const goal = new Goal(board, Color.RED);
    rows.forEach((column) => board.putToken(column, Color.RED));
    expect(goal.isWinner()).toBe(true);
  });

  it('should return is winner when put token diagonally', () => {
    const board = new Board();
    const goal = new Goal(board, Color.RED);
    board.putToken(0, Color.RED);
    board.putToken(1, Color.YELLOW);
    board.putToken(1, Color.RED);
    board.putToken(2, Color.YELLOW);
    board.putToken(2, Color.YELLOW);
    board.putToken(2, Color.RED);
    board.putToken(3, Color.YELLOW);
    board.putToken(3, Color.YELLOW);
    board.putToken(3, Color.YELLOW);
    board.putToken(3, Color.RED);
    expect(goal.isWinner()).toBe(true);
  });

  it('should return is winner when put token diagonally reverse', () => {
    const board = new Board();
    const goal = new Goal(board, Color.RED);
    board.putToken(Board.ROWS - 1, Color.RED);
    board.putToken(Board.ROWS - 2, Color.YELLOW);
    board.putToken(Board.ROWS - 2, Color.RED);
    board.putToken(Board.ROWS - 3, Color.YELLOW);
    board.putToken(Board.ROWS - 3, Color.YELLOW);
    board.putToken(Board.ROWS - 3, Color.RED);
    board.putToken(Board.ROWS - 4, Color.YELLOW);
    board.putToken(Board.ROWS - 4, Color.YELLOW);
    board.putToken(Board.ROWS - 4, Color.YELLOW);
    board.putToken(Board.ROWS - 4, Color.RED);
    expect(goal.isWinner()).toBe(true);
  });
});
