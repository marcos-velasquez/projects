import { Injectable } from '@angular/core';
import * as E from '@sweet-monads/either';
import { LoginWithGoogleUseCase } from './LoginWithGoogle/LoginWithGoogle.usecase';
import { LogoutUseCase } from './Logout/Logout.usecase';
import { FirebaseAuthenticationService } from '../infrastructure/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationFacade {
  constructor(private readonly authenticationService: FirebaseAuthenticationService) {}

  public loginWithGoogle(): Promise<E.Either<void, void>> {
    return new LoginWithGoogleUseCase(this.authenticationService).execute();
  }

  public logout(): Promise<E.Either<void, void>> {
    return new LogoutUseCase(this.authenticationService).execute();
  }
}
