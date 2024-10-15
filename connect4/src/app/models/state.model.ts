import { assert } from '@utils/assert.util';

export class State {
  private value: 'initial' | 'inGame' | 'gameOver';

  constructor() {
    this.value = 'initial';
  }

  public setInGame(): void {
    assert(!this.isInGame(), 'Already in game');
    this.value = 'inGame';
  }

  public setGameOver(): void {
    assert(this.isInGame(), 'Not in game');
    this.value = 'gameOver';
  }

  public isInitial(): boolean {
    return this.value === 'initial';
  }

  public isGameOver(): boolean {
    return this.value === 'gameOver';
  }

  public isInGame(): boolean {
    return this.value === 'inGame';
  }

  public get is(): IsState {
    return { initial: () => this.isInitial(), inGame: () => this.isInGame(), gameOver: () => this.isGameOver() };
  }
}

export type IsState = { initial: () => boolean; inGame: () => boolean; gameOver: () => boolean };
