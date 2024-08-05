import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';
import * as E from '@sweet-monads/either';
import { catchError, map, Observable, of } from 'rxjs';
import { Message } from '../domain/message.model';
import { ChatService } from '../domain/chat.service';
import { MessageDto } from './dtos/message.dto';

@Injectable({ providedIn: 'root' })
export class FirebaseChatService implements ChatService {
  constructor(private readonly firestore: Firestore) {}

  public valueChanges(): Observable<E.Either<Error, Message[]>> {
    const q = query(collection(this.firestore, 'chat'), orderBy('createdAt', 'asc'));
    return collectionData(q).pipe(
      map((messages) => E.right(messages.map((m) => MessageDto.create(m as MessageDto).toDomain()))),
      catchError((error) => of(E.left(error)))
    );
  }

  public send(message: Message): Promise<E.Either<Error, void>> {
    return new Promise((resolve) => {
      const ref = collection(this.firestore, 'chat');
      addDoc(ref, { ...message.values() })
        .then(() => resolve(E.right(undefined)))
        .catch((error) => resolve(E.left(error)));
    });
  }
}
