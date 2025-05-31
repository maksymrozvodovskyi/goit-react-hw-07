import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./filtersSlice";
import contactSliceReducer from "./contactsSlice";

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
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contacts-redux",
  storage,
};

const persistedFilterReducer = persistReducer(
  persistConfig,
  filterSliceReducer
);

const persistedContactsReducer = persistReducer(
  persistConfig,
  contactSliceReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: persistedFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
