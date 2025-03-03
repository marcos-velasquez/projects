import { TierMaker } from '../domain/tier-maker';
import { NodeService } from '../infrastructure/node.service';
import { DownloadUseCase } from './Download/download.usecase';
import { InsertElementUseCase } from './InsertElement/insert-element.usecase';

export class TierMakerFacade {
  private tierMaker = new TierMaker();

  public get get() {
    return this.tierMaker.get;
  }

  public insertElement(url: string): void {
    new InsertElementUseCase(this.tierMaker).execute(url);
  }

  public download(element: HTMLElement): void {
    new DownloadUseCase(this.tierMaker).execute(new NodeService(element));
  }

  public reset(): void {
    this.tierMaker = new TierMaker();
  }
}

export const tierMakerFacade = new TierMakerFacade();
