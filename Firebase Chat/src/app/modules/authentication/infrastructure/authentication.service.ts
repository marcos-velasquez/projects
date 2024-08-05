import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, AuthError } from '@angular/fire/auth';
import * as E from '@sweet-monads/either';
import { bus } from '@shared/domain';
import { AuthenticationService } from '../domain/authentication.service';
import { UserLoggedIn, UserLoggedOut } from '../domain/auth.event';
import { User } from '../domain/user.model';

@Injectable({ providedIn: 'root' })
export class FirebaseAuthenticationService implements AuthenticationService {
  constructor(private readonly auth: Auth) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        bus.publish(new UserLoggedIn(new User(user.email as string)));
      } else {
        bus.publish(new UserLoggedOut());
      }
    });
  }

  public loginWithGoogle(): Promise<E.Either<Error, User>> {
    return new Promise((resolve) => {
      signInWithPopup(this.auth, new GoogleAuthProvider())
        .then((result) => resolve(E.right(new User(result.user.email as string))))
        .catch((error: AuthError) => resolve(E.left(error)));
    });
  }

  public logout(): Promise<E.Either<Error, void>> {
    return new Promise((resolve) => {
      signOut(this.auth)
        .then(() => resolve(E.right(undefined)))
        .catch((error: AuthError) => resolve(E.left(error)));
    });
  }
}
