import { createSlice } from "@reduxjs/toolkit";

const toggleTextSlice = createSlice({
  name: "toggleTextSize",
  initialState: {
    textSize: "text-lg",
  },
  reducers: {
    increaseTextSize: (state) => {
      if (state.textSize === "text-sm") {
        state.textSize = "text-base";
      } else if (state.textSize === "text-base") {
        state.textSize = "text-lg";
      } else if (state.textSize === "text-lg") {
        state.textSize = "text-xl";
      } else if (state.textSize === "text-xl") {
        state.textSize = "text-2xl";
      } else if (state.textSize === "text-2xl") {
        state.textSize = "text-3xl";
      } else if (state.textSize === "text-3xl") {
        state.textSize = "text-4xl";
      }
    },
    decreaseTextSize: (state) => {
      if (state.textSize === "text-4xl") {
        state.textSize = "text-3xl";
      } else if (state.textSize === "text-3xl") {
        state.textSize = "text-2xl";
      } else if (state.textSize === "text-2xl") {
        state.textSize = "text-xl";
      } else if (state.textSize === "text-xl") {
        state.textSize = "text-lg";
      } else if (state.textSize === "text-lg") {
        state.textSize = "text-base";
      } else if (state.textSize === "text-base") {
        state.textSize = "text-sm";
      }
    },
  },
});

export const { increaseTextSize, decreaseTextSize } = toggleTextSlice.actions;

export default toggleTextSlice;
