import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './slices';

// Definiendo la configuración del Store
export const store = configureStore({
  reducer: {
    // Definiendo los reducers (con sus respectivos npmbres)
    cartReducer: cartSlice.reducer,
  },
});

// Types para poder crear nuestros hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;