import * as E from '@sweet-monads/either';

export class EitherBuilder<T = undefined, K = undefined> {
  private left: T | null = null;
  private right: K | null = null;
  private error: Error | null = null;

  public setLeft(value: T): this {
    this.left = value;
    return this;
  }

  public setRight(value: K): this {
    this.right = value;
    return this;
  }

  public setError(error: Error): this {
    this.error = error;
    return this;
  }

  public fromLeftBoolean(value: unknown, left: T, right: K): this {
    if (value) {
      return this.setLeft(left);
    } else {
      return this.setRight(right);
    }
  }

  public fromRightBoolean(value: unknown, left: T, right: K): this {
    return this.fromLeftBoolean(!value, left, right);
  }

  public fromLeftCallback(value: unknown, left: () => T, right: () => K = () => undefined as K): this {
    if (value) {
      return this.setLeft(left());
    } else {
      return this.setRight(right());
    }
  }

  public fromRightCallback(value: unknown, right: () => K, left: () => T = () => undefined as T): this {
    return this.fromLeftCallback(!value, left, right);
  }

  public fromEitherToVoid(either: E.Either<unknown, unknown>): this {
    if (either.isRight()) {
      return this.setRight(undefined as K);
    } else {
      return this.setLeft(undefined as T);
    }
  }

  public build(): E.Either<T, K> {
    if (this.error !== null) {
      return E.left(this.error as T);
    }

    if (this.left !== null) {
      return E.left(this.left);
    }

    if (this.right !== null) {
      return E.right(this.right);
    }

    return E.right(undefined as K);
  }
}
