// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer, // به store می‌گیم که از counterSlice استفاده کن
  },
});

export default store;
