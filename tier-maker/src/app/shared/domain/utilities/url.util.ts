export class URL$ {
  public static from(files: File[]): string[] {
    return Array.from(files).map((file) => window.URL.createObjectURL(file));
  }
}
