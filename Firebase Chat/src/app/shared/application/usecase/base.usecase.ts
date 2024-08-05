import { bus } from '../../domain/event/event-bus.model';
import { RequestFailedEvent, RequestSuccessfulEvent } from '../../domain';

export abstract class UseCase<T, K> {
  protected readonly bus = bus;

  abstract execute(arg: T): Promise<K>;

  protected complete(value: Error | string): void {
    if (value instanceof Error) {
      this.bus.publish(new RequestFailedEvent(value));
    } else {
      this.bus.publish(new RequestSuccessfulEvent(value));
    }
  }
}
