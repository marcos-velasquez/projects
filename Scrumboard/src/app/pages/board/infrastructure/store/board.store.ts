import { signalStore, withState, patchState, withMethods } from '@ngrx/signals';
import { Board } from '../../domain/board.model';

type BoardState = {
  boards: Board[];
};

const initialState: BoardState = {
  boards: [],
};

export const BoardStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    findById(id: string) {
      return store.boards().find((board) => board.isEqual(id));
    },
    set(boards: Board[]) {
      patchState(store, () => ({ boards }));
    },
    insert(board: Board) {
      patchState(store, (state) => ({ boards: [...state.boards, board] }));
    },
    remove(board: Board) {
      patchState(store, (state) => ({ boards: state.boards.filter(({ id }) => id !== board.id) }));
    },
  }))
);
