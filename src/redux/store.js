import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./filtersSlice";
import contactSliceReducer from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
    filters: filterSliceReducer,
  },
});
