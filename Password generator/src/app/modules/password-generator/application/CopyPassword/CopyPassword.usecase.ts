export class CopyPasswordUseCase {
  public execute(password: string): void {
    navigator.clipboard.writeText(password);
  }
}
