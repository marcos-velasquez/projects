import { signalStore, withState, patchState, withMethods } from '@ngrx/signals';
import { Message } from '../domain/message.model';

type ChatState = {
  messages: Message[];
};

const initialState: ChatState = {
  messages: [],
};

export const ChatStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    set(messages: Message[]) {
      patchState(store, () => ({ messages }));
    },

    reset() {
      this.set([]);
    },

    next(index: number): Message {
      return store.messages()[index + 1];
    },

    previous(index: number): Message {
      return store.messages()[index - 1];
    },
  }))
);
