import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPayloadAddValue } from "./type";
import { fetchValue } from "../../services/api/requests";

export const addValueAsync = createAsyncThunk(
  "test/fetchValue",
  async (value: string, { rejectWithValue }) => {
    const response = await fetchValue(value);
    if (response) return response as IPayloadAddValue;
    return rejectWithValue("false");
  }
);
