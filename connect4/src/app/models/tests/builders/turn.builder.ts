import { Random } from '@utils/random.util';
import { Board } from '@models/board.model';
import { Color } from '@models/types/color.type';
import { Turn } from '@models/turn.model';
import { Player } from '@models/player.model';

jest.mock('@utils/random.util', () => ({ Random: { number: jest.fn() } }));

export class TurnBuilder {
  private board = new Board();

  public withRedPlayer(): TurnBuilder {
    (Random.number as jest.Mock).mockReturnValue(0);
    return this;
  }

  public withYellowPlayer(): TurnBuilder {
    (Random.number as jest.Mock).mockReturnValue(1);
    return this;
  }

  public withBoard(board: Board): TurnBuilder {
    this.board = board;
    return this;
  }

  public build() {
    const players = [new Player(this.board, Color.RED), new Player(this.board, Color.YELLOW)];
    return new Turn(players[0], players[1]);
  }
}
