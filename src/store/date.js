import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "date",
  initialState: {
    formData: {},
  },
  reducers: {
    addData(state, action) {
      state.formData = action.payload;
    },
  },
});

export const { addData } = slice.actions;

export default slice.reducer;
