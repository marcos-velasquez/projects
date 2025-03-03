export interface NodeService {
  get to(): { image(name: string): void };
}
