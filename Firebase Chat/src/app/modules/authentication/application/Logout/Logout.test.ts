import * as E from '@sweet-monads/either';
import { bus } from '@shared/domain/event/event-bus.model';
import { EitherBuilder } from '@shared/domain/either/either.builder';
import { AuthenticationService } from '../../domain/authentication.service';
import { UserLoggedOut } from '../../../authentication/domain/auth.event';
import { LogoutUseCase } from './Logout.usecase';

jest.mock('@shared/domain/event/event-bus.model', () => ({ bus: { publish: jest.fn() } }));

let useCase: LogoutUseCase;
let mockAuthenticationService: jest.Mocked<AuthenticationService>;

describe('LogoutUseCase', () => {
  beforeEach(() => {
    mockAuthenticationService = { loginWithGoogle: jest.fn(), logout: jest.fn() };
    useCase = new LogoutUseCase(mockAuthenticationService);
  });

  it('should complete with success message on successful logout', async () => {
    mockAuthenticationService.logout.mockResolvedValue(E.right(undefined));
    const result = await useCase.execute();
    expect(mockAuthenticationService.logout).toHaveBeenCalledTimes(1);
    expect(bus.publish).toHaveBeenCalledWith(new UserLoggedOut());
    expect(result).toEqual(new EitherBuilder<void, void>().fromEitherToVoid(E.right(undefined)).build());
  });
});
