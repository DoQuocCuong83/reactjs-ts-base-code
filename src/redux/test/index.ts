import { createSlice } from "@reduxjs/toolkit";
import { addValueAsync } from "./async-action";
import { IRootState } from "../";

interface ITestState {
  value: string;
  status: "loading" | "success" | "failed";
}

const initialState: ITestState = {
  value: "",
  status: "success"
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addValueAsync.pending, state => {
        state.status = "loading";
      })
      .addCase(addValueAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.value = action.payload.data;
      })
      .addCase(addValueAsync.rejected, state => {
        state.status = "success";
      });
  }
});

export const selectValue = (state: IRootState) => state.test.value;
export const selectStatus = (state: IRootState) => state.test.status;

export default testSlice.reducer;
