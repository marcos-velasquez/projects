import { User } from '@modules/authentication/domain/user.model';

export class Message {
  private constructor(public readonly value: string, public user: User, public readonly createdAt: Date) {}

  public values() {
    return {
      value: this.value,
      user: this.user.values(),
      createdAt: this.createdAt,
    };
  }

  public isEmail(email: string): boolean {
    return this.user.email === email;
  }

  public static restore(state: Omit<Message, 'values' | 'isEmail'>): Message {
    return new Message(state.value, state.user, state.createdAt);
  }

  public static create(value: string, user: User): Message {
    return Message.restore({ value, user, createdAt: new Date() });
  }
}
