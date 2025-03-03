import { bus } from '@shared/domain';

export abstract class UseCase<T, K> {
  protected readonly bus = bus;

  abstract execute(arg: T): K;
}
