export abstract class BaseMapper<T, K> {
  public fromDomain(domain: T): K | T {
    return domain;
  }

  public toDomain(data: K): T | K {
    return data;
  }
}
