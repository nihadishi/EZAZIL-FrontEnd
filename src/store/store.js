import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import menuSlice from "./menuSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
    reducer: {
        home: homeSlice,
        menu : menuSlice,
        search : searchSlice
    },
});
