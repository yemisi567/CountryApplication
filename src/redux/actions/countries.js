import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CONSTANTS from "../../utils/constants";

const { API_URL } = CONSTANTS;

export const getCountries = createAsyncThunk("fetchCountries", async () => {
  const response = await axios.get(`${API_URL}/v3.1/all`);
  return response;
});

export const getRegion = createAsyncThunk("fetchRegion", async (value) => {
  const response = await axios.get(`${API_URL}/v3.1/region/${value}`);
  return response;
});

export const getCountryDetails = createAsyncThunk(
  "fetchCountryDetails",
  async (name) => {
    const response = await axios.get(`${API_URL}/v3.1/name/${name}`);
    return response;
  }
);

export const getCountryBorders = createAsyncThunk(
  "fetchCountryBorders",
  async (countryCode) => {
    const response = await axios.get(
      `${API_URL}/v3.1/alpha?codes=${countryCode}`
    );
    return response;
  }
);
