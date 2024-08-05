import { DomainEvent } from '@shared/domain';
import { Message } from './message.model';

export class MessageSent extends DomainEvent {
  constructor(public readonly message: Message) {
    super();
  }
}
