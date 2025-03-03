import { UseCase } from '@shared/application';
import { TierMaker } from '../../domain/tier-maker';
import { NodeService } from '../../domain/services/node.service';

export class DownloadUseCase extends UseCase<NodeService, void> {
  constructor(private readonly tierMaker: TierMaker) {
    super();
  }

  public execute(service: NodeService): void {
    service.to.image(this.tierMaker.get.title.value);
  }
}
