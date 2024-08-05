import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthSubscriber } from '@modules/authentication/infrastructure/auth.subscriber';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'firebase-chat';

  constructor() {
    inject(AuthSubscriber).init();
  }
}
