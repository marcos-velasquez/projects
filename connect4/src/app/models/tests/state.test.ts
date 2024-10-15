import { State } from '../state.model';
describe('State', () => {
  it('should be in initial state', () => {
    const state = new State();
    expect(state.isInitial()).toBe(true);
  });

  it('should be in game state', () => {
    const state = new State();
    state.setInGame();
    expect(state.isInGame()).toBe(true);
  });

  it('should be game over state', () => {
    const state = new State();
    state.setInGame();
    state.setGameOver();
    expect(state.isGameOver()).toBe(true);
  });

  it('should throw error if already in game', () => {
    const state = new State();
    state.setInGame();
    expect(() => state.setInGame()).toThrow();
  });

  it('should throw error if set game over when not in game', () => {
    const state = new State();
    expect(() => state.setGameOver()).toThrow();
  });
});
