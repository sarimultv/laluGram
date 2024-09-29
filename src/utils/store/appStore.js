import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./toggleThemeSlice";
import toggleTextSlice from "./toggleTextSlice";
import readTextSlice from "./readTextSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice.reducer,
    toggleTextSize: toggleTextSlice.reducer,
    readText: readTextSlice.reducer,
  },
});

export default appStore;
