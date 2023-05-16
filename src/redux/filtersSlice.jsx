import { createSlice } from "@reduxjs/toolkit";

 export const filtersSlice = createSlice({
  name: "filter",
  initialState: '',
  reducers: {
    setStatusFilter: (state, action) => action.payload,
  },
});
// Експортуємо генератори екшенів та редюсер
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
