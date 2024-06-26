import { UUID } from '../../../../shared/domain';
import { Board } from '../../domain/board.model';
import { UpdateBoardUseCase } from './update-board.usecase';

describe('updateBoardUseCase', () => {
  let updateBoardUseCase: UpdateBoardUseCase;
  const repository = {
    save: jest.fn(),
    remove: jest.fn(),
    getAll: jest.fn(),
    update: jest.fn(),
  };

  beforeEach(() => {
    updateBoardUseCase = new UpdateBoardUseCase(repository);
  });

  it('should update board', async () => {
    const board = Board.create(UUID.generate(), 'title');
    await updateBoardUseCase.execute(board);
    expect(repository.update).toHaveBeenCalledWith(board);
  });

  it('should update title on board', async () => {
    const board = Board.create(UUID.generate(), 'title');
    board.rename('newTitle');
    await updateBoardUseCase.execute(board);
    expect(board.title).toEqual('newTitle');
  });
});
