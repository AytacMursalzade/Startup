import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  modal: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

export const {} = modalSlice.actions

export default modalSlice.reducer