import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
    name : "menu",
    initialState : {
        menu : false
    },
    reducers : {
        setMenu : (state, action) => {
            state.menu = action.payload;
        }
    }
});

export default menuSlice.reducer;

export const {setMenu} = menuSlice.actions;