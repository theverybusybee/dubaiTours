"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { mainData } from "./reducers/main-data";
import { reservationModalData } from "./reducers/reservation-modal";

const rootReducer = combineReducers({
  mainData: mainData,
  reservationModalData: reservationModalData,
});
const preloadedState = {};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (thunkmiddleware) =>
    thunkmiddleware({ serializableCheck: false }).concat(),
  preloadedState,
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
export type TDispatch = typeof store.dispatch;
