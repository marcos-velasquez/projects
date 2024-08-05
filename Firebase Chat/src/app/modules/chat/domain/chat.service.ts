import * as E from '@sweet-monads/either';
import { Observable } from 'rxjs';
import { Message } from './message.model';

export abstract class ChatService {
  public abstract send(message: Message): Promise<E.Either<Error, void>>;
  public abstract valueChanges(): Observable<E.Either<Error, Message[]>>;
}
