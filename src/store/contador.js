import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contador",
  initialState: 0,
  reducers: {
    incrementar: (state) => state + 1,
    reduzir: (state) => state - 1,
    // No createSlice, podemos dividir o reducer em 2 métodos, reducer e prepare. O prepare é
    // utilizado para preparar o objeto criado pela ação. Só é possível retornar através do prepare,
    // as propriedades {payload, meta, error}.
    somar: {
      reducer: (state, action) => state + action.payload,
      prepare(payload) {
        return { payload, meta: "local" };
      },
    },
  },
});

export const { incrementar, reduzir, somar } = slice.actions;
export default slice.reducer;
