import { Board } from '../board.model';
import { Color } from '../types/color.type';

describe('Board', () => {
  it('should return is full false', () => {
    const board = new Board();
    expect(board.isFull(0)).toBe(false);
    expect(board.isFull(1)).toBe(false);
    expect(board.isFull(2)).toBe(false);
    expect(board.isFull(3)).toBe(false);
    expect(board.isFull(4)).toBe(false);
    expect(board.isFull(5)).toBe(false);
  });

  it('should return is full true', () => {
    const board = new Board();
    for (let i = 0; i < Board.ROWS; i++) {
      board.putToken(0, Color.RED);
      board.putToken(1, Color.YELLOW);
      board.putToken(2, Color.RED);
      board.putToken(3, Color.YELLOW);
      board.putToken(4, Color.RED);
      board.putToken(5, Color.YELLOW);
    }
    expect(board.isFull(0)).toBe(true);
    expect(board.isFull(1)).toBe(true);
    expect(board.isFull(2)).toBe(true);
    expect(board.isFull(3)).toBe(true);
    expect(board.isFull(4)).toBe(true);
  });

  it('should return coordinate is color true', () => {
    const board = new Board();
    for (let i = 0; i < Board.ROWS; i++) {
      board.putToken(0, Color.RED);
      board.putToken(1, Color.YELLOW);
      board.putToken(2, Color.RED);
      board.putToken(3, Color.YELLOW);
      board.putToken(4, Color.RED);
      board.putToken(5, Color.YELLOW);
    }
    expect(board.is(0, 0).color(Color.RED)).toBe(true);
    expect(board.is(1, 1).color(Color.YELLOW)).toBe(true);
    expect(board.is(2, 2).color(Color.RED)).toBe(true);
    expect(board.is(3, 3).color(Color.YELLOW)).toBe(true);
    expect(board.is(4, 4).color(Color.RED)).toBe(true);
    expect(board.is(5, 5).color(Color.YELLOW)).toBe(true);
  });

  it('should return coordinate is color false', () => {
    const board = new Board();
    for (let i = 0; i < Board.ROWS; i++) {
      board.putToken(0, Color.RED);
      board.putToken(1, Color.YELLOW);
      board.putToken(2, Color.RED);
      board.putToken(3, Color.YELLOW);
      board.putToken(4, Color.RED);
      board.putToken(5, Color.YELLOW);
    }
    expect(board.is(0, 0).color(Color.YELLOW)).toBe(false);
    expect(board.is(1, 1).color(Color.RED)).toBe(false);
    expect(board.is(2, 2).color(Color.YELLOW)).toBe(false);
    expect(board.is(3, 3).color(Color.RED)).toBe(false);
    expect(board.is(4, 4).color(Color.YELLOW)).toBe(false);
    expect(board.is(5, 5).color(Color.RED)).toBe(false);
  });

  it('should put token', () => {
    const board = new Board();
    board.putToken(0, Color.RED);
    board.putToken(0, Color.RED);
    board.putToken(1, Color.YELLOW);
    board.putToken(1, Color.RED);
    board.putToken(1, Color.YELLOW);
    board.putToken(5, Color.YELLOW);
    expect(board.is(Board.ROWS - 1, 0).color(Color.RED)).toBe(true);
    expect(board.is(Board.ROWS - 2, 0).color(Color.RED)).toBe(true);
    expect(board.is(Board.ROWS - 1, 1).color(Color.YELLOW)).toBe(true);
    expect(board.is(Board.ROWS - 2, 1).color(Color.RED)).toBe(true);
    expect(board.is(Board.ROWS - 3, 1).color(Color.YELLOW)).toBe(true);
    expect(board.is(Board.ROWS - 1, 5).color(Color.YELLOW)).toBe(true);
  });

  it('should return a error when coordinate is invalid', () => {
    const board = new Board();
    expect(() => board.is(Board.ROWS, 0)).toThrow();
    expect(() => board.is(0, Board.COLUMNS)).toThrow();
    expect(() => board.is(0, -1)).toThrow();
    expect(() => board.is(-1, 0)).toThrow();
  });
});
