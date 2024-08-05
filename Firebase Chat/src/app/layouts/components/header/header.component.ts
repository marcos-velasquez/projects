import { Component, inject } from '@angular/core';
import { AuthenticationFacade } from '@modules/authentication/application';
import { UserStore } from '@modules/authentication/infrastructure/user.store';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="flex items-center gap-3 p-3 lg:p-4">
      <button (click)="logout()" class="btn btn-circle btn-sm btn-error tooltip tooltip-bottom" data-tip="Sign out">
        <span class="icon-[heroicons--arrow-right-on-rectangle] text-2xl"></span>
      </button>

      <span class="font-semibold">{{ userStore.user()?.email }}</span>
    </header>
  `,
})
export class HeaderComponent {
  public readonly userStore = inject(UserStore);

  constructor(public readonly authenticationFacade: AuthenticationFacade) {}

  public logout(): void {
    this.authenticationFacade.logout().then((result) => {
      result.mapRight(() => window.location.reload());
    });
  }
}
