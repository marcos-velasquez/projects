import { inject, Injectable } from '@angular/core';
import * as E from '@sweet-monads/either';
import { UserStore } from '@modules/authentication/infrastructure/user.store';
import { User } from '@modules/authentication/domain/user.model';
import { SendMessageUseCase } from './SendMessage/SendMessage.usecase';
import { FirebaseChatService } from '../infrastructure/chat.service';

@Injectable({ providedIn: 'root' })
export class ChatFacade {
  private readonly userStore = inject(UserStore);

  constructor(private readonly chatService: FirebaseChatService) {}

  public send(message: string): Promise<E.Either<void, void>> {
    return new SendMessageUseCase(this.chatService).execute({ message, user: this.user });
  }

  private get user(): User {
    return this.userStore.user() as User;
  }
}
