import { DomainEvent } from '../../domain';
import { BaseRepository } from '../../domain/repository/base.repository';
import { UseCase } from '../../application/usecase/base.usecase';

export abstract class SaveUseCase<T, K> extends UseCase<T, void> {
  constructor(
    private readonly repository: BaseRepository<K>,
    private readonly SavedEvent: new (aggregate: K) => DomainEvent
  ) {
    super();
  }

  public async execute(input: T): Promise<void> {
    const aggregate = this.create(input);
    await this.repository.save(aggregate);
    this.bus.publish(new this.SavedEvent(aggregate));
  }

  protected abstract create(input: T): K;
}
