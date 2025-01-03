"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";

import supplierRedux from "@/lib/redux/supplierRedux";
import customerInvoiceRedux from "@/lib/redux/customerInvoiceRedux";
import userRedux from "@/lib/redux/userRedux";
import storage from "@/lib/redux/storage";
import expensesRedux from "@/lib/redux/expensesRedux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["user"], // Exclude 'user' from being persisted
};
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  user: userRedux,
  supplier: supplierRedux,
  customerInvoice: customerInvoiceRedux,
  expenses: expensesRedux,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
