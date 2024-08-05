import * as E from '@sweet-monads/either';
import { EitherBuilder } from '@shared/domain';
import { UseCase } from '@shared/application';
import { AuthenticationService } from '../../domain/authentication.service';
import { UserLoggedIn } from '../../domain/auth.event';

export class LoginWithGoogleUseCase extends UseCase<void, E.Either<void, void>> {
  constructor(private readonly authenticationService: AuthenticationService) {
    super();
  }

  public async execute(): Promise<E.Either<void, void>> {
    const result = await this.authenticationService.loginWithGoogle();
    result.mapLeft((error) => this.complete(error));
    result.mapRight((user) => {
      this.bus.publish(new UserLoggedIn(user));
      this.complete('Login successful');
    });
    return new EitherBuilder<void, void>().fromEitherToVoid(result).build();
  }
}
