import { inject, Pipe, type PipeTransform } from '@angular/core';
import { UserStore } from '@modules/authentication/infrastructure/user.store';
import { Message } from '@modules/chat/domain/message.model';

@Pipe({ name: 'isMine', standalone: true })
export class IsMinePipe implements PipeTransform {
  private readonly store = inject(UserStore);

  transform(message: Message): boolean {
    return message.isEmail(this.store.user()?.email as string);
  }
}
