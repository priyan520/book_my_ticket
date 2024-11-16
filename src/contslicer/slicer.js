import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: localStorage.getItem("movie_indentyfier_index"),
    bill_val: 0,
  },
  reducers: {
    pageval: (state , actions) => {
      state.value = actions.payload;
    },
    getbillval: (state , actions) => {
      state.bill_val = actions.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { pageval , getbillval } = counterSlice.actions

export default counterSlice.reducer