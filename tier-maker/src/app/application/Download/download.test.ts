import { DownloadUseCase } from './download.usecase';
import { TierMaker } from '../../domain/tier-maker';
import { NodeService } from '../../domain/services/node.service';

describe('DownloadUseCase', () => {
  let downloadUseCase: DownloadUseCase;
  let tierMaker: TierMaker;
  let nodeService: NodeService;

  beforeEach(() => {
    tierMaker = new TierMaker();
    nodeService = { to: { image: jest.fn() } };
    downloadUseCase = new DownloadUseCase(tierMaker);
  });

  it('should call service.to.image with the correct title value', () => {
    const titleValue = 'Test Title';
    tierMaker.change.title(titleValue);

    downloadUseCase.execute(nodeService);

    expect(nodeService.to.image).toHaveBeenCalledTimes(1);
    expect(nodeService.to.image).toHaveBeenCalledWith(titleValue);
  });
});
