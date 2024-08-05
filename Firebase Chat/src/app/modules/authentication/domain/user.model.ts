export class User {
  constructor(public readonly email: string) {}

  public values() {
    return {
      email: this.email,
    };
  }
}
