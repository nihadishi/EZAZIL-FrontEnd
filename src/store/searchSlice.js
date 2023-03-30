import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: false
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        }
    }
});

export default searchSlice.reducer;

export const { setSearch } = searchSlice.actions;