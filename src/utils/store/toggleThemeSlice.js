import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    textColor: "white",
    bgColor: "black",
  },
  reducers: {
    toggleTheme: (state) => {
      state.textColor === "black"
        ? (state.textColor = "white")
        : (state.textColor = "black");
      state.bgColor === "white"
        ? (state.bgColor = "black")
        : (state.bgColor = "white");
    },
  },
});

export const { toggleTheme } = appSlice.actions;
export default appSlice;
