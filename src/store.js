import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./redux/reducers/reducer";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
