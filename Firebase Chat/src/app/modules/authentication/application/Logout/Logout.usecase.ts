import * as E from '@sweet-monads/either';
import { UseCase } from '@shared/application';
import { EitherBuilder } from '@shared/domain';
import { UserLoggedOut } from '@modules/authentication/domain/auth.event';
import { AuthenticationService } from '../../domain/authentication.service';

export class LogoutUseCase extends UseCase<void, E.Either<void, void>> {
  constructor(private readonly authenticationService: AuthenticationService) {
    super();
  }

  public async execute(): Promise<E.Either<void, void>> {
    await this.authenticationService.logout();
    this.bus.publish(new UserLoggedOut());
    return new EitherBuilder<void, void>().fromEitherToVoid(E.right(undefined)).build();
  }
}
