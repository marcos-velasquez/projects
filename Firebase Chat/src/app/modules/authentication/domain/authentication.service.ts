import * as E from '@sweet-monads/either';
import { User } from './user.model';

export abstract class AuthenticationService {
  public abstract loginWithGoogle(): Promise<E.Either<Error, User>>;
  public abstract logout(): Promise<E.Either<Error, void>>;
}
