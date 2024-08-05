import { signalStore, withState, patchState, withMethods } from '@ngrx/signals';

type LoaderState = {
  active: boolean;
};

const initialState: LoaderState = {
  active: false,
};

export const LoaderStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    activate() {
      patchState(store, () => ({ active: true }));
    },
    deactivate() {
      patchState(store, () => ({ active: false }));
    },
  }))
);
