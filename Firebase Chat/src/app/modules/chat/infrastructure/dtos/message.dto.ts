import { Timestamp } from '@angular/fire/firestore';
import { User } from '@modules/authentication/domain/user.model';
import { Message } from '@modules/chat/domain/message.model';

export class MessageDto {
  private constructor(
    public readonly value: string,
    public readonly user: { email: string },
    public readonly createdAt: Timestamp
  ) {}

  public toDomain(): Message {
    return Message.restore({
      value: this.value,
      user: new User(this.user.email),
      createdAt: this.createdAt.toDate(),
    });
  }

  public static create(message: MessageDto) {
    return new MessageDto(message.value, message.user, message.createdAt);
  }
}
