import { BaseRepository } from '../../domain/repository/base.repository';
import { DomainEvent } from '../../domain';
import { UseCase } from '../../application/usecase/base.usecase';

export abstract class UpdateUseCase<T> extends UseCase<T, void> {
  constructor(
    private readonly repository: BaseRepository<T>,
    private readonly UpdatedEvent: new (aggregate: T) => DomainEvent
  ) {
    super();
  }

  public async execute(aggregate: T): Promise<void> {
    await this.repository.update(aggregate);
    this.bus.publish(new this.UpdatedEvent(aggregate));
  }
}
