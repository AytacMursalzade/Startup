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
    toggleSubmenu: state => {
      state.isSubmenuOpen = !state.isSubmenuOpen;
    }
  },
});

export const { openSubmenu, closeSubmenu,toggleSubmenu } = navbarSlice.actions;

export default navbarSlice.reducer;
