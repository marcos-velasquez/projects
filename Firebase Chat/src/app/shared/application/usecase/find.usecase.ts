import { Specification, TrueSpecification } from '../../domain/specification/specification.model';
import { BaseRepository } from '../../domain/repository/base.repository';
import { UseCase } from '../../application/usecase/base.usecase';

export abstract class FindUseCase<T> extends UseCase<Specification<T>, T[]> {
  constructor(private readonly repository: BaseRepository<T>) {
    super();
  }

  public async execute(specification: Specification<T> = new TrueSpecification()): Promise<T[]> {
    return this.repository.findAll(specification);
  }
}
