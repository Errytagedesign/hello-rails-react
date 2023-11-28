import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from '../Features/greetingsSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
    // Add more reducers if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
