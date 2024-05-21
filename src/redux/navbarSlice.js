import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSubmenuOpen: true,
  
};


const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    openSubmenu: (state) => {
      state.isSubmenuOpen = true;
    },
    
    closeSubmenu: (state) => {
      state.isSubmenuOpen = false;
    },
  },
});

export const { openSubmenu, closeSubmenu } = navbarSlice.actions;

export default navbarSlice.reducer;
