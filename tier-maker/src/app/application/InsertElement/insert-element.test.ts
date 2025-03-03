import { Random } from '@shared/domain';
import { TierMaker } from '../../domain/tier-maker';
import { InsertElementUseCase } from './insert-element.usecase';

describe('InsertElementUseCase', () => {
  let insertElementUseCase: InsertElementUseCase;
  let tierMaker: TierMaker;

  beforeEach(() => {
    tierMaker = new TierMaker();
    insertElementUseCase = new InsertElementUseCase(tierMaker);
  });
  it('given a url and a tierMaker when execute then insert the element in the tierMaker', () => {
    const url = 'https://example.com/image.jpg';
    const randomNumber = Random.number(20, 100);

    for (let i = 0; i < randomNumber; i++) {
      insertElementUseCase.execute(url);
    }

    expect(tierMaker.get.elements.length).toBe(randomNumber);
  });
});
