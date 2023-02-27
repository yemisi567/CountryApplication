import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: {},
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    listOfCountries: {
      reducer(state, action) {
        state.countries = action.payload;
      },
    },
  },
});
export const { listOfCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
export const selectAllCountries = (state) => state.countries.countries;
