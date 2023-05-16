import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contactsArr: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contactsArr.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contactsArr.findIndex(
        contact => contact.id === action.payload
      );
      if (index !== -1) {
        state.contactsArr.splice(index, 1);
      }
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contactsArr'],
};

export const contactsReducer = persistReducer(persistConfig, contactSlice.reducer);

export const { addContact, deleteContact } = contactSlice.actions;
