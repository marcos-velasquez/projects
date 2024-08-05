import * as E from '@sweet-monads/either';
import { bus } from '@shared/domain/event/event-bus.model';
import { EitherBuilder } from '@shared/domain/either/either.builder';
import { User } from '@modules/authentication/domain/user.model';
import { AuthenticationService } from '../../domain/authentication.service';
import { UserLoggedIn } from '../../domain/auth.event';
import { LoginWithGoogleUseCase } from './LoginWithGoogle.usecase';

jest.mock('@shared/domain/event/event-bus.model', () => ({ bus: { publish: jest.fn() } }));

let useCase: LoginWithGoogleUseCase;
let mockAuthenticationService: jest.Mocked<AuthenticationService>;

describe('LoginWithGoogleUseCase', () => {
  beforeEach(() => {
    mockAuthenticationService = { loginWithGoogle: jest.fn(), logout: jest.fn() };
    useCase = new LoginWithGoogleUseCase(mockAuthenticationService);
  });

  it('should publish UserLoggedIn event and complete with success message on successful login', async () => {
    const mockUser = new User('email');
    mockAuthenticationService.loginWithGoogle.mockResolvedValue(E.right(mockUser));

    const result = await useCase.execute();

    expect(mockAuthenticationService.loginWithGoogle).toHaveBeenCalledTimes(1);
    expect(bus.publish).toHaveBeenCalledWith(new UserLoggedIn(mockUser));
    expect(result).toEqual(new EitherBuilder<void, void>().fromEitherToVoid(E.right(mockUser)).build());
  });

  it('should complete with error message on failed login', async () => {
    const mockError = new Error('Login failed');
    mockAuthenticationService.loginWithGoogle.mockResolvedValue(E.left(mockError));

    const result = await useCase.execute();

    expect(mockAuthenticationService.loginWithGoogle).toHaveBeenCalledTimes(1);
    expect(bus.publish).toHaveBeenCalledWith(expect.objectContaining({ error: mockError }));
    expect(result).toEqual(new EitherBuilder<void, void>().fromEitherToVoid(E.left(mockError)).build());
  });
});
