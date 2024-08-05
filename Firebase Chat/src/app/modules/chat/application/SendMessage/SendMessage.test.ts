import * as E from '@sweet-monads/either';
import { bus } from '@shared/domain/event/event-bus.model';
import { EitherBuilder } from '@shared/domain';
import { Message } from '@modules/chat/domain/message.model';
import { User } from '@modules/authentication/domain/user.model';
import { ChatService } from '../../domain/chat.service';
import { MessageSent } from '../../domain/chat.event';
import { SendMessageUseCase } from './SendMessage.usecase';

jest.mock('@shared/domain/event/event-bus.model', () => ({ bus: { publish: jest.fn() } }));

let useCase: SendMessageUseCase;
let mockChatService: jest.Mocked<ChatService>;
const MockDate = Date;

describe('SendMessageUseCase', () => {
  beforeEach(() => {
    jest.spyOn(global, 'Date').mockImplementation(() => new MockDate('2024-08-02T01:39:32.208Z'));
    mockChatService = { send: jest.fn(), valueChanges: jest.fn() };
    useCase = new SendMessageUseCase(mockChatService);
  });

  it('should send a message to the chat', async () => {
    const input = { message: 'Test message', user: new User('test@test.com') };
    mockChatService.send.mockResolvedValue(E.right(undefined));

    const result = await useCase.execute(input);

    const message = Message.create(input.message, input.user);
    expect(mockChatService.send).toHaveBeenCalledWith(message);
    expect(bus.publish).toHaveBeenCalledWith(new MessageSent(message));
    expect(result).toEqual(new EitherBuilder<void, void>().fromEitherToVoid(E.right(undefined)).build());
  });

  it('should complete with error message on failed send', async () => {
    const input = { message: 'Test message', user: new User('test@test.com') };
    const mockError = new Error('Failed to send message');
    mockChatService.send.mockResolvedValue(E.left(mockError));

    const result = await useCase.execute(input);

    expect(mockChatService.send).toHaveBeenCalledWith(Message.create(input.message, input.user));
    expect(bus.publish).toHaveBeenCalledWith(expect.objectContaining({ error: mockError }));
    expect(result).toEqual(new EitherBuilder<void, void>().fromEitherToVoid(E.left(mockError)).build());
  });

  it.each([
    { message: '', user: new User('test@test.com') },
    { message: ' ', user: new User('test@test.com') },
  ])('should throw a Error if the message is empty', async (input) => {
    await expect(() => useCase.execute(input)).rejects.toThrow('Message cannot be empty');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
