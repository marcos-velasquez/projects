import { Specification } from '../../domain/specification/specification.model';

export interface BaseRepository<T> {
  findAll(specification: Specification<T>): Promise<T[]>;
  save(aggregate: T): Promise<void>;
  update(aggregate: T): Promise<void>;
  remove(aggregate: T): Promise<void>;
}
