import { inject, Injectable } from '@angular/core';
import { BaseSubscriber } from '@shared/infrastructure';
import { RequestFailedEvent } from '@shared/domain';
import { ChatStore } from './chat.store';
import { FirebaseChatService } from './chat.service';

@Injectable({ providedIn: 'root' })
export class ChatSubscriber extends BaseSubscriber {
  private readonly store = inject(ChatStore);
  private readonly chatService = inject(FirebaseChatService);

  protected initSubscriber(): void {
    this.chatService.valueChanges().subscribe((result) => {
      result.mapLeft((error) => this.bus.publish(new RequestFailedEvent(error)));
      result.mapRight((messages) => this.store.set(messages));
    });
  }
}
