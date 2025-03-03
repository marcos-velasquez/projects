import { EitherBuilder } from '@shared/domain';

export class Element {
  constructor(public readonly url: string) {}

  public get is() {
    return {
      equal: (url: string) => this.url === url,
    };
  }

  public static validate(files: File[]) {
    return new EitherBuilder().fromRightBoolean(files.every(({ type }) => type.includes('image'))).build();
  }
}
