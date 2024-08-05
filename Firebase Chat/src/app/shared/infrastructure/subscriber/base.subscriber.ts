import { signal } from '@angular/core';
import { bus } from '../../domain';

export abstract class BaseSubscriber {
  protected readonly isInitialized = signal(false);
  protected readonly bus = bus;

  public init(): void {
    if (this.isInitialized()) return;
    this.initSubscriber();
    this.isInitialized.set(true);
  }

  protected abstract initSubscriber(): void;
}
