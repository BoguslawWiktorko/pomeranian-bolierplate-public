import { configureStore } from '@reduxjs/toolkit';
import { storeTest } from './storeTest';
import { counterSlice } from './counterSlice';

export const { toggleProfile } = storeTest.actions;

export const store = configureStore({
  reducer: {
    testSlice: storeTest.reducer,
    counterSlice: counterSlice.reducer,
  },
});
