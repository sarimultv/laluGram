import { createSlice } from "@reduxjs/toolkit";

const readTextSlice = createSlice({
  name: "readText",
  initialState: {
    text: "This is for trial",
  },
  reducers: {
    readScreenText: (state, action) => {
      state.text = action.payload;
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(state.text));
    },
  },
});

export const { readScreenText } = readTextSlice.actions;

export default readTextSlice;
