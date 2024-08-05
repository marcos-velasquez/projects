import { signalStore, withState, patchState, withMethods } from '@ngrx/signals';
import { User } from '../domain/user.model';

type UserState = {
  user: User | null;
};

const initialState: UserState = {
  user: null,
};

export const UserStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    set(user: User | null) {
      patchState(store, () => ({ user }));
    },

    reset() {
      this.set(null);
    },
  }))
);
