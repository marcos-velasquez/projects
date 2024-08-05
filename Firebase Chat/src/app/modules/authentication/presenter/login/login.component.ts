import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleIconComponent } from '@shared/presenter/icons/google-icon/google-icon.component';
import { AuthenticationFacade } from '../../application';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, GoogleIconComponent],
  template: `
    <div class="hero min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Firebase Chat</h1>
          <p class="py-6">Chat with your friends in real time.</p>
          <button (click)="loginWithGoogle()" class="btn btn-primary">
            <app-google-icon classes="w-6 h-6"></app-google-icon>
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  `,
})
export class LoginComponent {
  constructor(private readonly authenticationFacade: AuthenticationFacade) {}

  public loginWithGoogle() {
    this.authenticationFacade.loginWithGoogle().then((result) => result.mapRight(() => window.location.reload()));
  }
}
