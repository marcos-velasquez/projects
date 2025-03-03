import { UseCase } from '../../shared/application';
import { TierMaker } from '../../domain/tier-maker';

export class InsertElementUseCase extends UseCase<string, void> {
  constructor(private readonly tierMaker: TierMaker) {
    super();
  }

  public execute(url: string): void {
    this.tierMaker.insert.element(url);
  }
}
