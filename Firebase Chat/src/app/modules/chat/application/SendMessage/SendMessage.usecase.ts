import * as E from '@sweet-monads/either';
import { UseCase } from '@shared/application';
import { assert } from '@shared/domain/utils/assert.util';
import { EitherBuilder } from '@shared/domain';
import { ChatService } from '../../../chat/domain/chat.service';
import { MessageSent } from '../../../chat/domain/chat.event';
import { Message } from '../../domain/message.model';
import { SendMessageInput } from './SendMessage.input';

export class SendMessageUseCase extends UseCase<SendMessageInput, E.Either<void, void>> {
  constructor(private readonly chatService: ChatService) {
    super();
  }

  public async execute(input: SendMessageInput): Promise<E.Either<void, void>> {
    assert(input.message.trim(), 'Message cannot be empty');
    const message = Message.create(input.message, input.user);
    const result = await this.chatService.send(message);
    result.mapLeft((error) => this.complete(error));
    result.mapRight(() => {
      this.bus.publish(new MessageSent(message));
      this.complete('Message sent');
    });
    return new EitherBuilder<void, void>().fromEitherToVoid(result).build();
  }
}
