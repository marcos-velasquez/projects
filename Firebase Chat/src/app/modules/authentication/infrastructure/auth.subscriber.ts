import { inject, Injectable } from '@angular/core';
import { BaseSubscriber } from '@shared/infrastructure';
import { UserLoggedIn, UserLoggedOut } from '../domain/auth.event';
import { UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class AuthSubscriber extends BaseSubscriber {
  private readonly store = inject(UserStore);

  protected initSubscriber(): void {
    this.bus.on(UserLoggedIn).subscribe((event) => this.store.set(event.user));
    this.bus.on(UserLoggedOut).subscribe(() => this.store.reset());
  }
}
