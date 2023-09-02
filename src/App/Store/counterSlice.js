import { createSlice } from '@reduxjs/toolkit';

const sliceName = 'counter-test';

const saveToLocalStorage = (state) => {
  localStorage.setItem(sliceName, JSON.stringify(state));
};
const getFromLocalStorage = () => {
  const fromLocalstorage = localStorage.getItem(sliceName);
  // localStorage.removeItem(sliceName);
  return JSON.parse(fromLocalstorage);
};

const initialValue = 0;
const initialState = {
  value: initialValue,
  errorMessage: '',
};

const getInitialState = () => {
  const storageValue = getFromLocalStorage();
  if (!storageValue) {
    return initialState;
  } else {
    return storageValue;
  }
};

export const counterSlice = createSlice({
  name: 'counter-test',
  initialState: getInitialState(),
  reducers: {
    increment: (state) => {
      state.value += 1;
      saveToLocalStorage(state);
    },
    incrementBy: (state, action) => {
      // console.log(action);

      if (state.value + action.payload > 40) {
        state.errorMessage = 'Nie moze byc wiecej niz 40';
      } else {
        state.value += action.payload;
      }
      saveToLocalStorage(state);
    },
    decrement: (state) => {
      state.value = state.value - 1;
      saveToLocalStorage(state);
    },
    decrementBy: (state, action) => {
      state.value = state.value - action.payload;
      saveToLocalStorage(state);
    },
    reset: (state) => {
      state.value = initialValue;
    },
    clearError: (state) => {
      state.errorMessage = '';
      saveToLocalStorage(state);
    },
  },
});
export const selectValue = (state) => state?.counterSlice?.value;
export const selectError = (state) => state?.counterSlice?.errorMessage;
export const {
  increment,
  incrementBy,
  decrement,
  decrementBy,
  reset,
  clearError,
} = counterSlice.actions;
